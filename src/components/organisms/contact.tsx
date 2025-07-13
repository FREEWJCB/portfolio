"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { H2 } from "@/components/atoms/typography"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react"
import { useActionState } from "react"
import { sendEmail } from "@/app/actions"

// Definir el tipo para el estado de la acción de forma explícita
type ContactFormState = {
  success: boolean
  message: string
} | null

export function Contact(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Tipado explícito para useActionState
  const [state, formAction] = useActionState<ContactFormState, FormData>(sendEmail, null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Usar useEffect para resetear el formulario después de un envío exitoso
  useEffect(() => {
    if (state?.success) {
      setFormData({ name: "", email: "", message: "" })
    }
  }, [state]) // Dependencia en 'state' para que se ejecute cuando cambie

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <H2 className="mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Contacto</H2>
          <p className="text-xl text-gray-300">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-cyan-400" />
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <span className="text-gray-200 font-medium">freelance.wjcb@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <span className="text-gray-200 font-medium">+57 3026739959</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <span className="text-gray-200 font-medium">Bogotá D.C, Colombia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-indigo-400" />
                ¿En qué puedo ayudarte?
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  Desarrollo de aplicaciones web full stack
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  APIs REST, GRPC y GraphQL
                </li>
                {/* <li className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  Aplicaciones móviles
                </li> */}
                <li className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  Consultoría técnica
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                  Arquitectura de software
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="animate-fadeInRight">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50 hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Envíame un mensaje</h3>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/80 border-gray-600/50 focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 font-medium">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/80 border-gray-600/50 focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-700/80 border-gray-600/50 focus:border-cyan-400 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
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
                {state && (
                  <p className={`mt-4 text-center ${state.success ? "text-green-500" : "text-red-500"}`}>
                    {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
