import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const NavFooter: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">ThunderWave</span>
            </div>
            <p className="text-muted-foreground">
              A plataforma mais avançada para gerenciamento de múltiplos
              negócios em uma única solução.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 g-mute dark:bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
                <span className="text-primary">f</span>
              </div>
              <div className="w-10 h-10 bg-mute dark:bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
                <span className="text-primary">t</span>
              </div>
              <div className="w-10 h-10 g-mute dark:bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-muted/80 cursor-pointer">
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
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Termos
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavFooter;
