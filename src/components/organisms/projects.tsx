import { H2 } from "@/components/atoms/typography"
import { ProjectCard } from "@/components/atoms/project-card"

const projects = [
  {
    title: "PokeApi App",
    description:
      "Plataforma de pokemon donde se muestra los datos de los pokemons con Node.js, Next.js, Tailwind CSS, TypeScript y vitest.",
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
    title: "User Challange",
    description: "Api rest de retos de usuarios con laravel.",
    image: "/laravel.png",
    technologies: ["Laravel", "Postgresql", "PHPUNIT"],
    githubUrl: "https://github.com/FREEWJCB/challange",
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
