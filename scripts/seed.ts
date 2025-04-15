import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample products
  const products = [
    {
      name: 'Smartphone X',
      description: 'Latest smartphone with amazing features',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      category: 'Electronics',
      stock: 50,
    },
    {
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      category: 'Electronics',
      stock: 30,
    },
    {
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling headphones',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics',
      stock: 100,
    },
    {
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics',
      stock: 75,
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Sample products created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 