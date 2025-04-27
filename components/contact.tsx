"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    try {
      // Aqui você implementaria a lógica real de envio
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
      })

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Sua mensagem"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Você também pode entrar em contato através dos seguintes meios:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">felipebarroso299@email.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Telefones</h3>
                  <p className="text-muted-foreground">+55 85 98821-8728</p>
                  <p className="text-muted-foreground">+351 926 687 208</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Localizações</h3>
                  <p className="text-muted-foreground">Torres Novas, Santarém, Portugal</p>
                  <p className="text-muted-foreground">Fortaleza, Ceará, Brasil</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t">
                <h3 className="font-medium mb-4">Horário de Disponibilidade</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos e Feriados:</span>
                    <span>Parcialmente indisponível</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
