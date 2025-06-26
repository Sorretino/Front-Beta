import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  Users,
  Shield,
  Zap,
  BarChart3,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Database,
  Smartphone,
  HeadphonesIcon,
  Play,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { type Language, useTranslation } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";
import { TourGuide } from "@/components/tour-guide";
import { ThemeToggle } from "@/components/theme-toggle";

const NavHeader: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
  const [isTourOpen, setIsTourOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const t = useTranslation(currentLanguage);

  // Dados de navegação
  const navigationItems = [
    {
      label: "Recurso",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Plano",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Depoimentos",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Canais",
      href: "#",
      hasDropdown: true,
      description: "Plataforma principal de mensagens",
      dropdownItems: [
        {
          label: "WhatsApp",
          href: "/details",
          description: "Plataforma principal de mensagens",
        },
        {
          label: "Instagram",
          href: "#",
          description: "Direct Messages do Instagram",
        },
        {
          label: "Facebook Messenger",
          href: "#",
          description: "Mensagens do Facebook",
        },
        {
          label: "Telegram",
          href: "#",
          description: "Bot e mensagens do Telegram",
        },
      ],
    },
    {
      label: "Plataforma",
      href: "#",
      hasDropdown: true,
      description: "Configurações",
      dropdownItems: [],
    },
  ];

  // Função para renderizar item de navegação
  const renderNavigationItem = (item, index) => {
    // Se tem dropdown e dropdownItems, renderiza dropdown
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div key={index} className="relative group">
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200">
            {item.label}
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Dropdown Content */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="py-2">
              {/* Renderizar dropdownItems */}
              {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                <Link
                  key={dropdownIndex}
                  href={dropdownItem.href}
                  className="flex flex-col items-start px-4 py-3 hover:bg-gray-50 transition-colors duration-200 rounded-md mx-2"
                >
                  <div className="font-medium text-foreground">
                    {dropdownItem.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {dropdownItem.description}
                  </div>
                </Link>
              ))}

              {/* Se for "Plataforma", adicionar os botões especiais */}
              {item.label === "Plataforma" && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-2 space-y-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Configurações
                    </div>

                    {/* Botão Start Tour */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsTourOpen(true)}
                      className="w-full justify-start gap-2 h-8"
                    >
                      <Play className="h-4 w-4" />
                      {t.startTour}
                    </Button>

                    {/* Language Selector */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Idioma:</span>
                      <LanguageSelector
                        currentLang={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                      />
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Tema:</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Se tem dropdown mas não tem dropdownItems, renderiza botão com âncora
    if (item.hasDropdown) {
      // Mapear os labels para as seções corretas
      const sectionMap = {
        Recurso: "features-section",
        Plano: "pricing-section",
        Depoimentos: "testimonials-section",
      };

      return (
        <button
          key={index}
          onClick={() =>
            scrollToSection(
              sectionMap[item.label] || `${item.label.toLowerCase()}-section`
            )
          }
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </button>
      );
    }

    // Se não tem dropdown, renderiza link simples
    return (
      <Link
        key={index}
        href={item.href}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <TourGuide
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        language={currentLanguage}
      />

      <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-gray-100 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-[80%] shadow-2xl"
            : "bg-[#ffffff] w-[95%] max-w-[70%] border border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center py-4 transition-all duration-300 ${
              isScrolled ? "justify-center gap-8" : "justify-between"
            }`}
          >
            {/* Logo - sempre visível mas com transição suave */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                ThunderWave
              </span>
            </div>

            {/* Navegação dinâmica */}
            <nav className="hidden md:flex items-center space-x-8 max-w-[80%]">
              {/* Renderizar todos os itens de navegação dinamicamente */}
              {navigationItems.map((item, index) =>
                renderNavigationItem(item, index)
              )}

              {/* Botão CTA sempre visível */}
              <Button
                className={`bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 ${
                  isScrolled ? "px-4 py-2 text-sm" : "px-6 py-2"
                }`}
              >
                {t.startFree}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"> */}
      {/* <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
          isScrolled
            ? " bg-gray-100 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-[80%]"
            : " bg-[#ffffff] w-[95%] max-w-[70%]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                ThunderWave
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features-section")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.features}
              </button>
              <button
                onClick={() => scrollToSection("pricing-section")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.pricing}
              </button>
              <button
                onClick={() => scrollToSection("testimonials-section")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.testimonials}
              </button>
              <Link
                href="/details"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.details}
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsTourOpen(true)}
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                {t.startTour}
              </Button>
              <LanguageSelector
                currentLang={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
              <ThemeToggle />
              <Button
                variant="outline"
                className="bg-background text-foreground border-border"
              >
                {t.login}
              </Button>
              <Button className="bg-CustomGreen hover:bg-CustomGreen/90 text-primary-foreground">
                {t.startFree}
              </Button>
            </nav>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default NavHeader;
