import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from './schema'
import sampleData from '../lib/sample-data'

const main = async () => {
  try {
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
    })
    await client.connect()

    const db = drizzle(client)

    await db.delete(schema.products)

    const resProducts = await db
      .insert(schema.products)
      .values(
        sampleData.products.map((p) => ({
          name: p.name,
          slug: p.slug,
          category: p.category,
          image: p.images[0],
          price: String(p.price),
          brand: p.brand,
          rating: String(p.rating),
          numReviews: p.numReviews,
          stock: p.stock,
          description: p.description,
          isFeatured: p.isFeatured,
          banner: p.banner,
        }))
      )
      .returning()

    console.log({ resProducts })

    await client.end()
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
