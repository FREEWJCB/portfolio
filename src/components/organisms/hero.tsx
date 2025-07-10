import Image from "next/image"
import { H1, Paragraph } from "@/components/atoms/typography"
import { Button } from "@/components/atoms/button"
import { SocialLinks } from "@/components/molecules/social-links"
import { Download, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 light-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-4">
              <H1 className="leading-tight">
                ¡Hola! Soy <span className="text-blue-600 dark:text-blue-400 animate-pulse-custom">Walter Caro</span>
              </H1>
              <Paragraph className="text-xl leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en
                tecnologías modernas tanto en frontend como backend.
              </Paragraph>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-200 glass bg-transparent"
              >
                <a href="#contact" className="flex items-center">
                  Contactar
                  <ArrowDown className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            <div className="animate-fadeInUp">
              <SocialLinks />
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse-custom"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-10 animate-float"></div>
              <Image
                src="/perfil.jpg?height=320&width=320"
                alt="Tu foto de perfil"
                width={320}
                height={320}
                className="relative z-10 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
