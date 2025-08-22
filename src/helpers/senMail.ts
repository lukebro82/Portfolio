export const sendMail = async (
  petid: any,
  message: string,
  from: any,
  tel: any
) => {
  const response = await fetch("https://pet-finder-osj6.onrender.com/mail", {
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
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  console.log("mail enviado");
  return result;
};
