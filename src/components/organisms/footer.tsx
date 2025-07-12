import { SocialLinks } from "@/components/molecules/social-links"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Walter Caro</h3>
            <p className="text-gray-400">Desarrollador Full Stack</p>
          </div>

          <SocialLinks />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Walter Caro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
