import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import ChatHistory from "../Componentes/ChatHistory";
import Loading from "../Componentes/Loading";

const ChatBox = () => {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // inicializar sua gemeni Api
    const genAI = new GoogleGenerativeAI("AIzaSyBJqTDT8ECh1x7vrRvtmVzQeQSYdQiwZnM");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleUSerInput = (e) => {
        setUserInput(e.target.value);
    };

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        setIsLoading(true);

        try {
            const result = await model.generateContent(userInput);
            const response = await result.response
            console.log(response);
            setChatHistory([
                ...chatHistory,
                { type: "user", message: userInput },
                { type: "bot", message: response.text() },
            ]);
        } catch (error) {
            console.error("Error sending message", error);
        } finally {
            setUserInput("");
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setChatHistory([]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
        {/* Contêiner principal centralizado */}
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">

            {/* Cabeçalho */}
            <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600">
              ChatBot Tupã's
            </h1>

            {/* Caixa de Chat com histórico */}
            <div className="chat-container bg-gray-100 p-4 rounded-lg shadow-inner overflow-y-auto h-96 mb-6">
                <ChatHistory chatHistory={chatHistory} />
                <Loading isLoading={isLoading} />
            </div>

            {/* Input de mensagem e botão "Enviar" */}
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Escreva sua mensagem..."
                    value={userInput}
                    onChange={handleUSerInput}
                />

                <button
                    className={`px-6 py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={sendMessage}
                    disabled={isLoading}
                >
                    Enviar
                </button>
            </div>

            {/* Botão de Limpar Chat */}
            <div className="mt-6 text-center">
                <button
                    className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                    onClick={clearChat}
                >
                    Limpar Chat
                </button>
            </div>
        </div>
    </div>
     
    );
};

export default ChatBox;