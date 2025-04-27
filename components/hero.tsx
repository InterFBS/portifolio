import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Olá, sou <span className="text-primary">Felipe Barroso</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Entre em contato</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">Ver projetos</Link>
            </Button>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/InterFBS" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/felipe-barroso-b4052021b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:felipebarroso299@email.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent)]"></div>
    </section>
  )
}
