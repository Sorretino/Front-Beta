import { useEffect, useState } from "react";
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
} from "lucide-react";
import { type Language, useTranslation } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";
import { TourGuide } from "@/components/tour-guide";
import { ThemeToggle } from "@/components/theme-toggle";

const NavHeader: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
  const [isTourOpen, setIsTourOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <>
      <TourGuide
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        language={currentLanguage}
      />

      {/* <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"> */}
      <header
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
              {/* <Button
                variant="outline"
                className="bg-background text-foreground border-border"
              >
                {t.login}
              </Button> */}
              <Button className="bg-CustomGreen hover:bg-CustomGreen/90 text-primary-foreground">
                {t.startFree}
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavHeader;
