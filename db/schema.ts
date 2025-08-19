import { pgTable, serial, text, integer, boolean, numeric, uniqueIndex } from 'drizzle-orm/pg-core';

export const products = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    category: text('category').notNull(),
    image: text('image').notNull(),
    price: text('price').notNull(),
    brand: text('brand').notNull(),
    rating: numeric('rating', { precision: 2, scale: 1 }).notNull(),
    numReviews: integer('numReviews').notNull(),
    stock: integer('stock').notNull(),
    description: text('description').notNull(),
    isFeatured: boolean('isFeatured').default(false).notNull(),
    banner: text('banner'),
  },
  (table) => ({
    productSlugIdx: uniqueIndex('product_slug_idx').on(table.slug),
  })
);
