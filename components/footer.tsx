import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Felipe Barroso</h3>
            <p className="text-muted-foreground m-12">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais.
            </p>
            <div className="flex space-x-2 items-center justify-center m-12">
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
              {/* <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button> */}
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:felipebarroso299@email.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold mb-4">Inscreva-se</h3>
            <p className="text-muted-foreground mb-4">Receba atualizações sobre novos projetos e artigos.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="seu@email.com" className="max-w-[220px]" />
              <Button>Inscrever</Button>
            </div>
          </div> */}
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Felipe Barroso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
