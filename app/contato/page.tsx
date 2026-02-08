"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyData, getWhatsAppLink, whatsappTemplates } from "@/lib/utils";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}, sou de ${formData.city}.\n\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Entre em <span className="text-gold">Contato</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender sua barbearia. Fale conosco pelo WhatsApp ou envie uma mensagem.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Informações de Contato</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">Telefone / WhatsApp</h3>
                    <a
                      href={`tel:${companyData.phone}`}
                      className="text-gold hover:text-gold-400 transition-colors"
                    >
                      {companyData.phoneFormatted}
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      Atendimento rápido via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">E-mail</h3>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-gold hover:text-gold-400 transition-colors"
                    >
                      {companyData.email}
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      Envie suas dúvidas por e-mail
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-400">{companyData.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">Localização</h3>
                    <p className="text-gray-400">{companyData.address}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Atendemos: {companyData.cities.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full group"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank")
              }
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp Agora
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gold/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gold/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-white font-medium mb-2">
                  Cidade *
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gold/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Selecione sua cidade</option>
                  {companyData.cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gold/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar via WhatsApp
              </Button>

              <p className="text-gray-500 text-sm text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
