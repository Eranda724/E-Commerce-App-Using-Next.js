import { products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'

export type Product = typeof products.$inferSelect
