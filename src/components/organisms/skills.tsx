import { H2 } from "@/components/atoms/typography"
import { SkillCard } from "@/components/atoms/skill-card"

const frontendSkills = [
  { title: "React", experience: "3 años de experiencia" },
  { title: "Next.js", experience: "3 años de experiencia" },
  { title: "Vue.js", experience: "3 años de experiencia" },
  { title: "Nuxt.js", experience: "3 años de experiencia" },
  { title: "Angular.js", experience: "3 años de experiencia" },
  { title: "TypeScript", experience: "5 años de experiencia" },
  { title: "Tailwind CSS", experience: "2 años de experiencia" },
]

const backendSkills = [
  { title: "Javascript", experience: "9 años de experiencia" },
  { title: "Node.js", experience: "4 años de experiencia" },
  { title: "PHP", experience: "5 años de experiencia" },
  { title: "Laravel", experience: "5 años de experiencia" },
  { title: "TypeScript", experience: "5 años de experiencia" },
  { title: "PostgreSQL", experience: "3 años de experiencia" },
  { title: "MongoDB", experience: "3 años de experiencia" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <H2>Habilidades Técnicas</H2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Tecnologías que domino tanto en frontend como backend
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frontend</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  experience={skill.experience}
                  className={index === frontendSkills.length - 1 ? "border-b-0" : ""}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Backend</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  experience={skill.experience}
                  className={index === backendSkills.length - 1 ? "border-b-0" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
