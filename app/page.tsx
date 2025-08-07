"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Check,
} from "lucide-react";
import Link from "next/link";
import { type Language, useTranslation } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";
import { TourGuide } from "@/components/tour-guide";
import { PlanComparator } from "@/components/plan-comparator";
import { TicketSystem } from "@/components/ticket-system";
import { ThemeToggle } from "@/components/theme-toggle";
import Features from "@/components/features/Features";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import WhatsAppBusinessPage from "@/components/WhatsAppBusinessPage";
import NavHeader from "@/components/Heade";
import Hero from "@/components/hero/Hero";
import Recurse from "@/components/recurse/Recurses";
import NavFooter from "@/components/footer/Footer";
import ScrollTimeline from "@/components/scrollTime/timeScroll";
import Timeline from "@/components/scrollTime/timevone";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<"home" | "whatsapp-business">(
    "home"
  );
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handlePageChange = (page: "home" | "whatsapp-business") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "whatsapp-business") {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <WhatsAppBusinessPage onBack={() => handlePageChange("home")} />
        <WhatsAppWidget />
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const t = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-background">
      {/* Tour Guide */}
      <TourGuide
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        language={currentLanguage}
      />
      {/* Header */}
      {/* <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
          isScrolled
            ? " bg-gray-100 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-[80%] shadow-2xl"
            : " bg-[#ffffff] w-[95%] max-w-[70%] border border-white/10 "
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex  items-center py-4    transition-all duration-300 ${
              isScrolled ? " justify-center gap-8" : " justify-between "
            }`}
            //className="flex justify-between items-center py-4 gap-5"
          >
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                ThunderWave
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 max-w-[80%] ">
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

      <NavHeader />
      {/* Hero Section1 */}
      <Hero />

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                  🚀 Nova Era do Multiatendimento
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t.heroTitle}
                  <span className="text-CustonCabe dark:text-CustomBtnDev">
                    {" "}
                    {t.heroTitleHighlight}
                  </span>{" "}
                  {t.heroTitleEnd}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.heroDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder={t.emailPlaceholder}
                    className="h-12 text-lg"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-CustonCabe dark:bg-CustomBtnDev dark:text-white hover:bg-CustonCabe/90 text-primary-foreground h-12 px-8"
                >
                  {t.startFreeTrial}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary dark:text-CustomBtnDev" />
                  <span>{t.freeDays}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary dark:text-CustomBtnDev" />
                  <span>{t.noCard}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary dark:text-CustomBtnDev" />
                  <span>{t.support247}</span>
                </div>
              </div>

              {/* Support Actions */}
              <div className="flex items-center gap-4 pt-4">
                <div className="text-sm text-muted-foreground">
                  {t.needHelp}
                </div>
                <TicketSystem language={currentLanguage} />
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Dashboard Principal
                    </h3>
                    <Badge variant="secondary">Live</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-2xl font-bold">1,247</p>
                            <p className="text-sm text-muted-foreground">
                              Tenants Ativos
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-2xl font-bold">98.9%</p>
                            <p className="text-sm text-muted-foreground">
                              Uptime
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Cliente A - E-commerce</span>
                      <Badge className="bg-primary/10 text-primary">
                        Ativo
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Cliente B - SaaS</span>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Ativo
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Cliente C - Marketplace</span>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        Ativo
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Features Section
       */}
      <Features />
      {/* Features Section */}
      {/* ScrollTime Section */}
      <ScrollTimeline />
      <Timeline />
      {/* ScrollTime Section */}
      {/* Recusos Section */}
      <Recurse currentLanguage={currentLanguage} />
      {/* Recusos Section */}
      {/* How it Works */}
      <section className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">Como Funciona</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-CustonCabe dark:text-CustomBtnDev">
                Simples de configurar,
              </span>{" "}
              poderoso de usar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Em apenas alguns passos você terá sua plataforma multitenant
              funcionando perfeitamente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie sua conta em menos de 2 minutos. Sem complicações, sem
                burocracia.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Configure seus Tenants</h3>
              <p className="text-muted-foreground">
                Adicione seus clientes e configure as permissões e
                personalizações para cada um.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Comece a Gerenciar</h3>
              <p className="text-muted-foreground">
                Acesse o dashboard e comece a gerenciar todos os seus negócios
                em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">
              Planos e Preços
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-CustonCabe dark:text-CustomBtnDev">
              {t.pricingTitle}{" "}
              <span className="text-foreground">{t.pricingTitleSub}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pricingDescription}
            </p>
            <div className="pt-4">
              <PlanComparator language={currentLanguage} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan border-border*/}
            <Card className="border-2  border-border dark:border-white/10 hover:border-rose-500/50 transition-colors dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Essencial</CardTitle>
                <CardDescription>Perfeito para começar</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 99</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Check className="w-5 h-5 text-primary" />
                    <span>Até 5 tenants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>10GB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Suporte por email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>SSL gratuito</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Backup diário</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-rose-500 hover:bg-rose-500/90 text-primary-foreground">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card
              className="relative rounded-xl dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full dark:hover:border-CustomBtnDev/80 transition-colors border-CustonCabe dark:border-CustomBtnDev  border-2"
              // className="border-2 border-CustomBtnGreen relative hover:border-primary/80 transition-colors "
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-CustonCabe dark:bg-CustomBtnDev text-primary-foreground px-4 py-1">
                  {t.popular}
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 299</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Até 25 tenants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>100GB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Suporte prioritário</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>API avançada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Relatórios detalhados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Integrações ilimitadas</span>
                  </div>
                </div>
                <Button
                  // style={{
                  //   background:
                  //     "linear-gradient(42deg, #075e54 40%, #25d366 100%)",
                  // }}
                  className="w-full mt-8 bg-CustonCabe dark:bg-CustomBtnDev dark:hover:bg-CustomBtnDev/90 text-primary-foreground"
                >
                  Começar Teste
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-border dark:border-white/10 hover:border-indigo-600/50 transition-colors dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Para grandes organizações</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 899</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Tenants ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1TB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Suporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>SLA 99.9%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Gerente dedicado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Customizações</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-600/90 text-primary-foreground">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">Depoimentos</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 1.000 empresas confiam em nossa plataforma para gerenciar
              seus negócios.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "A MultiTenant Pro revolucionou nossa forma de gerenciar
                  múltiplos clientes. A segurança e isolamento de dados nos dá
                  total confiança."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, TechCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Implementamos em 2 semanas e já estamos gerenciando 50+
                  clientes. O suporte é excepcional e a plataforma é muito
                  intuitiva."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold">João Silva</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, StartupXYZ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "A escalabilidade é impressionante. Crescemos de 10 para 200
                  tenants sem nenhum problema de performance. Recomendo
                  fortemente!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Santos</p>
                    <p className="text-sm text-muted-foreground">
                      Diretora, MegaCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section bg-gradient-to-r from-primary to-primary/80*/}
      <section
        className="py-20 "
        style={{
          background: "linear-gradient(42deg, #075e54 40%, #25d366 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a mais de 1.000 empresas que já confiam na MultiTenant
              Pro para gerenciar seus múltiplos negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-neutral-800 hover:bg-gray/10 h-12 px-8"
              >
                Falar com nossa equipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-transparent hover:text-primary h-12 px-8"
              >
                Agendar Demo
              </Button>
            </div>
            <p className="text-sm text-white">
              14 dias grátis • Sem cartão de crédito • Suporte 24/7
            </p>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
      {/* Footer */}
      <NavFooter />
    </div>
  );
}
