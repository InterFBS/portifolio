import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Skill = {
  name: string
  level: number
  category: "frontend" | "backend" | "other"
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Git", level: 70, category: "other" },
  { name: "GitHub", level: 85, category: "other" },
  { name: "UI/UX Design", level: 65, category: "other" },
  { name: "Docker", level: 40, category: "other" },
]

export function Skills() {
  const frontendSkills = skills.filter((skill) => skill.category === "frontend")
  const backendSkills = skills.filter((skill) => skill.category === "backend")
  const otherSkills = skills.filter((skill) => skill.category === "other")

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Minhas Habilidades</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Outras Habilidades</h3>
              <div className="space-y-4">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
