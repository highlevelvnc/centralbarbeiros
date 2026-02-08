import type { Metadata } from "next";
import ProdutosClient from "./ProdutosClient";

export const metadata: Metadata = {
  title: "Produtos | Central dos Barbeiros",
  description:
    "Catálogo de produtos profissionais para barbearias na Região dos Lagos.",
};

export default function ProdutosPage() {
  return <ProdutosClient />;
}
