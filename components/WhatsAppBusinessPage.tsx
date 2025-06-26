import React from "react";
import {
  ArrowLeft,
  MessageCircle,
  Users,
  BarChart3,
  Bot,
  Zap,
  Shield,
  Globe,
  CheckCircle,
} from "lucide-react";

interface WhatsAppBusinessPageProps {
  onBack: () => void;
}

const WhatsAppBusinessPage: React.FC<WhatsAppBusinessPageProps> = ({
  onBack,
}) => {
  const features = [
    {
      icon: MessageCircle,
      title: "API Oficial do WhatsApp",
      description:
        "Conecte-se diretamente à API oficial do WhatsApp Business para máxima confiabilidade e recursos avançados.",
    },
    {
      icon: Users,
      title: "Múltiplos Agentes",
      description:
        "Permita que toda sua equipe atenda clientes simultaneamente com controle total de permissões.",
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description:
        "Automatize respostas frequentes e qualifique leads 24/7 com nossos chatbots avançados.",
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description:
        "Monitore métricas importantes como tempo de resposta, satisfação e performance da equipe.",
    },
    {
      icon: Zap,
      title: "Integrações Poderosas",
      description:
        "Conecte com CRM, e-commerce e outras ferramentas através de nossa API robusta.",
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description:
        "Criptografia end-to-end e conformidade com LGPD para máxima segurança dos dados.",
    },
  ];

  const benefits = [
    "Aumente as vendas em até 40% com atendimento personalizado",
    "Reduza o tempo de resposta em 60% com automação inteligente",
    "Centralize todos os canais em uma única plataforma",
    "Escale seu atendimento sem aumentar custos operacionais",
    "Obtenha insights valiosos sobre comportamento dos clientes",
    "Mantenha histórico completo de todas as conversas",
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 89",
      period: "/mês",
      description: "Ideal para pequenos negócios",
      features: [
        "1 número WhatsApp Business",
        "Até 3 agentes",
        "1.000 mensagens/mês",
        "Chatbot básico",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "R$ 189",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "3 números WhatsApp Business",
        "Até 10 agentes",
        "5.000 mensagens/mês",
        "Chatbot avançado",
        "Analytics completo",
        "Integrações API",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para grandes empresas",
      features: [
        "Números ilimitados",
        "Agentes ilimitados",
        "Mensagens ilimitadas",
        "Chatbot personalizado",
        "Analytics avançado",
        "Integrações customizadas",
        "Suporte dedicado",
        "SLA garantido",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para página inicial</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Business API
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforme seu WhatsApp em uma
                <span className="block text-emerald-200">
                  máquina de vendas
                </span>
              </h1>

              <p className="text-xl text-emerald-50 leading-relaxed">
                Conecte-se à API oficial do WhatsApp Business e ofereça
                atendimento profissional com múltiplos agentes, automação
                inteligente e analytics avançado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-teal-600 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Começar teste grátis
                </button>
                <button className="px-8 py-4 bg-emerald-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Agendar demonstração
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <MessageCircle className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubra como nossa plataforma pode revolucionar a comunicação da
              sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Por que escolher nossa plataforma?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Resultados comprovados que transformam negócios
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Comece hoje mesmo
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Teste grátis por 7 dias, sem compromisso
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Iniciar teste gratuito
                </button>
                <button className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Falar com especialista
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                ✓ Sem cartão de crédito ✓ Configuração em 5 minutos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planos que se adaptam ao seu negócio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Escolha o plano ideal para o tamanho da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-teal-500 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-900"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-teal-500 text-white text-sm font-bold rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Falar com vendas"
                    : "Começar agora"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-600 dark:to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Junte-se a mais de 5.000 empresas que já usam nossa plataforma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-teal-600 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Começar teste grátis
            </button>
            <button className="px-8 py-4 bg-emerald-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Falar com especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppBusinessPage;
