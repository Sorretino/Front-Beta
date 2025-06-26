import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  ArrowLeft,
  Shield,
  Database,
  Zap,
  Globe,
  Lock,
  Server,
  Cloud,
  Code,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">
                  MultiTenant Pro
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-white text-gray-900 border-gray-300"
              >
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">
              Detalhes Técnicos
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Arquitetura e Especificações da Plataforma
            </h1>
            <p className="text-xl text-gray-600">
              Conheça em detalhes como nossa plataforma de multiatendimento
              funciona, suas especificações técnicas e benefícios arquiteturais.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="architecture" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="architecture">Arquitetura</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="integrations">Integrações</TabsTrigger>
            </TabsList>

            <TabsContent value="architecture" className="mt-8">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Arquitetura Multitenant
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Nossa arquitetura foi projetada para oferecer isolamento
                    completo, escalabilidade infinita e performance otimizada.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Isolamento de Dados</CardTitle>
                      <CardDescription>
                        Cada tenant possui seu próprio schema de banco de dados,
                        garantindo isolamento completo e segurança máxima.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Schema dedicado por tenant</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Backup isolado e automático</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Migração de dados simplificada</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Server className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Microserviços</CardTitle>
                      <CardDescription>
                        Arquitetura baseada em microserviços para máxima
                        flexibilidade e escalabilidade independente.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Serviços independentes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Deploy contínuo</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Tolerância a falhas</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Cloud className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle>Cloud Native</CardTitle>
                      <CardDescription>
                        Construído para a nuvem com containers, orquestração
                        Kubernetes e auto-scaling inteligente.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Containers Docker</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Kubernetes orchestration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Auto-scaling horizontal</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <Code className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle>API-First</CardTitle>
                      <CardDescription>
                        APIs RESTful e GraphQL para integração fácil e
                        desenvolvimento de aplicações customizadas.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>REST e GraphQL APIs</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Documentação OpenAPI</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>SDKs em múltiplas linguagens</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-8">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Segurança Avançada
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Implementamos as melhores práticas de segurança da indústria
                    para proteger seus dados e de seus clientes.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-red-600" />
                      </div>
                      <CardTitle>Criptografia End-to-End</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AES-256 para dados em repouso</li>
                        <li>• TLS 1.3 para dados em trânsito</li>
                        <li>• Chaves gerenciadas por HSM</li>
                        <li>• Rotação automática de chaves</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle>Autenticação Multifator</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• TOTP (Google Authenticator)</li>
                        <li>• SMS e Email OTP</li>
                        <li>• Biometria (quando disponível)</li>
                        <li>• SSO com SAML/OAuth</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle>Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• LGPD (Lei Geral de Proteção de Dados)</li>
                        <li>• GDPR (General Data Protection Regulation)</li>
                        <li>• SOC 2 Type II</li>
                        <li>• ISO 27001</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      <span>Monitoramento e Auditoria</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Monitoramento em Tempo Real
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Detecção de anomalias</li>
                          <li>• Alertas automáticos</li>
                          <li>• Dashboard de segurança</li>
                          <li>• Análise comportamental</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Logs de Auditoria
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Registro completo de atividades</li>
                          <li>• Trilha de auditoria imutável</li>
                          <li>• Relatórios de compliance</li>
                          <li>• Retenção configurável</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-8">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Performance e Escalabilidade
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Otimizações avançadas e infraestrutura global para garantir
                    performance excepcional em qualquer escala.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Cache Inteligente</CardTitle>
                      <CardDescription>
                        Sistema de cache multi-camadas com invalidação
                        automática e otimização por tenant.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Camadas de Cache
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• CDN Edge Cache (CloudFlare)</li>
                            <li>• Application Cache (Redis)</li>
                            <li>• Database Query Cache</li>
                            <li>• Browser Cache otimizado</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Resultado:</strong> Redução de 90% no tempo
                            de resposta para dados frequentemente acessados.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>CDN Global</CardTitle>
                      <CardDescription>
                        Rede de distribuição de conteúdo com mais de 200 pontos
                        de presença mundial.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Cobertura Global
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• América do Norte: 50+ POPs</li>
                            <li>• América do Sul: 15+ POPs</li>
                            <li>• Europa: 80+ POPs</li>
                            <li>• Ásia-Pacífico: 60+ POPs</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Resultado:</strong> Latência média global
                            inferior a 50ms para 95% dos usuários.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Métricas de Performance</CardTitle>
                    <CardDescription>
                      Indicadores de performance em tempo real da nossa
                      plataforma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          99.99%
                        </div>
                        <div className="text-sm text-gray-600">Uptime SLA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {"<"}50ms
                        </div>
                        <div className="text-sm text-gray-600">
                          Latência Média
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          10M+
                        </div>
                        <div className="text-sm text-gray-600">
                          Requests/min
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                          {"<"}2s
                        </div>
                        <div className="text-sm text-gray-600">
                          Time to First Byte
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-8">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Integrações e APIs
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Conecte-se facilmente com suas ferramentas favoritas através
                    de nossas APIs robustas e integrações nativas.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle>APIs RESTful</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Documentação OpenAPI 3.0</li>
                        <li>• Rate limiting inteligente</li>
                        <li>• Versionamento semântico</li>
                        <li>• Webhooks em tempo real</li>
                        <li>• SDKs para 10+ linguagens</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="h-8 w-8 text-purple-600" />
                      </div>
                      <CardTitle>GraphQL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Schema introspection</li>
                        <li>• Queries otimizadas</li>
                        <li>• Subscriptions em tempo real</li>
                        <li>• Playground interativo</li>
                        <li>• Caching automático</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle>Mobile SDKs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• iOS (Swift)</li>
                        <li>• Android (Kotlin/Java)</li>
                        <li>• React Native</li>
                        <li>• Flutter</li>
                        <li>• Xamarin</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Integrações Nativas</CardTitle>
                    <CardDescription>
                      Conecte-se instantaneamente com as principais ferramentas
                      do mercado.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3">CRM & Vendas</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Salesforce</li>
                          <li>• HubSpot</li>
                          <li>• Pipedrive</li>
                          <li>• Zoho CRM</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Comunicação</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Slack</li>
                          <li>• Microsoft Teams</li>
                          <li>• Discord</li>
                          <li>• Telegram</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Pagamentos</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Stripe</li>
                          <li>• PayPal</li>
                          <li>• PagSeguro</li>
                          <li>• Mercado Pago</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Especificações Técnicas
              </h2>
              <p className="text-lg text-gray-600">
                Detalhes técnicos completos da nossa infraestrutura e
                plataforma.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Infraestrutura</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Cloud Providers
                    </h4>
                    <p className="text-sm text-gray-600">
                      AWS, Google Cloud, Azure (Multi-cloud)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Containers</h4>
                    <p className="text-sm text-gray-600">
                      Docker, Kubernetes, Helm Charts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Banco de Dados
                    </h4>
                    <p className="text-sm text-gray-600">
                      PostgreSQL, Redis, MongoDB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Monitoramento
                    </h4>
                    <p className="text-sm text-gray-600">
                      Prometheus, Grafana, ELK Stack
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Tecnologias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Backend</h4>
                    <p className="text-sm text-gray-600">
                      Node.js, Python, Go, Java
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600">
                      React, Next.js, TypeScript, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Message Queue
                    </h4>
                    <p className="text-sm text-gray-600">
                      Apache Kafka, RabbitMQ, AWS SQS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">CI/CD</h4>
                    <p className="text-sm text-gray-600">
                      GitHub Actions, Jenkins, ArgoCD
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100">
              Experimente nossa plataforma gratuitamente por 14 dias e veja como
              podemos transformar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8"
              >
                Começar Teste Grátis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 h-12 px-8"
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">MultiTenant Pro</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Documentação
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Suporte
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MultiTenant Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
