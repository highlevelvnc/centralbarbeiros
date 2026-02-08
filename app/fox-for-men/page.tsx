"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Star, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { getWhatsAppLink, whatsappTemplates } from "@/lib/utils";
import { images } from "@/lib/images";
import { products } from "@/lib/products";

const foxBenefits = [
  {
    icon: BadgeCheck,
    title: "Representação Oficial",
    description: "Somos parceiros autorizados da Fox For Men, garantindo produtos originais e autênticos.",
  },
  {
    icon: Star,
    title: "Qualidade Premium",
    description: "Produtos desenvolvidos especificamente para o mercado profissional de barbearias.",
  },
  {
    icon: Award,
    title: "Marca Reconhecida",
    description: "Uma das marcas mais respeitadas e utilizadas por barbeiros profissionais no Brasil.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os produtos com nota fiscal e garantia de satisfação.",
  },
];

export default function FoxForMenPage() {
  const foxProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images.fox.lineup})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <BadgeCheck className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold text-sm">Representante Oficial</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fox For Men
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Parceiro oficial da Fox For Men na Região dos Lagos. Linha completa de produtos profissionais com preços e condições especiais para barbearias.
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.open(getWhatsAppLink(whatsappTemplates.catalog()), "_blank")
              }
            >
              Solicitar Catálogo Fox For Men
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Por que <span className="text-gold">Fox For Men?</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {foxBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-dark border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 transition-all"
                >
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Produtos <span className="text-gold">Disponíveis</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Seleção dos principais produtos Fox For Men disponíveis em estoque.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foxProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
