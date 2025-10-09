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
              <Image src="https://media.licdn.com/dms/image/v2/D4D03AQHycw85DovXwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702813426979?e=1762992000&v=beta&t=N1yeH-cUEs09KsJ_EhVvdWqwhtKHYmBeWWiq5Aj0V00" alt="Foto de perfil" fill className="object-cover" />
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                Sou formado em Análise e Desenvolvimento de Sistemas, com experiência prática em desenvolvimento web full stack, atuando com ReactJS, Java, SQL e integrações de sistemas.
              </p>
              <p className="mb-4">
                Possuo um perfil analítico, estável e colaborativo, orientado à qualidade e à confiabilidade do código. Minha trajetória combina suporte técnico, implantação e desenvolvimento, o que me permite compreender tanto a visão do usuário quanto as exigências técnicas de uma aplicação robusta.
              </p>
              <p className="mb-4">
                Trabalhei em projetos no Brasil e em Portugal, desenvolvendo soluções para sistemas de saúde e serviços municipais, sempre com foco em usabilidade, segurança e desempenho.
              </p>
              <p>

                Meu objetivo é continuar crescendo na área de desenvolvimento de software, contribuindo para equipes que valorizam planejamento, estrutura e excelência técnica.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
