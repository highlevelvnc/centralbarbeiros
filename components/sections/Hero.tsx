"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, whatsappTemplates } from "@/lib/utils";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.hero.main})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
              Representante Oficial Fox For Men
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Distribuidora Premium</span>
              <br />
              <span className="text-gold">para Barbearias</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Produtos profissionais de alta qualidade com entrega rápida na Região dos Lagos.
              Atendimento especializado para barbeiros exigentes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.general()), "_blank")
              }
              className="group"
            >
              Fazer Pedido Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.catalog()), "_blank")
              }
            >
              Ver Catálogo Completo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                <Package className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Produtos Premium</h3>
                <p className="text-gray-400 text-sm">Marcas profissionais selecionadas</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                <Truck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Entrega Rápida</h3>
                <p className="text-gray-400 text-sm">Delivery e retirada na hora</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Reposição Fácil</h3>
                <p className="text-gray-400 text-sm">Peça pelo WhatsApp em minutos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
