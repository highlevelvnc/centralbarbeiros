"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/ui/ProductCard";
import { products, productCategories } from "@/lib/products";

export default function ProdutosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nossos <span className="text-gold">Produtos</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Linha completa de produtos profissionais para barbearias. Qualidade
            garantida e entrega rápida.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-gold text-dark"
                : "bg-dark-secondary text-gray-400 hover:text-gold border border-gold/10 hover:border-gold/30"
            }`}
          >
            Todos os Produtos
          </button>

          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-gold text-dark"
                  : "bg-dark-secondary text-gray-400 hover:text-gold border border-gold/10 hover:border-gold/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
