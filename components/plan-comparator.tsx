"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import { type Language, useTranslation } from "@/lib/i18n"

interface PlanComparatorProps {
  language: Language
}

const planFeatures = {
  pt: {
    starter: {
      name: "Starter",
      price: "R$ 99",
      description: "Perfeito para começar",
      features: [
        { name: "Até 5 tenants", included: true },
        { name: "10GB de armazenamento", included: true },
        { name: "Suporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diário", included: true },
        { name: "API avançada", included: false },
        { name: "Relatórios detalhados", included: false },
        { name: "Integrações ilimitadas", included: false },
        { name: "Suporte prioritário", included: false },
        { name: "SLA 99.9%", included: false },
        { name: "Gerente dedicado", included: false },
        { name: "Customizações", included: false },
      ],
    },
    professional: {
      name: "Professional",
      price: "R$ 299",
      description: "Para empresas em crescimento",
      popular: true,
      features: [
        { name: "Até 25 tenants", included: true },
        { name: "100GB de armazenamento", included: true },
        { name: "Suporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diário", included: true },
        { name: "API avançada", included: true },
        { name: "Relatórios detalhados", included: true },
        { name: "Integrações ilimitadas", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "SLA 99.9%", included: false },
        { name: "Gerente dedicado", included: false },
        { name: "Customizações", included: false },
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "R$ 899",
      description: "Para grandes organizações",
      features: [
        { name: "Tenants ilimitados", included: true },
        { name: "1TB de armazenamento", included: true },
        { name: "Suporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diário", included: true },
        { name: "API avançada", included: true },
        { name: "Relatórios detalhados", included: true },
        { name: "Integrações ilimitadas", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "SLA 99.9%", included: true },
        { name: "Gerente dedicado", included: true },
        { name: "Customizações", included: true },
      ],
    },
  },
  en: {
    starter: {
      name: "Starter",
      price: "$29",
      description: "Perfect to get started",
      features: [
        { name: "Up to 5 tenants", included: true },
        { name: "10GB storage", included: true },
        { name: "Email support", included: true },
        { name: "Free SSL", included: true },
        { name: "Daily backup", included: true },
        { name: "Advanced API", included: false },
        { name: "Detailed reports", included: false },
        { name: "Unlimited integrations", included: false },
        { name: "Priority support", included: false },
        { name: "99.9% SLA", included: false },
        { name: "Dedicated manager", included: false },
        { name: "Customizations", included: false },
      ],
    },
    professional: {
      name: "Professional",
      price: "$89",
      description: "For growing businesses",
      popular: true,
      features: [
        { name: "Up to 25 tenants", included: true },
        { name: "100GB storage", included: true },
        { name: "Email support", included: true },
        { name: "Free SSL", included: true },
        { name: "Daily backup", included: true },
        { name: "Advanced API", included: true },
        { name: "Detailed reports", included: true },
        { name: "Unlimited integrations", included: true },
        { name: "Priority support", included: true },
        { name: "99.9% SLA", included: false },
        { name: "Dedicated manager", included: false },
        { name: "Customizations", included: false },
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "$299",
      description: "For large organizations",
      features: [
        { name: "Unlimited tenants", included: true },
        { name: "1TB storage", included: true },
        { name: "Email support", included: true },
        { name: "Free SSL", included: true },
        { name: "Daily backup", included: true },
        { name: "Advanced API", included: true },
        { name: "Detailed reports", included: true },
        { name: "Unlimited integrations", included: true },
        { name: "Priority support", included: true },
        { name: "99.9% SLA", included: true },
        { name: "Dedicated manager", included: true },
        { name: "Customizations", included: true },
      ],
    },
  },
  es: {
    starter: {
      name: "Starter",
      price: "$29",
      description: "Perfecto para empezar",
      features: [
        { name: "Hasta 5 tenants", included: true },
        { name: "10GB de almacenamiento", included: true },
        { name: "Soporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diario", included: true },
        { name: "API avanzada", included: false },
        { name: "Reportes detallados", included: false },
        { name: "Integraciones ilimitadas", included: false },
        { name: "Soporte prioritario", included: false },
        { name: "SLA 99.9%", included: false },
        { name: "Gerente dedicado", included: false },
        { name: "Personalizaciones", included: false },
      ],
    },
    professional: {
      name: "Professional",
      price: "$89",
      description: "Para empresas en crecimiento",
      popular: true,
      features: [
        { name: "Hasta 25 tenants", included: true },
        { name: "100GB de almacenamiento", included: true },
        { name: "Soporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diario", included: true },
        { name: "API avanzada", included: true },
        { name: "Reportes detallados", included: true },
        { name: "Integraciones ilimitadas", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "SLA 99.9%", included: false },
        { name: "Gerente dedicado", included: false },
        { name: "Personalizaciones", included: false },
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "$299",
      description: "Para grandes organizaciones",
      features: [
        { name: "Tenants ilimitados", included: true },
        { name: "1TB de almacenamiento", included: true },
        { name: "Soporte por email", included: true },
        { name: "SSL gratuito", included: true },
        { name: "Backup diario", included: true },
        { name: "API avanzada", included: true },
        { name: "Reportes detallados", included: true },
        { name: "Integraciones ilimitadas", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "SLA 99.9%", included: true },
        { name: "Gerente dedicado", included: true },
        { name: "Personalizaciones", included: true },
      ],
    },
  },
}

export function PlanComparator({ language }: PlanComparatorProps) {
  const t = useTranslation(language)
  const plans = planFeatures[language]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          {t.comparePlans}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.comparePlans}</DialogTitle>
          <DialogDescription>
            {language === "pt"
              ? "Compare todos os recursos disponíveis em cada plano"
              : language === "en"
                ? "Compare all features available in each plan"
                : "Compara todas las características disponibles en cada plan"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {Object.entries(plans).map(([key, plan]) => (
            <Card key={key} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">{t.popular}</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{feature.name}</span>
                      {feature.included ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-gray-300" />
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full mt-6 ${
                    plan.popular ? "bg-primary hover:bg-primary-600" : "bg-primary hover:bg-primary-600"
                  }`}
                >
                  {language === "pt" ? "Escolher Plano" : language === "en" ? "Choose Plan" : "Elegir Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
