"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Award, Headphones, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Produtos Originais",
    description: "Garantia de autenticidade em todos os produtos. Trabalhamos apenas com marcas reconhecidas e fornecedores certificados.",
  },
  {
    icon: Zap,
    title: "Entrega Expressa",
    description: "Receba seus produtos no mesmo dia na Região dos Lagos. Reposição rápida para não deixar sua barbearia na mão.",
  },
  {
    icon: Award,
    title: "Representante Fox For Men",
    description: "Parceiro oficial da Fox For Men. Linha completa disponível com preços e condições especiais para barbearias.",
  },
  {
    icon: Headphones,
    title: "Atendimento Especializado",
    description: "Equipe que entende de barbearia. Orientação profissional sobre produtos e técnicas de aplicação.",
  },
  {
    icon: TrendingUp,
    title: "Preços Competitivos",
    description: "Condições especiais para atacado. Quanto mais compra, melhor o preço. Planos de reposição personalizados.",
  },
  {
    icon: Users,
    title: "Foco em Barbearias",
    description: "Atendimento B2B exclusivo. Entendemos as necessidades do seu negócio e do seu dia a dia na barbearia.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #D4AF37 0px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(0deg, #D4AF37 0px, transparent 1px, transparent 50px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-3 block">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por que Comprar com a
            <span className="text-gold"> Central dos Barbeiros?</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all group hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="bg-gold/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
