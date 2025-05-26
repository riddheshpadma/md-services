"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, 
        { text: "I'm processing your request. For immediate assistance, you can also email us at contact@mandaladevhub.com", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BsRobot className="text-xl" />
                <h3 className="font-semibold">AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <FiX className="text-lg" />
              </button>
            </div>
            
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-[#5C213C] text-white rounded-br-none"
                        : "bg-white border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C213C]"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#5C213C] text-white p-2 rounded-lg hover:bg-[#7a2b52] transition-colors"
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#5C213C] to-[#C5487E] shadow-lg flex items-center justify-center text-white"
          >
            <FiMessageSquare className="text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;