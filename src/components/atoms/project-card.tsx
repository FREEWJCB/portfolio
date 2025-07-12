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

  const uniqueTechnologies = Array.from(new Set(technologies))

  return (
    <div className="group relative rounded-2xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 p-[1px] shadow-xl transition-all hover:scale-[1.02]">
      <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-[#0f0f1c] to-[#1b1b2e] p-6 text-white">
        <div className="relative overflow-hidden h-48 mb-4 rounded-lg">
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
        </div>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-400 transition-colors duration-200">
            {title}
          </h3>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>

        <p className="text-sm text-white/70 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {uniqueTechnologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-3 py-1.5 text-xs bg-white/10 text-white rounded-full border border-white/20 hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/10">
          {liveUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleLiveClick}
              className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:text-purple-300 transition-all duration-200 cursor-pointer"
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
              className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:text-purple-300 transition-all duration-200 cursor-pointer"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
