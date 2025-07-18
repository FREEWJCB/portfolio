import { Hero } from "@/components/organisms/hero"
import { Skills } from "@/components/organisms/skills"
import { ProjectsSlider } from "@/components/organisms/projects-slider"
import { Contact } from "@/components/organisms/contact"
import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ProjectsSlider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
