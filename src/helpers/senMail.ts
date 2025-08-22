import emailjs from "@emailjs/browser";

export const sendMail = async (message: string, from: any, mail: any) => {
  try {
    // Obtener credenciales desde variables de entorno
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Verificar que las credenciales estén configuradas
    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "Credenciales de EmailJS no configuradas. Verifica tu archivo .env"
      );
    }

    const templateParams = {
      from_name: from,
      from_email: mail,
      message: message,
      to_name: "Lucas Ricci",
      time: new Date().toLocaleString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log("Email enviado exitosamente:", result);
    return result;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw new Error(
      "No se pudo enviar el email. Por favor, intenta nuevamente."
    );
  }
};
