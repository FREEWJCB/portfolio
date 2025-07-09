import { Hero } from "@/components/organisms/hero"
import { Skills } from "@/components/organisms/skills"
import { Projects } from "@/components/organisms/projects"
import { Contact } from "@/components/organisms/contact"
import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
