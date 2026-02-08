"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como faço para fazer meu primeiro pedido?",
    answer: "É muito simples! Entre em contato pelo nosso WhatsApp, informe sua cidade e os produtos desejados. Nossa equipe responde rapidamente com disponibilidade e valores.",
  },
  {
    question: "Vocês fazem entrega em toda a Região dos Lagos?",
    answer: "Sim! Atendemos Cabo Frio, Araruama, Iguaba Grande e São Pedro da Aldeia com delivery rápido. Em Cabo Frio, a entrega pode ser feita no mesmo dia.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Para Cabo Frio, normalmente entregamos no mesmo dia. Para as outras cidades da Região dos Lagos, o prazo é de até 24 horas. Você também pode optar por retirar pessoalmente em nossa central.",
  },
  {
    question: "Há pedido mínimo?",
    answer: "Trabalhamos com vendas para barbearias (B2B), mas não temos pedido mínimo inicial. Para entregas, sugerimos pedidos a partir de 3 unidades para otimizar o custo-benefício.",
  },
  {
    question: "Os produtos Fox For Men são originais?",
    answer: "Sim! Somos representantes oficiais da Fox For Men. Todos os produtos vêm com garantia de originalidade e nota fiscal.",
  },
  {
    question: "Vocês oferecem condições especiais para barbearias?",
    answer: "Com certeza! Temos preços diferenciados para atacado e planos de reposição personalizados. Quanto maior o volume, melhores as condições. Entre em contato para saber mais.",
  },
  {
    question: "Posso visitar a central para conhecer os produtos?",
    answer: "Pode sim! Temos showroom com os principais produtos disponíveis. Entre em contato pelo WhatsApp para agendar sua visita e conhecer toda a linha.",
  },
  {
    question: "Como funciona a troca ou devolução?",
    answer: "Produtos com defeito ou avariados no transporte são trocados imediatamente. Entre em contato em até 48h após o recebimento para avaliarmos a situação.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="bg-dark-secondary border border-gold/10 rounded-lg overflow-hidden hover:border-gold/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-white font-semibold pr-8">{faq.question}</span>
        <span className="flex-shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed border-t border-gold/10 pt-4">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-3 block">
            Tire suas Dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Perguntas
            <span className="text-gold"> Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
