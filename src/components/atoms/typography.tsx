import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return <h1 className={cn("text-4xl md:text-6xl font-bold tracking-tight text-white", className)}>{children}</h1>
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight text-white", className)}>{children}</h2>
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn("text-xl md:text-2xl font-semibold text-white", className)}>{children}</h3>
}

export function Paragraph({ children, className }: TypographyProps) {
  return <p className={cn("text-base md:text-lg text-gray-300 leading-relaxed", className)}>{children}</p>
}
