"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/atoms/button"

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 p-0">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 min-w-[150px]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
