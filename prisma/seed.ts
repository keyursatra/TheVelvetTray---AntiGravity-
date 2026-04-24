import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Upsert Collections
  const collections = [
    {
      name: 'Heritage Collection',
      slug: 'heritage',
      description: 'Traditional Indian art forms meet modern luxury gifting.',
      image: '/collections/heritage.jpg',
    },
    {
      name: 'Sustainable Luxury',
      slug: 'sustainable',
      description: 'Eco-friendly materials crafted into premium gift sets.',
      image: '/collections/sustainable.jpg',
    },
    {
      name: 'Corporate Executive',
      slug: 'c-suite',
      description: 'Sophisticated hampers designed for the modern workspace.',
      image: '/collections/c-suite.jpg',
    },
  ];

  for (const col of collections) {
    await prisma.collection.upsert({
      where: { slug: col.slug },
      update: col,
      create: col,
    });
  }

  const heritage = await prisma.collection.findUnique({ where: { slug: 'heritage' } });
  const cSuite = await prisma.collection.findUnique({ where: { slug: 'c-suite' } });

  // Upsert Hampers
  const hampers = [
    {
      name: 'Rajwadi Mandala Set',
      slug: 'rajwadi-mandala',
      price: 4500,
      tier: 'Premier',
      origin: 'Rajasthan',
      description: 'A handcrafted velvet tray featuring intricate mandala patterns and premium dry fruits.',
      image: '/products/rajwadi-mandala.jpg',
      collectionId: heritage?.id!,
      items: ['Silver-plated bowls', 'Premium Almonds', 'Cashews', 'Saffron'],
      moq: 10,
    },
    {
      name: 'Midnight Premier',
      slug: 'midnight-premier',
      price: 3200,
      tier: 'Signature',
      origin: 'In-house',
      description: 'Sleek black velvet box with golden accents, perfect for corporate gifting.',
      image: '/products/midnight-premier.jpg',
      collectionId: cSuite?.id!,
      items: ['Leather Journal', 'Metal Pen', 'Dark Chocolates'],
      moq: 20,
      isCorporateReady: true,
    },
    {
      name: 'Emerald Executive',
      slug: 'emerald-executive',
      price: 5800,
      tier: 'Classic',
      origin: 'Varanasi',
      description: 'Royal emerald green tray with silk lining and artisanal artifacts.',
      image: '/products/emerald-executive.jpg',
      collectionId: cSuite?.id!,
      items: ['Brass Diya', 'Silk Scarf', 'Gourmet Tea'],
      moq: 5,
    },
  ];

  for (const hamper of hampers) {
    await prisma.hamper.upsert({
      where: { slug: hamper.slug },
      update: hamper,
      create: hamper,
    });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
