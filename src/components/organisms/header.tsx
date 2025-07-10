import { Navigation } from "@/components/molecules/navigation"
import { ThemeToggle } from "@/components/molecules/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200">
          Walter Caro
        </div>
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
