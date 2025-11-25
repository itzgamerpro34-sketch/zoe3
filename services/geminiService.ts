import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
// Using a safe fallback if key is missing to prevent crash on init, 
// though functionality will fail gracefully during call.
const ai = new GoogleGenAI({ apiKey });

export const generateSupportResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key no configurada. Por favor verifica tu configuración.";
  }

  try {
    const systemInstruction = `Eres 'HidenBot', el asistente virtual de soporte técnico para 'HidenHost', una empresa de hosting de Minecraft de alto rendimiento.
    
    Tus objetivos son:
    1. Ayudar a los usuarios a elegir un plan (Gratis vs Ilimitado).
    2. Explicar las especificaciones: Usamos procesadores Ryzen 9, NVMe SSDs, y tenemos protección DDoS.
    3. Asegurar al usuario que el plan "Ilimitado" realmente tiene RAM y Almacenamiento ilimitados.
    4. Ser amable, usar emojis estilo gamer/minecraft, y hablar en Español.
    5. Si te preguntan cómo crear un server, diles que hagan click en el botón "Crear Servidor Ahora" en la página principal.
    
    Información Clave:
    - Plan Gratis: 4GB RAM, 2 vCores, Gratis para siempre.
    - Plan Ilimitado: RAM Ilimitada, NVMe Ilimitado, GPU Activada, Soporte Prioritario.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "Lo siento, tuve un problema procesando tu respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, ha ocurrido un error de conexión con el asistente.";
  }
};