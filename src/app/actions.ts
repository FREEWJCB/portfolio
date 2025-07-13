"use server"

import nodemailer from "nodemailer"

// Definir el tipo para el estado de la acción
type FormState = {
  success: boolean
  message: string
} | null

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, message: "Por favor, completa todos los campos." }
  }
  console.log(process.env.NEXT_PUBLIC_EMAIL_PASS);
  // Configuración del transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: Number.parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "587"),
    secure: process.env.NEXT_PUBLIC_EMAIL_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remitente (nombre del usuario y su email)
      to: process.env.NEXT_PUBLIC_TO_EMAIL, // Destinatario (tu email)
      subject: `Mensaje de Portafolio de ${name}`, // Asunto del correo
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`, // Contenido en texto plano
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `, // Contenido en HTML
    })

    return { success: true, message: "¡Mensaje enviado con éxito!" }
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return { success: false, message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde." }
  }
}
