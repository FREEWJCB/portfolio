import { H2 } from "@/components/atoms/typography"
import { ProjectCard } from "@/components/atoms/project-card"

const projects = [
  {
    title: "E-commerce Full Stack",
    description:
      "Plataforma de comercio electrónico completa con React, Node.js y PostgreSQL. Incluye autenticación, carrito de compras y panel de administración.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo para análisis de datos con gráficos en tiempo real, construido con Next.js y Python.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "Python", "Chart.js", "MongoDB"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "API REST Microservicios",
    description:
      "Arquitectura de microservicios con Node.js, Docker y Kubernetes para una aplicación de gestión empresarial.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis"],
    githubUrl: "https://github.com/usuario/proyecto",
  },
  {
    title: "App Móvil React Native",
    description: "Aplicación móvil multiplataforma para gestión de tareas con sincronización en tiempo real.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <H2>Proyectos Destacados</H2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Algunos de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
