"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, whatsappTemplates, companyData } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full border-2 border-gold/30 mb-6">
              <MessageCircle className="w-10 h-10 text-gold" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para Abastecer sua
            <span className="text-gold"> Barbearia?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Faça seu pedido agora pelo WhatsApp e receba produtos profissionais de alta qualidade com entrega rápida na Região dos Lagos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank")
              }
              className="group text-lg px-8"
            >
              Fazer Pedido Agora
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.catalog()), "_blank")
              }
              className="text-lg px-8"
            >
              Ver Catálogo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-dark-accent/50 backdrop-blur-sm border border-gold/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-gold mb-2">100+</div>
              <div className="text-gray-400 text-sm">Produtos Disponíveis</div>
            </div>
            <div className="bg-dark-accent/50 backdrop-blur-sm border border-gold/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-gold mb-2">24h</div>
              <div className="text-gray-400 text-sm">Entrega Rápida</div>
            </div>
            <div className="bg-dark-accent/50 backdrop-blur-sm border border-gold/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-gold mb-2">4</div>
              <div className="text-gray-400 text-sm">Cidades Atendidas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
