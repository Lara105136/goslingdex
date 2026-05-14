import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(movies)
  } catch (error) {
    console.error('Erro ao buscar filmes:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar filmes' },
      { status: 500 }
    )
  }
}