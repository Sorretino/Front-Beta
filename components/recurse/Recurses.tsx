import React from "react";
import {
  Database,
  Zap,
  Shield,
  Smartphone,
  Globe,
  HeadphonesIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { type Language, useTranslation } from "@/lib/i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type RecurseProps = {
  currentLanguage: any;
};

const Recurse: React.FC<RecurseProps> = ({ currentLanguage }) => {
  const t = useTranslation(currentLanguage);

  return (
    <section id="features-section" className="py-20 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary dark:text-CustomBtnDev">
            Recursos Principais
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-CustonCabe dark:text-CustomBtnDev">
            {t.featuresTitle}{" "}
            <span className="text-foreground">{t.featuresTitleSub}</span>
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
                Design adaptável que funciona perfeitamente em desktop, tablet e
                mobile.
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
  );
};

export default Recurse;
