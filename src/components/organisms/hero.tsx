import Image from "next/image"
import { H1, Paragraph } from "@/components/atoms/typography"
import { Button } from "@/components/atoms/button"
import { SocialLinks } from "@/components/molecules/social-links"
import { Download, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <H1 className="leading-tight text-blue-400">
                ¡Hola! Soy <span className="text-blue-400 font-bold">Walter Caro</span>
              </H1>

              <Paragraph className="text-lg leading-relaxed text-gray-300">
                Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en
                tecnologías modernas tanto en frontend como backend.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-blue-700 border-2 border-blue-300 bg-white/90 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-400 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm shadow-md"
                >
                  <a href="#contact" className="flex items-center">
                    Contactar
                    <ArrowDown className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-fadeInUp">
              <SocialLinks />
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative animate-fadeInRight">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glow BG adaptado a light/dark */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-10 animate-float"></div>

              <Image
                src="/perfil.jpg?height=320&width=320"
                alt="Tu foto de perfil"
                width={320}
                height={320}
                className="relative z-10 rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
