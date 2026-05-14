import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const path = request.nextUrl.searchParams.get('path')

    if (!path) {
      return NextResponse.json({ error: 'Path required' }, { status: 400 })
    }

    const url = `https://image.tmdb.org/t/p/w500${path}`
    const response = await fetch(url)

    if (!response.ok) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}