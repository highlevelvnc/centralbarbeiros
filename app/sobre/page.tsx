"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Users, Award, Heart } from "lucide-react";
import { images } from "@/lib/images";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Fornecer produtos profissionais de alta qualidade para barbearias da Região dos Lagos, com atendimento personalizado e entrega rápida.",
  },
  {
    icon: Users,
    title: "Compromisso",
    description:
      "Ser parceiro de crescimento dos barbeiros, entendendo as necessidades do dia a dia e oferecendo soluções que fazem diferença no negócio.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Trabalhar apenas com marcas reconhecidas e produtos originais, garantindo a satisfação dos nossos clientes e seus consumidores finais.",
  },
  {
    icon: Heart,
    title: "Paixão",
    description:
      "Amar o universo da barbearia e contribuir para o fortalecimento da cultura barber na região, com produtos e atendimento de excelência.",
  },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images.barber.shop})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sobre a <span className="text-gold">Central dos Barbeiros</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Somos uma distribuidora especializada em produtos profissionais para barbearias, localizada na Região dos Lagos, Rio de Janeiro.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nossa história começa com a paixão pelo universo da barbearia e o compromisso de facilitar o acesso a produtos de qualidade para os profissionais da região.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  A Central dos Barbeiros nasceu da identificação de uma necessidade real no mercado: barbeiros profissionais da Região dos Lagos precisavam de um fornecedor confiável, com produtos de qualidade e entrega rápida.
                </p>
                <p>
                  Como representantes oficiais da Fox For Men e parceiros de outras marcas reconhecidas, oferecemos uma linha completa de produtos profissionais: pomadas, shampoos, navalhas, acessórios e tudo que uma barbearia precisa para operar com excelência.
                </p>
                <p>
                  Nosso diferencial está no atendimento personalizado. Entendemos que cada barbearia tem suas particularidades e necessidades específicas. Por isso, trabalhamos com flexibilidade, oferecendo desde pequenos pedidos até grandes volumes para atacado.
                </p>
                <p>
                  Hoje, atendemos dezenas de barbearias em Cabo Frio, Araruama, Iguaba Grande e São Pedro da Aldeia, e continuamos crescendo junto com nossos clientes.
                </p>
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
                  src={images.barber.working1}
                  alt="Barbeiro profissional"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="text-gold">Valores</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-dark border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all text-center"
                >
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que Escolher a <span className="text-gold">Central dos Barbeiros?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Porque entendemos de barbearia. Não somos apenas uma distribuidora, somos parceiros que conhecem os desafios do dia a dia e trabalham para facilitar a vida dos barbeiros profissionais da Região dos Lagos.
            </p>
            <p className="text-white text-xl font-semibold">
              "Seu sucesso é o nosso sucesso."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
