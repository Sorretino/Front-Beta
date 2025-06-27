import React from "react";
import { MessageCircle, Instagram, Facebook, Send } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(42deg, #075e54 40%, #25d366 100%)",
      }}
      // bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-emerald-600 dark:via-teal-700 dark:to-cyan-800
      className="h-screen pt-20 pb-0 
     
       text-white overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div
        // style={{
        //   backgroundImage:
        //     "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        //   opacity: 0.3,
        // }}
        className="absolute inset-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[770px]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4 mr-2" />
                Plataforma #1 para WhatsApp Business
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  CRM multi agente
                </span>
                <span className="block">para WhatsApp</span>
                <span className="block text-emerald-200">Business API</span>
              </h1>

              <p className="text-lg lg:text-xl text-emerald-50 leading-relaxed max-w-lg font-medium">
                Centralize conversas, automatize atendimento e
                <span className="text-white font-semibold"> venda mais </span>
                através do WhatsApp, Instagram, Facebook Messenger e Telegram em
                uma única plataforma.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-2 bg-white text-teal-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25">
                  Fale com nossa equipe
                </button>
                <button className="px-8   backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  <span>Agendar Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-3 text-emerald-100">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Ou{" "}
                  <a
                    href="#"
                    className="underline hover:no-underline font-semibold text-white hover:text-emerald-200 transition-colors"
                  >
                    fale com nossa equipe no WhatsApp
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-6 text-sm text-emerald-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  <span>7 dias por semana</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full h-full">
              {/* Central WhatsApp Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full  bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-4.svg"
                    alt="whatapp"
                    className="w-full h-auto scale-150"
                  />
                  {/* <MessageCircle className="w-24 h-24 text-green-500" /> */}
                </div>
              </div>

              {/* Floating Platform Icons */}
              <div className="absolute top-72 right-4 animate-float">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>

              <div
                className="absolute bottom-16 left-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-shadow">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
              </div>

              <div
                className="absolute top-16 left-8 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-400/25 transition-shadow">
                  <Send className="w-6 h-6 text-white" />
                </div>
              </div>

              <div
                className="absolute bottom-72 right-20 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-red-500/25 transition-shadow">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 right-8">
                <div className="w-4 h-4 bg-emerald-300 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/3 -left-4">
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
