"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Package } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Escolha seus Produtos",
    description: "Navegue pelo nosso catálogo completo de produtos profissionais. Pomadas, shampoos, navalhas e muito mais.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Peça pelo WhatsApp",
    description: "Envie sua lista de produtos pelo WhatsApp. Nossa equipe responde rapidamente com valores e disponibilidade.",
  },
  {
    number: "03",
    icon: Package,
    title: "Receba Rápido",
    description: "Escolha entre delivery no mesmo dia ou retirada em nossa central. Produtos sempre disponíveis em estoque.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-3 block">
              Simples e Rápido
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Como Funciona?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Simplificamos o processo de compra para que você foque no que importa: atender seus clientes com excelência.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-xs font-bold text-gold-600">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src={images.barber.working2}
                alt="Barbeiro trabalhando"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
