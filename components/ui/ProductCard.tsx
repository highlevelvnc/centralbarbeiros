"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Product } from "@/lib/products";
import { getWhatsAppLink, whatsappTemplates } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const handleOrder = () => {
    window.open(getWhatsAppLink(whatsappTemplates.product(product.name)), "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-dark-secondary border border-gold/10 rounded-lg overflow-hidden hover:border-gold/30 transition-all group hover:shadow-xl hover:shadow-gold/5"
    >
      <div className="relative h-64 overflow-hidden bg-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <Button
          onClick={handleOrder}
          variant="outline"
          className="w-full group/btn"
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
          Pedir no WhatsApp
        </Button>
      </div>
    </motion.div>
  );
}
