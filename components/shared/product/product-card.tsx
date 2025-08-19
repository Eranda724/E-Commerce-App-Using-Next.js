import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      {/* Header with image */}
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover rounded"
            height={300}
            src={product.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>

      {/* Body with brand, name, price */}
      <CardContent className="p-4 grid gap-4">
        {/* Brand */}
        <div className="grid gap-1.5 text-sm leading-4">
          <p className="text-xs leading-3">{product.brand}</p>
        </div>

        {/* Product name */}
        <div className="grid gap-1.5 text-sm leading-4">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
        </div>

        {/* Rating and price/stock */}
        <div className="flex-between gap-4">
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
