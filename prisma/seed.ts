import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Очищаем существующие данные (опционально)
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Создаем пользователей
  const users = await prisma.user.createMany({
    data: [
      {
        fullName: 'Иван Иванов',
        email: 'ivan@example.com',
        password: 'password123'
      },
      {
        fullName: 'Мария Петрова',
        email: 'maria@example.com',
        password: 'password456'
      },
      {
        fullName: 'Петр Сидоров',
        email: 'petr@example.com',
        password: 'password789'
      }
    ]
  });

  console.log(`✅ Created ${users.count} users`);

  // Создаем категории
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Пиццы' },
      { name: 'Комбо' },
      { name: 'Закуски' },
      { name: 'Напитки' },
      { name: 'Десерты' },
      { name: 'Соусы' }
    ]
  });

  console.log(`✅ Created ${categories.count} categories`);

  // Получаем созданные данные для вывода
  const allUsers = await prisma.user.findMany();
  const allCategories = await prisma.category.findMany();

  console.log('\n📊 Database contents:');
  console.log('Users:', allUsers);
  console.log('Categories:', allCategories);
  
  console.log('\n✨ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

