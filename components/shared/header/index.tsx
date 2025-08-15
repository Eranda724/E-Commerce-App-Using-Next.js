import { ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" aria-label={`${APP_NAME} home`}>
            <Image src="/assets/icons/logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} />
            <span className="font-semibold">{APP_NAME}</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/cart" className="flex items-center gap-2">
              <ShoppingCart aria-hidden="true" />
              <span>Cart</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in" className="flex items-center gap-2">
              <User aria-hidden="true" />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
