import { Navigation } from "@/components/molecules/navigation"
import { ThemeToggle } from "@/components/molecules/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900 dark:text-white">Tu Nombre</div>
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
