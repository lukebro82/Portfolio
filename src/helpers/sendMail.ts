import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";

export const sendMail = async (
  message: string,
  from: string,
  mail: string
): Promise<EmailJSResponseStatus> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Las credenciales de correo no están configuradas en el entorno."
    );
  }

  const templateParams = {
    from_name: from,
    from_email: mail,
    message,
    to_name: "Lucas Ricci",
    time: new Date().toLocaleString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return result;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw new Error(
      "No se pudo enviar el mensaje en este momento. Por favor, intentá nuevamente o contactame por LinkedIn."
    );
  }
};
