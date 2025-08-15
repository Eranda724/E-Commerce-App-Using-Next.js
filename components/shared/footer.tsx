import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="p-5 flex items-center justify-center text-sm text-gray-500">
        © 2025 {APP_NAME}. All rights reserved.
      </div>
    </footer>
  )
}