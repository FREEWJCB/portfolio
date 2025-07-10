"use client"

import type React from "react"

import { useState } from "react"
import { H2 } from "@/components/atoms/typography"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react"

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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <H2 className="mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Contacto</H2>
          <p className="text-xl text-gray-600 dark:text-gray-300">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-cyan-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">freelance.wjcb@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">+57 3026739959</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ubicación</p>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Bogotá D.C, Colombia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-indigo-200/50 dark:border-gray-700/50">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ¿En qué puedo ayudarte?
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3 p-2 hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  Desarrollo de aplicaciones web full stack
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  APIs REST y GraphQL
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  Aplicaciones móviles
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  Consultoría técnica
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                  Arquitectura de software
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="animate-fadeInRight">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-gray-700/80 border-gray-300/50 dark:border-gray-600/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-gray-700/80 border-gray-300/50 dark:border-gray-600/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/80 dark:bg-gray-700/80 border-gray-300/50 dark:border-gray-600/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
