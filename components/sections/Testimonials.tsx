"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    barbershop: "Barbearia Império - Cabo Frio",
    text: "Trabalho com a Central há mais de 2 anos e não troco por nada. Entrega rápida, produtos de qualidade e atendimento nota 10. Meus clientes sempre elogiam o resultado dos finalizadores.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    barbershop: "Cortes Premium - Araruama",
    text: "A linha Fox For Men que compro aqui é sucesso total na barbearia. Clientes sempre perguntam quais produtos uso. O atendimento via WhatsApp facilita muito a reposição.",
    rating: 5,
  },
  {
    name: "Felipe Santos",
    barbershop: "Barber Shop Elite - São Pedro da Aldeia",
    text: "Excelente parceiro comercial. Preços competitivos e produtos sempre em estoque. Já indiquei para vários colegas barbeiros da região. Confiança total!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37),
                           linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
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
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que Dizem os
            <span className="text-gold"> Barbeiros</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira a opinião de profissionais que já confiam na Central dos Barbeiros para abastecer suas barbearias.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-dark-secondary border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gold/10 pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gold text-sm">{testimonial.barbershop}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
