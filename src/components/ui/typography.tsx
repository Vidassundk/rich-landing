import { cn } from '@/utilities/cn'
import React, { ReactNode } from 'react'

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  children: ReactNode
}

const Typography: React.FC<TypographyProps> = ({ variant = 'h1', className, children }) => {
  const Tag: React.ElementType = variant

  const variantClass = variant === 'h1' ? 'text-5xl md:text-7xl font-bold tracking-tighter' : ''

  const combinedClassName = cn(variantClass, className)

  return <Tag className={combinedClassName}>{children}</Tag>
}

export default Typography
