import { ChatOpenAI, } from "@langchain/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
// const chatModel = new ChatOpenAI({
//     openAIApiKey:process.env.OPENAI_API_KEY,
//     modelName:"gpt-3.5-turbo-1106"
// })

const genAI = new GoogleGenerativeAI("AIzaSyAlZ6kH-OKlgp0f6Yi-dNldLtXQ_VkDwsU")

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: "Hello, I have 2 dogs in my house.",
        },
        {
          role: "model",
          parts: "Great to meet you. What would you like to know?",
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
    const msg = "How many paws are in my house?";
    console.log(msg);
    const result = chat.sendMessage(msg);
    const response = (await result).response;
    const text= response.text();
    console.log(text);
}
run();
//await chatModel.invoke("what is langsmith?");