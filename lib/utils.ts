import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Dados da empresa
export const companyData = {
  name: "Central dos Barbeiros",
  phone: "+55 22 99818-8813",
  phoneFormatted: "(22) 99818-8813",
  email: "contato@centraldosbarbeiros.com.br",
  cities: ["Cabo Frio", "Araruama", "Iguaba Grande", "São Pedro da Aldeia"],
  region: "Região dos Lagos, RJ",
  hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h",
  address: "Cabo Frio, Região dos Lagos - RJ",
};

// Templates de mensagem WhatsApp
export const whatsappTemplates = {
  general: (city?: string) =>
    `Olá! Gostaria de fazer um pedido.${city ? ` Sou de ${city}.` : ""}`,
  
  product: (productName: string, city?: string) =>
    `Olá! Tenho interesse no produto: *${productName}*.${city ? ` Sou de ${city}.` : ""} Gostaria de mais informações e fazer um pedido.`,
  
  register: (city?: string) =>
    `Olá! Sou dono(a) de uma barbearia${city ? ` em ${city}` : ""} e gostaria de me cadastrar como cliente da Central dos Barbeiros.`,
  
  restock: (city?: string) =>
    `Olá! Preciso de uma reposição rápida de produtos.${city ? ` Sou de ${city}.` : ""} Podem me ajudar?`,
  
  catalog: (city?: string) =>
    `Olá! Gostaria de receber o catálogo completo de produtos.${city ? ` Sou de ${city}.` : ""}`,
};

// Função para gerar link do WhatsApp
export function getWhatsAppLink(message: string): string {
  const phone = companyData.phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Dados para SEO
export const seoData = {
  title: "Central dos Barbeiros - Distribuidor Profissional para Barbearias | Região dos Lagos RJ",
  description: "Distribuidor especializado em produtos profissionais para barbearias na Região dos Lagos. Delivery rápido em Cabo Frio, Araruama, Iguaba Grande e São Pedro da Aldeia. Representante oficial Fox For Men.",
  keywords: "distribuidor barbearia cabo frio, produtos profissionais barbearia região dos lagos, fox for men, pomadas para barbearia, produtos para barba, atacado barbearia rj",
  ogImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
};
