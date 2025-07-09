import { cn } from "@/lib/utils"

interface SkillCardProps {
  title: string
  experience: string
  className?: string
}

export function SkillCard({ title, experience, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "p-6 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
        className,
      )}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{experience}</p>
    </div>
  )
}
