"use client";

import { useState } from "react";
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

  const t = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-background">
      {/* Tour Guide */}
      <TourGuide
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        language={currentLanguage}
      />

      <NavHeader />

      <section className="h-screen pt-20 pb-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-emerald-600 dark:via-teal-700 dark:to-cyan-800 text-white overflow-hidden relative">
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
                  através do WhatsApp, Instagram, Facebook Messenger e Telegram
                  em uma única plataforma.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-white text-teal-600 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25">
                    Criar uma conta gratuita
                  </button>
                  <button className="px-8 py-4 bg-emerald-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                    Agendar Demo
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
                    <span>Teste grátis por 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                    <span>Sem cartão de crédito</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Central WhatsApp Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="w-24 h-24 text-green-500" />
                  </div>
                </div>

                {/* Floating Platform Icons */}
                <div className="absolute top-8 right-8 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div
                  className="absolute bottom-12 left-4 animate-float"
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
                  className="absolute bottom-20 right-12 animate-float"
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
                  <span className="text-primary">
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8"
                >
                  {t.startFreeTrial}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{t.freeDays}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{t.noCard}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
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

      <Features />
      {/* Features Section */}
      <section id="features-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">
              Recursos Principais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.featuresTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.featuresDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Isolamento Completo de Dados</CardTitle>
                <CardDescription>
                  Cada tenant possui seu próprio banco de dados isolado,
                  garantindo total segurança e privacidade dos dados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Segurança Avançada</CardTitle>
                <CardDescription>
                  Autenticação multi-fator, criptografia end-to-end e compliance
                  com LGPD e GDPR.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance Otimizada</CardTitle>
                <CardDescription>
                  CDN global, cache inteligente e otimizações automáticas para
                  máxima velocidade.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Escalabilidade Global</CardTitle>
                <CardDescription>
                  Suporte a milhões de usuários com infraestrutura que escala
                  automaticamente conforme a demanda.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interface Responsiva</CardTitle>
                <CardDescription>
                  Design adaptável que funciona perfeitamente em desktop, tablet
                  e mobile.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Suporte 24/7</CardTitle>
                <CardDescription>
                  Equipe especializada disponível 24 horas por dia, 7 dias por
                  semana para ajudar você.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">Como Funciona</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Simples de configurar, poderoso de usar
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
      <section id="pricing-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary">
              Planos e Preços
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.pricingTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pricingDescription}
            </p>
            <div className="pt-4">
              <PlanComparator language={currentLanguage} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
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
                <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-primary relative hover:border-primary/80 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
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
                <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar Teste
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
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
                <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-section" className="py-20 bg-background">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Junte-se a mais de 1.000 empresas que já confiam na MultiTenant
              Pro para gerenciar seus múltiplos negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 h-12 px-8"
              >
                Começar Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8"
              >
                Agendar Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">
              14 dias grátis • Sem cartão de crédito • Suporte 24/7
            </p>
          </div>
        </div>
      </section>
      <WhatsAppWidget />
      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MultiTenant Pro</span>
              </div>
              <p className="text-muted-foreground">
                A plataforma mais avançada para gerenciamento de múltiplos
                negócios em uma única solução.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
                  <span className="text-primary">f</span>
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
                  <span className="text-primary">t</span>
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
                  <span className="text-primary">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Preços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrações
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>contato@multitenantpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; 2024 MultiTenant Pro. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Termos
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
