import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.hamper.deleteMany();
  await prisma.collection.deleteMany();

  // Create Signature Collection
  const signature = await prisma.collection.create({
    data: {
      name: 'The Signature Series',
      slug: 'signature-series',
      description: 'Our most prestigious hampers, built with award-winning craft and provenance.',
      image: '/collections/c-suite.jpg',
    }
  });

  // Add Hampers
  await prisma.hamper.createMany({
    data: [
      {
        name: 'The Emerald Executive',
        slug: 'emerald-executive',
        price: 18500,
        tier: 'Signature',
        origin: 'Multiple Regions',
        description: 'A deep emerald velvet trunk featuring copper-ware, artisanal journals, and single-origin teas.',
        image: '/products/emerald-executive.jpg',
        collectionId: signature.id,
        items: ['Copper Bottle', 'Leather Journal', 'Brass Pen', 'Fine Leaf Tea'],
      },
      {
        name: 'The Rajwadi Mandala',
        slug: 'rajwadi-mandala',
        price: 12500,
        tier: 'Signature',
        origin: 'Rajasthan',
        description: 'A round maroon velvet box with intricate gold mandala art, featuring premium snacks and preserves.',
        image: '/products/rajwadi-mandala.jpg',
        collectionId: signature.id,
        items: ['Mandala Box', 'Artisanal Preserves', 'Gourmet Nuts', 'Silver Leaf Sweets'],
      },
      {
        name: 'The Midnight Premier',
        slug: 'midnight-premier',
        price: 9500,
        tier: 'Signature',
        origin: 'Urban Craft',
        description: 'A sleek navy blue velvet box with gold ribbon, perfect for modern corporate appreciation.',
        image: '/products/midnight-premier.jpg',
        collectionId: signature.id,
        items: ['Navy Velvet Box', 'Gold Ribbon', 'Custom Card', 'Premium Chocolates'],
      }
    ]
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
