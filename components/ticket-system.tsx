"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HeadphonesIcon,
  Send,
  Clock,
  AlertCircle,
  CheckCircle,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { type Language, useTranslation } from "@/lib/i18n";

interface TicketSystemProps {
  language: Language;
}

interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in-progress" | "resolved" | "closed";
  category: string;
  createdAt: string;
  updatedAt: string;
}

export function TicketSystem({ language }: TicketSystemProps) {
  const t = useTranslation(language);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
    priority: "medium",
    category: "technical",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: "TK-001",
      title:
        language === "pt"
          ? "Problema de login"
          : language === "en"
          ? "Login issue"
          : "Problema de inicio de sesión",
      description:
        language === "pt"
          ? "Não consigo fazer login na plataforma"
          : language === "en"
          ? "Cannot login to platform"
          : "No puedo iniciar sesión en la plataforma",
      priority: "high",
      status: "in-progress",
      category: "technical",
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T14:20:00Z",
    },
    {
      id: "TK-002",
      title:
        language === "pt"
          ? "Dúvida sobre planos"
          : language === "en"
          ? "Question about plans"
          : "Pregunta sobre planes",
      description:
        language === "pt"
          ? "Gostaria de saber mais sobre o plano Enterprise"
          : language === "en"
          ? "Would like to know more about Enterprise plan"
          : "Me gustaría saber más sobre el plan Enterprise",
      priority: "medium",
      status: "resolved",
      category: "billing",
      createdAt: "2024-01-14T09:15:00Z",
      updatedAt: "2024-01-14T16:45:00Z",
    },
  ]);

  const categories = {
    pt: {
      technical: "Técnico",
      billing: "Cobrança",
      feature: "Recurso",
      bug: "Bug",
      other: "Outro",
    },
    en: {
      technical: "Technical",
      billing: "Billing",
      feature: "Feature",
      bug: "Bug",
      other: "Other",
    },
    es: {
      technical: "Técnico",
      billing: "Facturación",
      feature: "Característica",
      bug: "Error",
      other: "Otro",
    },
  };

  const priorities = {
    pt: {
      low: "Baixa",
      medium: "Média",
      high: "Alta",
      urgent: "Urgente",
    },
    en: {
      low: "Low",
      medium: "Medium",
      high: "High",
      urgent: "Urgent",
    },
    es: {
      low: "Baja",
      medium: "Media",
      high: "Alta",
      urgent: "Urgente",
    },
  };

  const statuses = {
    pt: {
      open: "Aberto",
      "in-progress": "Em Andamento",
      resolved: "Resolvido",
      closed: "Fechado",
    },
    en: {
      open: "Open",
      "in-progress": "In Progress",
      resolved: "Resolved",
      closed: "Closed",
    },
    es: {
      open: "Abierto",
      "in-progress": "En Progreso",
      resolved: "Resuelto",
      closed: "Cerrado",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do ticket
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newTicket: Ticket = {
      id: `TK-${String(tickets.length + 1).padStart(3, "0")}`,
      title: formData.title,
      description: formData.description,
      priority: formData.priority as any,
      status: "open",
      category: formData.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTickets([newTicket, ...tickets]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      description: "",
      priority: "medium",
      category: "technical",
    });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-gray-100 text-gray-800";
      case "medium":
        return "bg-blue-100 text-blue-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "urgent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <Clock className="h-4 w-4" />;
      case "in-progress":
        return <AlertCircle className="h-4 w-4" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4" />;
      case "closed":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-CustonCabe hover:bg-CustomBtnDev dark:bg-CustomBtnDev dark:text-white">
          <HeadphonesIcon className="h-4 w-4" />
          {t.openTicket}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <HeadphonesIcon className="h-6 w-6 text-blue-600" />
            {language === "pt"
              ? "Sistema de Suporte"
              : language === "en"
              ? "Support System"
              : "Sistema de Soporte"}
          </DialogTitle>
          <DialogDescription>
            {language === "pt"
              ? "Abra um ticket de suporte ou visualize tickets existentes"
              : language === "en"
              ? "Open a support ticket or view existing tickets"
              : "Abre un ticket de soporte o ve tickets existentes"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Formulário de Novo Ticket */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {language === "pt"
                  ? "Novo Ticket"
                  : language === "en"
                  ? "New Ticket"
                  : "Nuevo Ticket"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {language === "pt"
                        ? "Nome"
                        : language === "en"
                        ? "Name"
                        : "Nombre"}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {language === "pt"
                      ? "Telefone (opcional)"
                      : language === "en"
                      ? "Phone (optional)"
                      : "Teléfono (opcional)"}
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>
                      {language === "pt"
                        ? "Categoria"
                        : language === "en"
                        ? "Category"
                        : "Categoría"}
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categories[language]).map(
                          ([key, value]) => (
                            <SelectItem key={key} value={key}>
                              {value}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      {language === "pt"
                        ? "Prioridade"
                        : language === "en"
                        ? "Priority"
                        : "Prioridad"}
                    </Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) =>
                        setFormData({ ...formData, priority: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(priorities[language]).map(
                          ([key, value]) => (
                            <SelectItem key={key} value={key}>
                              {value}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">
                    {language === "pt"
                      ? "Título"
                      : language === "en"
                      ? "Title"
                      : "Título"}
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    {language === "pt"
                      ? "Descrição"
                      : language === "en"
                      ? "Description"
                      : "Descripción"}
                  </Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      {language === "pt"
                        ? "Enviando..."
                        : language === "en"
                        ? "Sending..."
                        : "Enviando..."}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {language === "pt"
                        ? "Enviar Ticket"
                        : language === "en"
                        ? "Send Ticket"
                        : "Enviar Ticket"}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Lista de Tickets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {language === "pt"
                  ? "Tickets Recentes"
                  : language === "en"
                  ? "Recent Tickets"
                  : "Tickets Recientes"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-gray-500">
                          {ticket.id}
                        </span>
                        <Badge className={getPriorityColor(ticket.priority)}>
                          {priorities[language][ticket.priority]}
                        </Badge>
                      </div>
                      <Badge className={getStatusColor(ticket.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(ticket.status)}
                          {statuses[language][ticket.status]}
                        </div>
                      </Badge>
                    </div>

                    <h4 className="font-semibold mb-1">{ticket.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {ticket.description}
                    </p>

                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{categories[language][ticket.category]}</span>
                      <span>
                        {language === "pt"
                          ? "Criado em"
                          : language === "en"
                          ? "Created on"
                          : "Creado el"}{" "}
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
