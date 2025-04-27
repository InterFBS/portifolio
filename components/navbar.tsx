"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold">
          Felipe Barroso
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
            <a href="/curriculo.pdf" download className="inline-flex">
              <Button variant="default">
                Currículo
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
