import { Navigation } from "@/components/molecules/navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-md transition-colors shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white hover:scale-105 transition-transform duration-200">
          Walter Caro
        </div>
        <div className="flex items-center gap-4">
          <Navigation />
        </div>
      </div>
    </header>
  )
}
