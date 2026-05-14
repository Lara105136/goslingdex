import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchRyanGoslingMovies() {
  try {
    console.log('🔑 API Key:', API_KEY ? '✅ Carregada' : '❌ Não encontrada')
    
    // Buscar filmes do Ryan Gosling (ID: 31)
    const response = await fetch(
      `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}`
    )
    
    const data = await response.json()
    const movies = data.cast || []

    console.log(`📽️ Encontrado ${movies.length} filmes`)

    // Filtrar filmes com poster
    const moviesWithPoster = movies
      .filter((movie: any) => movie.poster_path)
      .sort((a: any, b: any) => 
        new Date(b.release_date || '').getTime() - new Date(a.release_date || '').getTime()
      )
      .slice(0, 30)

    console.log(`✅ ${moviesWithPoster.length} com poster`)

    // Limpar filmes anteriores
    await prisma.movie.deleteMany({})

    // Salvar novos filmes
    for (const movie of moviesWithPoster) {
      await prisma.movie.create({
        data: {
          title: movie.title,
          year: movie.release_date ? new Date(movie.release_date).getFullYear() : 2000,
          director: 'Ryan Gosling',
          genres: ['Drama'],
          runtime: 120,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          synopsis: movie.overview || 'Filme do Ryan Gosling',
        },
      })
      console.log(`✅ ${movie.title}`)
    }

    console.log('🎬 Seed completo!')
  } catch (error) {
    console.error('❌ Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

fetchRyanGoslingMovies()