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
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <Button size="sm" className="bg-white text-black hover:bg-gray-100">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
