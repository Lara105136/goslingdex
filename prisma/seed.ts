import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ryGoslingMovies = [
  {
    title: 'Drive',
    year: 2011,
    director: 'Nicolas Winding Refn',
    genres: ['Crime', 'Drama'],
    runtime: 100,
    posterUrl: '/eKXyFbJWQq7YhVrP2JtpJPBwKuL.jpg',
    synopsis: 'Um motorista de aluguel entra em conflito com bandidos.',
  },
  {
    title: 'The Notebook',
    year: 2004,
    director: 'Nick Cassavetes',
    genres: ['Romance', 'Drama'],
    runtime: 123,
    posterUrl: '/ikM8DfQJo4DT6R4c1lqd4kz1Z68.jpg',
    synopsis: 'Um casal apaixonado se separa quando as famílias desaprovam.',
  },
  {
    title: 'La La Land',
    year: 2016,
    director: 'Damien Chazelle',
    genres: ['Drama', 'Music'],
    runtime: 128,
    posterUrl: '/3sZJR7H3cjJkfvVRXUXmGm8PBYW.jpg',
    synopsis: 'Um músico e uma atriz vivem um romance em Los Angeles.',
  },
  {
    title: 'Blade Runner 2049',
    year: 2017,
    director: 'Denis Villeneuve',
    genres: ['Sci-Fi', 'Thriller'],
    runtime: 163,
    posterUrl: '/gCqWvzc3J3rYgyKqUIWs50aKaXx.jpg',
    synopsis: 'Um novo blade runner descobre um segredo que muda o futuro.',
  },
  {
    title: 'Crazy, Stupid, Love',
    year: 2011,
    director: 'Glenn Ficarra, John Requa',
    genres: ['Comedy', 'Drama'],
    runtime: 118,
    posterUrl: '/nUK8Gx2tpNpV3sQGE8WKMF1SkJM.jpg',
    synopsis: 'Um casal em crise encontra ajuda de um homem experiente.',
  },
  {
    title: 'The Gray Man',
    year: 2022,
    director: 'Anthony Russo, Joe Russo',
    genres: ['Action', 'Thriller'],
    runtime: 122,
    posterUrl: '/Z0XBh4E8vFqOHu3iGjIQMPdKHXy.jpg',
    synopsis: 'Um agente secreto enfrenta perseguição enquanto tenta se redimir.',
  },
  {
    title: 'Barbie',
    year: 2023,
    director: 'Greta Gerwig',
    genres: ['Comedy', 'Fantasy'],
    runtime: 114,
    posterUrl: '/iuFNMS8U5cb6xvzFLIkt5GIfGXA.jpg',
    synopsis: 'Barbie e Ken exploram o mundo real.',
  },
  {
    title: 'First Man',
    year: 2018,
    director: 'Damien Chazelle',
    genres: ['Biography', 'Drama'],
    runtime: 141,
    posterUrl: '/AiRMLByt9pAPMjWQVVqmXCVZuod.jpg',
    synopsis: 'A história de Neil Armstrong e sua jornada para a Lua.',
  },
]

async function main() {
  console.log('🌱 Plantando filmes com posters reais...')

  await prisma.movie.deleteMany({})

  for (const movie of ryGoslingMovies) {
    await prisma.movie.create({
      data: movie,
    })
    console.log(`✅ ${movie.title}`)
  }

  console.log('✅ Seed completo com posters!')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('❌ Erro:', e)
    process.exit(1)
  })