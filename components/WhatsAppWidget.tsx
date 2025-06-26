import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn">
          <div className="bg-CustomGreen p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-CustomGreen" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Suporte Callbell</h3>
                <p className="text-green-100 text-sm">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Olá! 👋 Como podemos ajudar você hoje?
            </p>
            <button
              onClick={() =>
                window.open("https://wa.me/5511999999999", "_blank")
              }
              className="w-full px-4 py-2 bg-CustomGreen hover:bg-CustomGreen/90 text-white rounded-lg font-medium transition-colors"
            >
              Iniciar conversa
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-CustomGreen hover:bg-CustomGreen/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
        aria-label="Abrir chat do WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
