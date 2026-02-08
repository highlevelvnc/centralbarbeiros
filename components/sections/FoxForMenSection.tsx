"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function FoxForMenSection() {
  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src={images.fox.products}
                alt="Produtos Fox For Men"
                width={600}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-dark/80 backdrop-blur-md border border-gold/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <BadgeCheck className="w-5 h-5 text-gold" />
                    <span className="text-gold font-semibold text-sm">Representante Oficial</span>
                  </div>
                  <p className="text-white text-sm">
                    Parceiro autorizado com linha completa disponível
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-3 block">
              Parceiro Oficial
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Representante
              <span className="text-gold"> Fox For Men</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Somos representantes autorizados da Fox For Men, uma das marcas mais respeitadas no mercado de produtos profissionais para barbearias.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Linha Completa:</span> Pomadas, ceras, shampoos, condicionadores e produtos para barba
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Garantia de Autenticidade:</span> Todos os produtos com selo de originalidade
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Condições Especiais:</span> Preços diferenciados para revendedores e barbearias
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Estoque Garantido:</span> Reposição rápida e produtos sempre disponíveis
                </p>
              </div>
            </div>

            <Link href="/fox-for-men">
              <Button size="lg" className="group">
                Conheça a Linha Completa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
