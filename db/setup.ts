import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

async function main() {
  try {
    // Connect directly with pg to drop tables
    const client = await pool.connect()

    console.log('Dropping existing tables...')
    await client.query(`
      DROP TABLE IF EXISTS "products" CASCADE;
      DROP INDEX IF EXISTS "product_slug_idx";
    `)

    console.log('Creating tables...')
    await client.query(`
      CREATE TABLE "products" (
        "id" serial PRIMARY KEY,
        "name" text NOT NULL,
        "slug" text NOT NULL,
        "category" text NOT NULL,
        "image" text NOT NULL,
        "price" text NOT NULL,
        "brand" text NOT NULL,
        "rating" numeric(2,1) NOT NULL,
        "numReviews" integer NOT NULL,
        "stock" integer NOT NULL,
        "description" text NOT NULL,
        "isFeatured" boolean NOT NULL DEFAULT false,
        "banner" text
      );

      CREATE UNIQUE INDEX "product_slug_idx" ON "products" ("slug");
    `)

    console.log('Database setup completed successfully!')
    client.release()
  } catch (error) {
    console.error('Error setting up database:', error)
    throw error
  } finally {
    await pool.end()
  }
}

main().catch((err) => {
  console.error('Setup failed!', err)
  process.exit(1)
})
