"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyData, getWhatsAppLink, whatsappTemplates } from "@/lib/utils";

const cities = [
  {
    name: "Cabo Frio",
    description: "Entrega no mesmo dia. Retirada disponível em nossa central.",
    highlight: true,
  },
  {
    name: "Araruama",
    description: "Entrega em até 24 horas. Atendimento prioritário.",
    highlight: false,
  },
  {
    name: "Iguaba Grande",
    description: "Entrega em até 24 horas. Atendimento completo.",
    highlight: false,
  },
  {
    name: "São Pedro da Aldeia",
    description: "Entrega em até 24 horas. Suporte via WhatsApp.",
    highlight: false,
  },
];

export default function AreaAtendimentoPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Área de <span className="text-gold">Atendimento</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atendemos toda a Região dos Lagos com entrega rápida e retirada em nossa central.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Cidades Atendidas</h2>
            <div className="space-y-6">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`bg-dark-secondary border rounded-lg p-6 ${
                    city.highlight
                      ? "border-gold/30 bg-gold/5"
                      : "border-gold/10 hover:border-gold/20"
                  } transition-all`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        city.highlight ? "bg-gold/20" : "bg-gold/10"
                      } border border-gold/20`}
                    >
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        {city.name}
                        {city.highlight && (
                          <span className="ml-3 text-xs bg-gold text-dark px-2 py-1 rounded-full font-semibold">
                            PRINCIPAL
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-400">{city.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-dark-secondary border border-gold/10 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117816.88716612832!2d-42.10869584999999!3d-22.878791699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x971790b9e1fd87%3A0x4f5f28f6e77cf1e!2sCabo%20Frio%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="space-y-4">
              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Truck className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Delivery e Retirada</h3>
                    <p className="text-gray-400 text-sm">
                      Entrega rápida ou retirada em nossa central em Cabo Frio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-400 text-sm">{companyData.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                    <p className="text-gray-400 text-sm mb-3">{companyData.phoneFormatted}</p>
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank")
                      }
                    >
                      Fazer Pedido
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
