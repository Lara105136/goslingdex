import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🎬 Goslingdex',
  description: 'Um jogo de filmes para vocês',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-base text-white font-sans">
        {children}
      </body>
    </html>
  )
}