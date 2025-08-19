CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"category" text NOT NULL,
	"image" text NOT NULL,
	"price" text NOT NULL,
	"brand" text NOT NULL,
	"rating" numeric(2, 1) NOT NULL,
	"numReviews" integer NOT NULL,
	"stock" integer NOT NULL,
	"description" text NOT NULL,
	"isFeatured" boolean DEFAULT false NOT NULL,
	"banner" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX "product_slug_idx" ON "products" USING btree ("slug");