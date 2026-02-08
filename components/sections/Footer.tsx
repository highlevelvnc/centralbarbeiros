import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { companyData } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-gold/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gold font-bold text-lg mb-4">Central dos Barbeiros</h3>
            <p className="text-gray-400 text-sm mb-4">
              Distribuidor especializado em produtos profissionais para barbearias na Região dos Lagos.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-dark-accent rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-dark-accent rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/fox-for-men" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Fox For Men
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Cidades Atendidas</h4>
            <ul className="space-y-2">
              {companyData.cities.map((city) => (
                <li key={city} className="text-gray-400 text-sm flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gold flex-shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyData.phone}`}
                  className="text-gray-400 hover:text-gold transition-colors text-sm flex items-start"
                >
                  <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  {companyData.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-gray-400 hover:text-gold transition-colors text-sm flex items-start"
                >
                  <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  {companyData.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-xs leading-relaxed">{companyData.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Central dos Barbeiros. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs">
              Região dos Lagos, RJ | Delivery e Retirada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
