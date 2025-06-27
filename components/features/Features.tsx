import React from "react";

const Features: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Chat Feature Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="max-w-3xl max-h-3x1    flex items-center justify-center ">
                <img
                  src="https://www.callbell.eu/assets/uploads/2023/10/Group-4-4.png"
                  alt="Interface de chat"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className=" space-y-6">
              <div className=" w-full space-y-6 ">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-right">
                  Converse com seus clientes{" "}
                  <span className="text-CustonCabe"> pelo WhatsApp</span>{" "}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-right">
                  Centralize todas as conversas de WhatsApp Business em um só
                  lugar. Sua equipe pode responder clientes de forma organizada
                  e eficiente, com histórico completo de conversas e informações
                  do cliente sempre à mão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:order-2">
              <div className="max-w-3xl max-h-3x1   flex items-center justify-center ">
                <img
                  src="https://www.callbell.eu/assets/uploads/2023/10/Group-1000010623-4.svg"
                  alt="Dashboard de análise"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 lg:order-1">
              <div className=" w-full space-y-6 ">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-left">
                  <span className="text-CustonCabe">Analise estatísticas</span>{" "}
                  e métricas no WhatsApp
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                  Visualize e monitore as estatísticas do WhatsApp em tempo real
                  através dos nossos dashboards. Acompanhe métricas importantes
                  como tempo de resposta, satisfação do cliente e performance da
                  equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Automatize o WhatsApp com Chatbots e APIs
                </h2>
                <p className="text-lg text-teal-100 leading-relaxed">
                  Configure chatbots inteligentes para responder automaticamente
                  perguntas frequentes, qualificar leads e transferir conversas
                  para agentes humanos quando necessário.
                </p>
                <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                  Criar uma conta gratuita
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="max-w-3xl max-h-3x1   flex items-center justify-center ">
                    {/* <MessageCircle className="w-16 h-16 text-green-500" /> */}
                    <img
                      src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-6.svg"
                      alt="Dashboard de análise"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {/* Floating dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Envie{" "}
                  <span className="text-CustonCabe dark:text-CustonCabe">
                    campanhas de marketing
                  </span>{" "}
                  com o módulo de broadcast
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Crie e envie campanhas personalizadas para milhares de
                  contatos simultaneamente. Acompanhe resultados em tempo real e
                  otimize suas estratégias de marketing.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-CustonCabe text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Importar contatos
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Importe sua base de contatos de forma simples e segura
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-CustonCabe text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Prepare seu texto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Crie mensagens personalizadas com templates aprovados
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-CustonCabe text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Analise os principais indicadores
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Acompanhe entrega, leitura e taxa de resposta em tempo
                      real
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="max-w-3xl max-h-3x1   flex items-center justify-center ">
                <img
                  src="https://www.callbell.eu/assets/uploads/2023/04/WhatsAppConvoPerspective-min.png"
                  alt="Campanha no celular"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
