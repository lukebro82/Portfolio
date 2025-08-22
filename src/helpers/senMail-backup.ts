// Versión de respaldo usando proxy público para CORS
export const sendMailWithProxy = async (
  petid: any,
  message: string,
  from: any,
  tel: any
) => {
  // Usar un proxy público para evitar CORS
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://pet-finder-osj6.onrender.com/mail";

  const response = await fetch(proxyUrl + targetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: window.location.origin,
    },
    body: JSON.stringify({
      petid,
      message,
      from,
      tel,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  console.log("mail enviado");
  return result;
};
