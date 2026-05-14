'use client'

import React from 'react'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  color?: 'pink' | 'cyan' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export default function NeonButton({
  children,
  onClick,
  color = 'cyan',
  size = 'md',
  disabled = false,
}: NeonButtonProps) {
  const colorMap = {
    pink: '#ff006e',
    cyan: '#00d9ff',
    purple: '#8338ec',
    green: '#06ffa5',
  }

  const sizeMap = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const bgColor = colorMap[color]
  const sizeClass = sizeMap[size]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative font-display font-bold rounded-lg
        border-2 transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:scale-105 active:scale-95
        ${sizeClass}
      `}
      style={{
        borderColor: bgColor,
        color: bgColor,
        boxShadow: disabled ? 'none' : `0 0 15px ${bgColor}, inset 0 0 10px rgba(0, 0, 0, 0.5)`,
      }}
    >
      {children}
    </button>
  )
}