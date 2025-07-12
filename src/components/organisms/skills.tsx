import { H2 } from "@/components/atoms/typography"
import { SkillCard } from "@/components/atoms/skill-card"

const frontendSkills = [
  { title: "React", experience: "3 años de experiencia" },
  { title: "Next.js", experience: "3 años de experiencia" },
  { title: "Vue.js", experience: "3 años de experiencia" },
  { title: "Nuxt.js", experience: "3 años de experiencia" },
  { title: "Angular.js", experience: "3 años de experiencia" },
  { title: "TypeScript", experience: "5 años de experiencia" },
  { title: "Tailwind CSS", experience: "3 años de experiencia" },
  { title: "Bootstrap", experience: "5 años de experiencia" },
]

const backendSkills = [
  { title: "Javascript", experience: "9 años de experiencia" },
  { title: "Node.js", experience: "5 años de experiencia" },
  { title: "Nest.js", experience: "5 años de experiencia" },
  { title: "PHP", experience: "5 años de experiencia" },
  { title: "Laravel", experience: "5 años de experiencia" },
  { title: "Java", experience: "5 años de experiencia" },
  { title: "Spring Boot", experience: "3 años de experiencia" },
  { title: "PostgreSQL", experience: "9 años de experiencia" },
  { title: "Mysql", experience: "9 años de experiencia" },
  { title: "MongoDB", experience: "3 años de experiencia" },
  { title: "AWS", experience: "3 años de experiencia" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <H2 className="mb-4">Habilidades Técnicas</H2>
          <p className="text-xl text-gray-300">Tecnologías que domino tanto en frontend como backend</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Frontend</h3>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm border border-gray-700/50">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="transform hover:scale-[1.02] transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard
                    title={skill.title}
                    experience={skill.experience}
                    className={index === frontendSkills.length - 1 ? "border-b-0" : ""}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Backend</h3>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm border border-gray-700/50">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="transform hover:scale-[1.02] transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard
                    title={skill.title}
                    experience={skill.experience}
                    className={index === backendSkills.length - 1 ? "border-b-0" : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
