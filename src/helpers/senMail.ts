export const sendMail = async (
  petid: any,
  message: string,
  from: any,
  tel: any
) => {
  // Usar nuestra API route local para evitar CORS
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      petid,
      message,
      from,
      tel,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  const result = await response.json();
  console.log("mail enviado");
  return result;
};
