"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { logoText } from "@/lib/images";
import { companyData, getWhatsAppLink, whatsappTemplates } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/fox-for-men", label: "Fox For Men" },
  { href: "/area-atendimento", label: "Área de Atendimento" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg border-b border-gold/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-lg group-hover:bg-gold/30 transition-all" />
              <div className="relative bg-gradient-to-br from-gold to-gold-600 p-2 rounded">
                <span className="block w-6 h-6 border-2 border-dark" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gold tracking-wider">
              {logoText}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center space-x-2 text-gold hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{companyData.phoneFormatted}</span>
            </a>
            <Button
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank")
              }
              size="sm"
            >
              Fazer Pedido
            </Button>
          </div>

          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-secondary border-t border-gold/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-gold/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${companyData.phone}`}
                  className="flex items-center space-x-2 text-gold"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{companyData.phoneFormatted}</span>
                </a>
                <Button
                  onClick={() => {
                    window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank");
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  Fazer Pedido
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
