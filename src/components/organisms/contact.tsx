"use client"

import type React from "react"

import { useState } from "react"
import { H2 } from "@/components/atoms/typography"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías el envío del formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <H2>Contacto</H2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">tu@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">Tu Ciudad, País</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">¿En qué puedo ayudarte?</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Desarrollo de aplicaciones web full stack</li>
                <li>• APIs REST y GraphQL</li>
                <li>• Aplicaciones móviles</li>
                <li>• Consultoría técnica</li>
                <li>• Arquitectura de software</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
