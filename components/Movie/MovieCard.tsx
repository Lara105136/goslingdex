'use client'

import React from 'react'

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

interface MovieCardProps {
  movie: Movie
  onSelect: () => void
  userRating?: number
}

export default function MovieCard({
  movie,
  onSelect,
  userRating,
}: MovieCardProps) {
  const extractPath = (url: string | null) => {
    if (!url) return null
    // Se for URL completa do TMDB, extrai o path
    if (url.includes('/w500/')) {
      return url.split('/w500/')[1]
    }
    // Se já for só o path
    return url
  }

  const posterPath = extractPath(movie.posterUrl)
  const proxyUrl = posterPath
    ? `/api/poster?path=${encodeURIComponent(posterPath)}`
    : null

  return (
    <div onClick={onSelect} className="cursor-pointer group">
      <div
        className="relative rounded-lg overflow-hidden neon-border transition-all duration-300 hover:shadow-lg"
        style={{
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
        }}
      >
        {/* Poster */}
        <div className="relative w-full aspect-[2/3] bg-bg-card">
          {proxyUrl ? (
            <img
              src={proxyUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Se a imagem falhar, mostra ícone
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          ) : null}

          {/* Fallback se não tiver imagem */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-6xl"
            id={`fallback-${movie.id}`}
          >
            🎬
          </div>

          {/* Overlay ao hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <button className="w-full bg-neon-cyan text-bg-base font-bold py-2 rounded">
              Ver Detalhes
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-3 bg-bg-card">
          <h3 className="font-display font-bold text-sm text-white truncate">
            {movie.title}
          </h3>
          <p className="text-text-secondary text-xs">{movie.year}</p>
          <p className="text-text-tertiary text-xs mt-1">{movie.director}</p>

          {/* Gêneros */}
          <div className="flex gap-1 flex-wrap mt-2">
            {movie.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-xs px-2 py-1 rounded bg-bg-hover text-neon-cyan"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Rating do Usuário */}
          {userRating && (
            <p className="text-neon-green font-mono text-lg font-bold mt-2">
              ⭐ {userRating}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}