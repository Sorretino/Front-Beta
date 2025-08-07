"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Calendar, Clock, Sparkles } from "lucide-react";

interface TimelineItem {
  date: string;
  time: string;
  title: string;
  subtitle: string;
  status: "live" | "recorded" | "upcoming";
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    date: "03/08",
    time: "9H",
    title: "Esquenta Bootcamp",
    subtitle: "NÃO PERCA",
    status: "live",
    side: "left",
  },
  {
    date: "04/08",
    time: "9H",
    title: "Setup do Projeto",
    subtitle: "TUTORIA NA COMUNIDADE 19H",
    status: "recorded",
    side: "right",
  },
  {
    date: "05/08",
    time: "9H",
    title: "Autenticação & Tela Inicial",
    subtitle: "TUTORIA NA COMUNIDADE 19H",
    status: "recorded",
    side: "left",
  },
  {
    date: "06/08",
    time: "9H",
    title: "Dashboard & Componentes",
    subtitle: "TUTORIA NA COMUNIDADE 19H",
    status: "upcoming",
    side: "right",
  },
  {
    date: "07/08",
    time: "9H",
    title: "Deploy & Otimização",
    subtitle: "TUTORIA NA COMUNIDADE 19H",
    status: "upcoming",
    side: "left",
  },
];

// Componente de Partículas
function Particles({ isActive }: { isActive: boolean }) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "2s",
          }}
        />
      ))}
    </div>
  );
}

// Componente de Progresso
function ProgressIndicator({
  activeCount,
  total,
}: {
  activeCount: number;
  total: number;
}) {
  const progress = (activeCount / total) * 100;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-700">
      <div className="flex items-center gap-4">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <div className="flex items-center gap-2">
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white text-sm font-medium min-w-[3rem]">
            {activeCount}/{total}
          </span>
        </div>
      </div>
    </div>
  );
}

