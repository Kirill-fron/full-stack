import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Получаем все записи
    const users = await prisma.user.findMany();
    const categories = await prisma.category.findMany();
    
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      database: 'Connected ✅',
      tables: {
        User: {
          count: users.length,
          data: users
        },
        Category: {
          count: categories.length,
          data: categories
        }
      }
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false,
      error: error.message || String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// POST endpoint для создания тестовых данных
export async function POST() {
  try {
    // Создаем тестового пользователя
    const user = await prisma.user.create({
      data: {
        fullName: 'Тестовый Пользователь',
        email: `test${Date.now()}@example.com`,
        password: 'password123'
      }
    });

    // Создаем тестовые категории (если их еще нет)
    const existingCategories = await prisma.category.findMany();
    
    let categories = existingCategories;
    
    if (existingCategories.length === 0) {
      await prisma.category.createMany({
        data: [
          { name: 'Пиццы' },
          { name: 'Комбо' },
          { name: 'Закуски' },
          { name: 'Напитки' },
          { name: 'Десерты' }
        ]
      });
      categories = await prisma.category.findMany();
    }

    return NextResponse.json({
      success: true,
      message: 'Тестовые данные созданы!',
      created: {
        user,
        categoriesCount: categories.length
      }
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false,
      error: error.message || String(error)
    }, { status: 500 });
  }
}

