import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  position: "left" | "right";
}

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    year: "2018",
    date: "Jan 2018",
    title: "Threshold Approval",
    subtitle: "Company Established",
    description:
      "Define policies and multi-level, multi-party m-of-n approval chains configurable to fit your corporate approval process. You configure it, our Transaction Guard will enforce it.",
    position: "left",
  },
  {
    id: "2",
    year: "",
    date: "March 2020",
    title: "Certified & Insured",
    subtitle: "New office in California",
    description:
      "ISO 27001 certified, NIST certified, and insured by top-tier S&P AA-Rated global reinsurance company.",
    position: "right",
  },
  {
    id: "3",
    year: "2022",
    date: "April 2021",
    title: "Agile & Future-proof",
    subtitle: "First Product Launch",
    description:
      "Designed for rapid support of new tokens and chains. Easily deploy or update new wallets, policies, or users.",
    position: "left",
  },
  {
    id: "4",
    year: "",
    date: "September 2022",
    title: "Turnkey Simplicity",
    subtitle: "Entering Stock Market",
    description:
      "Support for private chains and Wallet SDK enables a customized experience for users, all backed by our robust private key storage system.",
    position: "right",
  },
];

function App() {
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineHeight = timelineRef.current.offsetHeight;

        // Calcular o progresso do scroll baseado na posição da timeline
        const scrollTop = Math.max(0, windowHeight - rect.top);
        const maxScroll = timelineHeight + windowHeight;
        const progress = Math.min(
          100,
          Math.max(0, (scrollTop / maxScroll) * 100)
        );

        setScrollProgress(progress);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const eventId = entry.target.getAttribute("data-event-id");
          if (eventId) {
            setVisibleEvents((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(eventId);
              } else {
                newSet.delete(eventId);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Observar todos os elementos
    const currentRefs = eventRefs.current;
    Object.values(currentRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Adicionar listener de scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executar uma vez no início

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen dark:bg-black bg-white text-white overflow-x-hidden
    
    "
      style={{
        backgroundImage:
          "url('https://demosites.royal-elementor-addons.com/cybersecurity-v1/wp-content/uploads/sites/6/2021/10/background-13.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <div className="text-center pt-16 pb-12">
        <div className="dark:text-CustomBtnDev text-CustonCabe text-sm font-medium mb-2 tracking-wider">
          Timeline
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Company Timeline
        </h1>
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 pb-20">
        {/* Central Line - Base (cinza) */}
        <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 dark:bg-gray-700 bg-gray-300"></div>

        {/* Central Line - Progress (verde) */}
        <div
          className="absolute left-1/2 transform -translate-x-0.5 top-0 w-1  dark:bg-CustomBtnDev bg-CustonCabe transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>

        {/* Timeline Events */}
        <div className="space-y-24">
          {timelineData.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Year Label */}
              {event.year && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded text-sm font-medium text-gray-300 border border-gray-700 z-10">
                  {event.year}
                </div>
              )}
              {/* Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                    visibleEvents.has(event.id)
                      ? // -CustomBtnDev
                        "dark:bg-CustomBtnDev bg-CustonCabe border-CustomBtnDev/20 scale-110 shadow-lg shadow-CustomBtnDev/50"
                      : "bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600"
                  }`}
                >
                  <div
                    className={`transition-all duration-300 ${
                      visibleEvents.has(event.id)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Event Container */}
              <div
                ref={(el) => {
                  eventRefs.current[event.id] = el;
                }}
                data-event-id={event.id}
                className={`flex items-center ${
                  event.position === "left" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    event.position === "left" ? "pr-8" : "pl-8"
                  }`}
                >
                  <div
                    className={`dark:bg-card bg-card rounded-lg p-6 shadow-xl transition-all duration-500 ${
                      event.position === "left" ? "text-right" : "text-left"
                    } ${
                      visibleEvents.has(event.id)
                        ? "border dark:border-CustomBtnDev border-gray-300 shadow-sm dark:shadow-CustomBtnDev/20"
                        : "border dark:border-gray-700 border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 dark:text-white text-neutral-600">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Circle */}
                {/* <div className="relative z-20 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      visibleEvents.has(event.id)
                        ? "bg-CustomBtnDev border-CustomBtnDev scale-110 shadow-lg shadow-CustomBtnDev/50"
                        : "bg-gray-700 border-gray-600"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        visibleEvents.has(event.id)
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-50"
                      }`}
                    >
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div> */}

                {/* Date and Subtitle */}
                <div
                  className={`w-5/12 ${
                    event.position === "left" ? "pl-8" : "pr-8"
                  }`}
                >
                  <div
                    className={`${
                      event.position === "left" ? "text-left" : "text-right"
                    }`}
                  >
                    <div
                      className={`text-sm font-medium mb-1 transition-colors duration-500 ${
                        visibleEvents.has(event.id)
                          ? "dark:text-CustomBtnDev text-CustonCabe"
                          : "text-gray-500"
                      }`}
                    >
                      {event.date}
                    </div>
                    <div
                      className={`font-medium transition-colors duration-500 ${
                        visibleEvents.has(event.id)
                          ? "dark:text-emerald-300 text-neutral-700"
                          : "text-neutral-700 dark:text-white"
                      }`}
                    >
                      {event.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