function TimelineItemComponent({
  item,
  index,
  onActiveChange,
}: {
  item: TimelineItem;
  index: number;
  onActiveChange: (index: number, isActive: boolean) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [isNearby, setIsNearby] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Feedback tátil/sonoro
  const playFeedback = useCallback(() => {
    // Vibração no mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    // Som sutil (simulado com console para demonstração)
    console.log(`🎵 Card ${index + 1} ativado!`);
  }, [index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasActive = isActive;
        const nowActive = entry.isIntersecting;

        setIsActive(nowActive);
        onActiveChange(index, nowActive);

        // Feedback quando ativa pela primeira vez
        if (!wasActive && nowActive) {
          playFeedback();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    // Observer para estado "nearby" (preview)
    const nearbyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNearby(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
      nearbyObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
        nearbyObserver.unobserve(ref.current);
      }
    };
  }, [index, isActive, onActiveChange, playFeedback]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-600";
      case "recorded":
        return "bg-blue-600";
      case "upcoming":
        return "bg-gray-600";
      default:
        return "bg-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "AO VIVO";
      case "recorded":
        return "GRAVADO";
      case "upcoming":
        return "EM BREVE";
      default:
        return "EM BREVE";
    }
  };

  // Estados visuais combinados
  const isVisible = isActive || isNearby || isHovered;
  const opacity = isActive ? 100 : isNearby ? 60 : isHovered ? 80 : 20;
  const scale = isActive ? 100 : isNearby ? 98 : isHovered ? 99 : 95;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center mb-40 lg:mb-40 md:mb-32 sm:mb-24"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Line - Responsiva */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
        <div
          className={`w-full transition-all duration-1000 ease-out ${
            isActive
              ? "h-full bg-gradient-to-b from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30"
              : isNearby
              ? "h-1/2 bg-gradient-to-b from-blue-400/50 to-purple-500/50"
              : "h-0 bg-gray-700"
          }`}
        />
        <div className="absolute top-0 w-full h-full bg-gray-800/50 -z-10" />
      </div>

      {/* Timeline Marker - Responsivo */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 ${
          isActive
            ? "scale-100 opacity-100"
            : isNearby
            ? "scale-75 opacity-60"
            : "scale-50 opacity-20"
        }`}
      >
        <div
          className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border-4 border-gray-900 transition-all duration-500 ${
            isActive
              ? "bg-blue-500 shadow-xl shadow-blue-500/50 ring-4 ring-blue-500/20"
              : isNearby
              ? "bg-blue-400/70 shadow-lg shadow-blue-400/30 ring-2 ring-blue-400/10"
              : "bg-gray-600"
          }`}
        >
          {/* Número do card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-xs font-bold ${
                isActive ? "text-white" : "text-gray-400"
              }`}
            >
              {index + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Content Card - Responsivo */}
      <div
        className={`
          w-full max-w-sm lg:max-w-md xl:max-w-lg
          transition-all duration-700 
          ${
            item.side === "left" && window.innerWidth >= 1024
              ? "mr-auto pr-16"
              : ""
          }
          ${
            item.side === "right" && window.innerWidth >= 1024
              ? "ml-auto pl-16"
              : ""
          }
          ${window.innerWidth < 1024 ? "px-4" : ""}
        `}
        style={{
          opacity: opacity / 100,
          transform: `
            translateX(${
              isActive
                ? 0
                : item.side === "left" && window.innerWidth >= 1024
                ? -10
                : window.innerWidth >= 1024
                ? 10
                : 0
            }px) 
            translateY(${isActive ? 0 : 8}px) 
            scale(${scale / 100})
          `,
          transitionDelay: `${index * 100}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            relative p-6 lg:p-8 rounded-2xl transition-all duration-700 cursor-pointer 
            ${
              isActive
                ? "bg-[#060b2480] border-[#5131e840] shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20"
                : isNearby || isHovered
                ? "bg-[#060b2480] border-[#5131e840] shadow-xl shadow-blue-500/5"
                : "bg-rose-900/30 border border-rose-800/30"
            }
            ${isHovered ? "transform hover:scale-105" : ""}
          `}
          style={{
            backdropFilter: isActive ? "blur(12px)" : "blur(12px)",
          }}
        >
          {/* Partículas */}
          <Particles isActive={isActive} />

          {/* Status Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-bold text-white transition-all duration-500 w-fit ${
                isActive
                  ? getStatusColor(item.status)
                  : isNearby
                  ? "bg-gray-600"
                  : "bg-gray-700"
              }`}
            >
              {getStatusText(item.status)}
            </span>
            <div className="flex items-center gap-3">
              <Calendar
                className={`w-5 h-5 transition-colors duration-500 ${
                  isActive
                    ? "text-blue-400"
                    : isNearby
                    ? "text-blue-500/70"
                    : "text-gray-600"
                }`}
              />
              <span
                className={`text-base font-medium transition-colors duration-500 ${
                  isActive
                    ? "text-blue-400"
                    : isNearby
                    ? "text-blue-500/70"
                    : "text-gray-600"
                }`}
              >
                {item.date}
              </span>
              <Clock
                className={`w-5 h-5 ml-3 transition-colors duration-500 ${
                  isActive
                    ? "text-blue-400"
                    : isNearby
                    ? "text-blue-500/70"
                    : "text-gray-600"
                }`}
              />
              <span
                className={`text-base font-medium transition-colors duration-500 ${
                  isActive
                    ? "text-blue-400"
                    : isNearby
                    ? "text-blue-500/70"
                    : "text-gray-600"
                }`}
              >
                {item.time}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`text-xl lg:text-2xl font-bold mb-3 transition-colors duration-500 ${
              isActive
                ? "text-white"
                : isNearby
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            {item.title}
          </h3>

          {/* Subtitle */}
          <p
            className={`text-sm lg:text-base font-medium transition-colors duration-500 ${
              isActive
                ? "text-gray-300"
                : isNearby
                ? "text-gray-400"
                : "text-gray-700"
            }`}
          >
            {item.subtitle}
          </p>

          {/* Glow effect quando ativo */}
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl -z-10" />
          )}

          {/* Preview indicator */}
          {isNearby && !isActive && (
            <div className="absolute top-2 right-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ScrollTimeline() {
  const [activeCards, setActiveCards] = useState<boolean[]>(
    new Array(timelineData.length).fill(false)
  );

  const handleActiveChange = useCallback((index: number, isActive: boolean) => {
    setActiveCards((prev) => {
      const newState = [...prev];
      newState[index] = isActive;
      return newState;
    });
  }, []);

  const activeCount = activeCards.filter(Boolean).length;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="min-h-screen  bg-[#00020d] ">
        {/* bg-gradient-to-br */}
        {/* Indicador de Progresso */}
        {/* <ProgressIndicator
          activeCount={activeCount}
          total={timelineData.length}
        /> */}

        {/* Hero Section */}
        {/* <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Bootcamp de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Desenvolvimento
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Aprenda a criar aplicações modernas com as tecnologias mais
              utilizadas no mercado. Do zero ao deploy, com mentoria diária e
              projetos práticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 lg:p-6 rounded-xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  7 dias
                </div>
                <div className="text-blue-200 text-sm lg:text-base">
                  de conteúdo intensivo
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 lg:p-6 rounded-xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  100%
                </div>
                <div className="text-purple-200 text-sm lg:text-base">
                  prático e hands-on
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 lg:p-6 rounded-xl text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  24h
                </div>
                <div className="text-green-200 text-sm lg:text-base">
                  de suporte diário
                </div>
              </div>
            </div>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white/60 text-sm mt-2">Role para baixo</p>
            </div>
          </div>
        </section> */}
        <section className="relative py-0 overflow-hidden ">
          {/* Background rotacionado */}
          <div
            className="absolute inset-0 z-0 transform rotate-90 scale-x-[1.8] "
            style={{
              backgroundImage:
                "url('https://framerusercontent.com/images/OLp2rowY8CkVw1PnuKeydDAo.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
              width: "100%",
              height: "100%",
              aspectRatio: 1.7,
              transform: "translateY(-0%) rotate(-90deg)",
            }}
          />

          {/* Conteúdo principal acima do fundo */}
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="animate-bounce max-w-4xl mx-auto text-center mb-12">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white/60 text-sm mt-2">Role para baixo</p>
            </div>
            <div className="text-center mb-20">
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                Cronograma do evento
              </h2>
              <p className="text-gray-300 text-base lg:text-lg max-w-3xl mx-auto">
                Além das aulas para desenvolver o projeto, você terá tutorias ao
                vivo, diariamente comigo e minha equipe, para não ficar para
                trás no projeto. Nossa programação será:
              </p>
            </div>

            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItemComponent
                  key={index}
                  item={item}
                  index={index}
                  onActiveChange={handleActiveChange}
                />
              ))}
            </div>

            <div className="h-96"></div>
          </div>
        </section>

        {/* Cronograma Section */}
        {/* <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 ">
          
            <div className="text-center mb-20">
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                Cronograma do evento
              </h2>
              <p className="text-gray-300 text-base lg:text-lg max-w-3xl mx-auto">
                Além das aulas para desenvolver o projeto, você terá tutorias ao
                vivo, diariamente comigo e minha equipe, para não ficar para
                trás no projeto. Nossa programação será:
              </p>
            </div>

         
            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItemComponent
                  key={index}
                  item={item}
                  index={index}
                  onActiveChange={handleActiveChange}
                />
              ))}
            </div>

         
            <div className="h-96"></div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
