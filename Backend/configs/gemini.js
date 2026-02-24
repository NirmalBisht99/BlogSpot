import { GoogleGenAI } from "@google/genai";

// Use API key from environment
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview", // compatible with your API
    contents: prompt,
  });

  return response.text;
}

export default main;
