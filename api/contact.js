export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { petid, message, from, tel } = req.body;

    if (!petid || !message || !from || !tel) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Hacer la petición a la API externa desde el servidor (sin CORS)
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
      return res.status(response.status).json({ 
        message: 'Error al enviar el email',
        details: errorText 
      });
    }

    const result = await response.json();
    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente',
      data: result 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
}
