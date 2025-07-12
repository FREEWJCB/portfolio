"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { H2 } from "@/components/atoms/typography"
import { ProjectCard } from "@/components/atoms/project-card"
import { Button } from "@/components/atoms/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const projects = [
  {
    title: "PokeApi App",
    description:
      "Plataforma de pokemon donde se muestra los datos de los pokemons con Next.js, Tailwind CSS, TypeScript y vitest.",
    image: "/pokeapi.png",
    technologies: ["Node.js", "Next.js", "Tailwind CSS", "TypeScript", "Vitest"],
    liveUrl: "https://pkm-pokedex.vercel.app/",
    githubUrl: "https://github.com/FREEWJCB/pkm-pokedex.git",
  },
  {
    title: "Soccer Leagues",
    description: "Plataforma de estadisticas de futbol por ligas y equipos, construido con vue.js.",
    image: "/soccer.png",
    technologies: ["Node.js", "Javascript", "Vue.js", "Vitest", "Tailwind CSS"],
    liveUrl: "https://soccer-leagues-tau.vercel.app/",
    githubUrl: "https://github.com/FREEWJCB/soccer-leagues.git",
  },
  {
    title: "API REST Microservicios of Store",
    description: "Arquitectura de microservicios con Nest.js, api rest de carrito de venta.",
    image: "/nest.svg",
    technologies: ["Node.js", "Nest.js", "Sequelize", "Postgresql", "Jest"],
    githubUrl: "https://github.com/FREEWJCB/store-ms",
  },
  {
    title: "User Challenge",
    description: "Api rest de retos de usuarios con laravel.",
    image: "/laravel.png",
    technologies: ["Laravel", "Postgresql", "PHPUNIT"],
    githubUrl: "https://github.com/FREEWJCB/challange",
  },
]

export function ProjectsSlider() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    isAutoPlaying ? [autoplayPlugin] : [],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const toggleAutoplay = () => {
    if (isAutoPlaying) {
      autoplayPlugin.stop()
    } else {
      autoplayPlugin.play()
    }
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-violet-50/70 via-purple-50/50 to-indigo-50/70 dark:from-gray-900/70 dark:via-gray-800/50 dark:to-gray-900/70 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-violet-300/20 to-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <H2 className="mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </H2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Algunos de mis trabajos más recientes y destacados</p>

          {/* Autoplay control */}
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoplay}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200/50 dark:border-purple-600/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Reproducir
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hover:scale-110 transition-all duration-200 w-14 h-14 rounded-full p-0 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600 hover:to-indigo-600 border-none shadow-xl backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:scale-110 transition-all duration-200 w-14 h-14 rounded-full p-0 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600 hover:to-indigo-600 border-none shadow-xl backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 gap-3"
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex
                    ? "w-8 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Project Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-600/50">
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {selectedIndex + 1} de {projects.length} proyectos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
