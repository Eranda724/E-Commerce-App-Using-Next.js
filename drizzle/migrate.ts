import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

const db = drizzle(pool)

async function main() {
  console.log('Running migrations...')

  await migrate(db, { migrationsFolder: 'drizzle' })

  console.log('Migrations completed!')

  await pool.end()
}

main().catch((err) => {
  console.error('Migration failed!', err)
  process.exit(1)
})
