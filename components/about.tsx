import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image src="https://media.licdn.com/dms/image/v2/D4D03AQHycw85DovXwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702813426979?e=1751500800&v=beta&t=cstcJjuoGWcWgmN0xuNMDgNvja-nCU5kNaqkiR0810I" alt="Foto de perfil" fill className="object-cover" />
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                Olá! Sou um desenvolvedor apaixonado por criar soluções digitais que combinam design atraente com
                funcionalidade robusta. Com experiência em desenvolvimento web full stack, tenho trabalhado em diversos
                projetos que vão desde aplicações web até sistemas complexos.
              </p>
              <p className="mb-4">
                Iniciei minha trajetória em programação em 2020 através de projetos pessoais, e, em 2021, comecei a
                graduação em Análise e Desenvolvimento de Sistemas. Desde então, venho aprimorando minhas habilidades
                práticas e teóricas em tecnologias como React.js, Next.js, Node.js, JavaScript, TypeScript, SQL Server,
                PostgreSQL e MongoDB.
              </p>
              <p className="mb-4">
                Tenho experiência em desenvolvimento de aplicações web, APIs RESTful, integrações de sistemas, e
                implementação de práticas de boas arquiteturas, como MVC, Clean Code e SOLID Principles.
                Trabalho com metodologias ágeis, especialmente Scrum e Kanban.
              </p>
              <p>
                Quando não estou codificando, gosto de tocar instrumentos musicais, já que sei tocar vários deles.
                Estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
