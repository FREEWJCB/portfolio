"use client"

import { useState, useEffect } from "react"
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
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con React, Node.js y Stripe.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/ecommerce",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con autenticación y colaboración en tiempo real.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/task-app",
  },
]

export function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(projects.length / 2))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(projects.length / 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(projects.length / 2)) % Math.ceil(projects.length / 2))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const startIndex = currentIndex * 2
  const visibleProjects = projects.slice(startIndex, startIndex + 2)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-violet-50/70 via-purple-50/50 to-indigo-50/70 dark:from-gray-900/70 dark:via-gray-800/50 dark:to-gray-900/70 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-violet-300/20 to-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
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
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 animate-fadeInUp">
              {visibleProjects.map((project, index) => (
                <div key={`${project.title}-${startIndex + index}`} className="transform transition-all duration-500">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hover:scale-110 transition-all duration-200 w-14 h-14 rounded-full p-0 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600 hover:to-indigo-600 border-none shadow-xl backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:scale-110 transition-all duration-200 w-14 h-14 rounded-full p-0 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 hover:from-purple-600 hover:to-indigo-600 border-none shadow-xl backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500 hover:scale-125"
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-600/50">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {startIndex + 1}-{Math.min(startIndex + 2, projects.length)} de {projects.length} proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
