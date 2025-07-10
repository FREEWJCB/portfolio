"use client"

import Image from "next/image"
import { Button } from "./button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  const handleLiveClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  // Eliminar duplicados y crear claves únicas
  const uniqueTechnologies = Array.from(new Set(technologies))

  return (
    <div className="group bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-800/90 dark:to-gray-900/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50 transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-100/80 via-indigo-100/60 to-blue-100/80 dark:from-gray-700 dark:to-gray-800">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center group-hover:scale-105 transition-transform duration-300 p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <Button
              size="sm"
              className="bg-white/95 text-gray-900 hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm"
              onClick={handleLiveClick}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-white/80 text-white hover:bg-white hover:text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer bg-black/20 backdrop-blur-sm"
              onClick={handleGithubClick}
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          )}
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400/30 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-400/30 to-transparent rounded-tr-full"></div>
      </div>

      <div className="p-6 bg-gradient-to-br from-white via-slate-50/50 to-gray-100/80 dark:from-gray-800/90 dark:to-gray-900/90">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-200">
            {title}
          </h3>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {uniqueTechnologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-100/80 to-indigo-100/80 dark:from-gray-700/80 dark:to-gray-600/80 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200/50 dark:border-gray-600/50 hover:scale-105 transition-transform duration-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones adicionales en la parte inferior */}
        <div className="flex gap-3 pt-4 border-t border-gradient-to-r from-purple-200/50 via-gray-200/50 to-indigo-200/50 dark:border-gray-700/50">
          {liveUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleLiveClick}
              className="flex-1 bg-gradient-to-r from-purple-50/80 to-indigo-50/80 hover:from-purple-100 hover:to-indigo-100 dark:from-gray-700/50 dark:to-gray-600/50 dark:hover:from-purple-900/30 dark:hover:to-indigo-900/30 hover:border-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 cursor-pointer border-purple-200/50 dark:border-gray-600/50"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleGithubClick}
              className="flex-1 bg-gradient-to-r from-gray-50/80 to-slate-50/80 hover:from-gray-100 hover:to-slate-100 dark:from-gray-700/50 dark:to-gray-600/50 dark:hover:from-gray-600/50 dark:hover:to-gray-500/50 hover:border-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 cursor-pointer border-gray-200/50 dark:border-gray-600/50"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          )}
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
