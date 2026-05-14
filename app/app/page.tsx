'use client'

import { useEffect, useState } from 'react'
import NeonButton from '@/components/ui/NeonButton'
import MovieCard from '@/components/Movie/MovieCard'

interface Movie {
  id: string
  title: string
  year: number
  director: string
  genres: string[]
  posterUrl: string | null
  synopsis: string | null
  runtime: number | null
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    try {
      const res = await fetch('/api/filmes')
      const data = await res.json()
      console.log('Filmes carregados:', data)
      setMovies(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-base to-bg-secondary p-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-2 neon-glow">
          🎬 Goslingdex
        </h1>
        <p className="text-gray-400 text-lg">
          Um jogo de filmes para vocês
        </p>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {[1, 2].map((i) => (
          <div key={i} className="p-4 bg-bg-card rounded-lg neon-border">
            <div className="text-3xl mb-2">👤</div>
            <h3 className="font-bold text-white mb-2">
              {i === 1 ? 'Lara' : 'João'}
            </h3>
            <p className="text-gray-500 text-sm">Nível {i + 3}</p>
            <p className="text-cyan-400 font-mono font-bold">
              {(i + 1) * 1000} XP
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mb-12">
        <NeonButton color="green" size="lg">
          🎬 Assistir Novo Filme
        </NeonButton>
      </div>

      {/* Movies Grid */}
      <h2 className="text-2xl font-bold text-white mb-6">
        Filmes do Ryan Gosling
      </h2>

      {loading ? (
        <div className="text-center text-gray-400 py-12">
          Carregando filmes... ⏳
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          Nenhum filme encontrado 😢
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={() => console.log('Selecionou:', movie.title)}
            />
          ))}
        </div>
      )}
    </div>
  )
}