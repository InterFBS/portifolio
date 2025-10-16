import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Jogo de Interatividade Educacional",
    description: "Jogo interativo para aprendizado de conscientização ao desgaste de agua para crianças de 6 a 12 anos.",
    image: "https://agua-eight.vercel.app/assets/IntroAgua-C-rbznzd.png",
    tags: ["React", "Tailwind", "TypeSript"],
    githubUrl: "https://github.com/InterFBS/Repositorio-Privado",
    liveUrl: "https://agua-eight.vercel.app",
  },
  {
    id: 2,
    title: "Jogo de Interatividade Educacional",
    description: "Jogo interativo para aprendizado de reciclagem dos bioresíduos para crianças de 6 a 12 anos.",
    image: "https://reciclagem-ten.vercel.app/assets/IntroResiduos-V1obG95g.png",
    tags: ["React", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/InterFBS/Repositorio-Privado",
    liveUrl: "https://reciclagem-ten.vercel.app",
  },
  {
    id: 3,
    title: "API de Usuários",
    description: "Projeto que segue boas práticas de arquitetura e organização de código para facilitar manutenção e escalabilidade.",
    image: "https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB"],
    githubUrl: "https://github.com/InterFBS/backend-users",
    liveUrl: "https://github.com/InterFBS/backend-users",
  },
  {
    id: 4,
    title: "API de Produtos",
    description: "Dashboard interativo para visualização de dados com gráficos e relatórios personalizáveis.",
    image: "https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download",
    tags: ["Java", "Docker", "Spring Boot", "PostgresSQL", "AWS", "Hibernate"],
    githubUrl: "https://github.com/InterFBS/product_api",
    liveUrl: "http://13.60.241.14:8080/api/products",
  },
  // {
  //   id: 5,
  //   title: "Aplicativo de Gestão de Tarefas",
  //   description: "Aplicativo para gerenciamento de tarefas com recursos de colaboração em equipe.",
  //   image: "/placeholder.svg?height=300&width=600",
  //   tags: ["React Native", "Firebase", "Redux", "Expo"],
  //   githubUrl: "https://github.com/username/project3",
  //   liveUrl: "https://project3.com",
  // },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
