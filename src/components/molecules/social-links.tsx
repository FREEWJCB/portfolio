import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/FREEWJCB", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/walter-caro/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:freelance.wjcb@gmail.com", label: "Email" },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 p-0 hover:bg-gray-800 rounded-md flex items-center justify-center transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
        </a>
      ))}
    </div>
  )
}
