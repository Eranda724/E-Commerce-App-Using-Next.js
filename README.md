# Marketplace Website

A modern marketplace website built with Next.js, MySQL, and Tailwind CSS.

## Features

- Product grid display with 4 columns
- Search functionality
- Category filtering
- Shopping cart management
- Admin panel for adding products
- Responsive design

## Prerequisites

- Node.js (v14 or later)
- MySQL database
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd marketplace
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your MySQL database credentials:

```env
DATABASE_URL="mysql://username:password@localhost:3306/marketplace"
```

4. Initialize the database:

```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Main product listing page
  - `admin/page.tsx` - Admin panel for adding products
  - `cart/page.tsx` - Shopping cart page
  - `api/` - API routes
- `prisma/` - Database schema and migrations
- `store/` - State management
- `public/` - Static assets

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
