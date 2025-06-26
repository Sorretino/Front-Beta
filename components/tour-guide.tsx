"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ArrowRight, ArrowLeft } from "lucide-react"
import { type Language, useTranslation } from "@/lib/i18n"

interface TourStep {
  target: string
  title: string
  content: string
  position: "top" | "bottom" | "left" | "right"
}

interface TourGuideProps {
  isOpen: boolean
  onClose: () => void
  language: Language
}

export function TourGuide({ isOpen, onClose, language }: TourGuideProps) {
  const t = useTranslation(language)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)

  const tourSteps: TourStep[] = [
    {
      target: "hero-section",
      title: language === "pt" ? "Bem-vindo!" : language === "en" ? "Welcome!" : "¡Bienvenido!",
      content:
        language === "pt"
          ? "Esta é nossa plataforma de multiatendimento. Vamos fazer um tour rápido!"
          : language === "en"
            ? "This is our multi-tenant platform. Let's take a quick tour!"
            : "Esta es nuestra plataforma multi-tenant. ¡Hagamos un tour rápido!",
      position: "bottom",
    },
    {
      target: "features-section",
      title:
        language === "pt" ? "Recursos Principais" : language === "en" ? "Main Features" : "Características Principales",
      content:
        language === "pt"
          ? "Aqui você encontra todos os recursos que nossa plataforma oferece."
          : language === "en"
            ? "Here you can find all the features our platform offers."
            : "Aquí puedes encontrar todas las características que ofrece nuestra plataforma.",
      position: "top",
    },
    {
      target: "pricing-section",
      title: language === "pt" ? "Planos e Preços" : language === "en" ? "Plans & Pricing" : "Planes y Precios",
      content:
        language === "pt"
          ? "Escolha o plano que melhor se adapta ao seu negócio."
          : language === "en"
            ? "Choose the plan that best fits your business."
            : "Elige el plan que mejor se adapte a tu negocio.",
      position: "top",
    },
    {
      target: "testimonials-section",
      title: language === "pt" ? "Depoimentos" : language === "en" ? "Testimonials" : "Testimonios",
      content:
        language === "pt"
          ? "Veja o que nossos clientes dizem sobre nossa plataforma."
          : language === "en"
            ? "See what our customers say about our platform."
            : "Ve lo que dicen nuestros clientes sobre nuestra plataforma.",
      position: "top",
    },
  ]

  useEffect(() => {
    if (isOpen && tourSteps[currentStep]) {
      const element = document.getElementById(tourSteps[currentStep].target)
      setTargetElement(element)

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }, [isOpen, currentStep])

  if (!isOpen || !targetElement) return null

  const currentTourStep = tourSteps[currentStep]
  const rect = targetElement.getBoundingClientRect()

  const getTooltipPosition = () => {
    const offset = 20
    switch (currentTourStep.position) {
      case "top":
        return {
          top: rect.top - offset,
          left: rect.left + rect.width / 2,
          transform: "translate(-50%, -100%)",
        }
      case "bottom":
        return {
          top: rect.bottom + offset,
          left: rect.left + rect.width / 2,
          transform: "translate(-50%, 0)",
        }
      case "left":
        return {
          top: rect.top + rect.height / 2,
          left: rect.left - offset,
          transform: "translate(-100%, -50%)",
        }
      case "right":
        return {
          top: rect.top + rect.height / 2,
          left: rect.right + offset,
          transform: "translate(0, -50%)",
        }
    }
  }

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40" onClick={onClose} />

      {/* Highlight */}
      <div
        className="fixed border-4 border-primary rounded-lg pointer-events-none z-50"
        style={{
          top: rect.top - 4,
          left: rect.left - 4,
          width: rect.width + 8,
          height: rect.height + 8,
        }}
      />

      {/* Tooltip */}
      <Card className="fixed z-50 w-80 shadow-2xl bg-card border-border" style={getTooltipPosition()}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">{currentTourStep.title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-gray-600 mb-6">{currentTourStep.content}</p>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {currentStep + 1} de {tourSteps.length}
            </div>

            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button variant="outline" size="sm" onClick={prevStep}>
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  {language === "pt" ? "Anterior" : language === "en" ? "Previous" : "Anterior"}
                </Button>
              )}

              <Button size="sm" onClick={nextStep}>
                {currentStep === tourSteps.length - 1
                  ? language === "pt"
                    ? "Finalizar"
                    : language === "en"
                      ? "Finish"
                      : "Finalizar"
                  : language === "pt"
                    ? "Próximo"
                    : language === "en"
                      ? "Next"
                      : "Siguiente"}
                {currentStep < tourSteps.length - 1 && <ArrowRight className="h-4 w-4 ml-1" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
