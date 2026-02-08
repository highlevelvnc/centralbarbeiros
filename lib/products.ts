import { images } from "./images";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const productCategories = [
  {
    id: "pomadas",
    name: "Pomadas e Finalizadores",
    slug: "pomadas-finalizadores",
  },
  {
    id: "shampoos",
    name: "Shampoos e Condicionadores",
    slug: "shampoos-condicionadores",
  },
  {
    id: "barba",
    name: "Barba (Óleos, Balms)",
    slug: "barba-oleos-balms",
  },
  {
    id: "navalhas",
    name: "Navalhas e Lâminas",
    slug: "navalhas-laminas",
  },
  {
    id: "acessorios",
    name: "Acessórios Profissionais",
    slug: "acessorios-profissionais",
  },
];

export const products: Product[] = [
  {
    id: "pomada-alta-fixacao",
    name: "Pomada Alta Fixação Premium",
    category: "pomadas",
    description: "Fixação extra forte com acabamento natural. Ideal para cortes modernos e penteados elaborados.",
    image: images.products.pomade,
    featured: true,
  },
  {
    id: "pomada-efeito-molhado",
    name: "Pomada Efeito Molhado",
    category: "pomadas",
    description: "Brilho intenso e fixação média. Perfeita para estilos clássicos e modernos.",
    image: images.products.pomade,
    featured: true,
  },
  {
    id: "cera-modeladora",
    name: "Cera Modeladora Profissional",
    category: "pomadas",
    description: "Texturização e controle total. Acabamento maleável para retoques ao longo do dia.",
    image: images.products.pomade,
  },
  {
    id: "shampoo-barba-cabelo",
    name: "Shampoo 2 em 1 Barba e Cabelo",
    category: "shampoos",
    description: "Limpeza profunda com hidratação. Fórmula específica para barbas e cabelos masculinos.",
    image: images.products.shampoo,
    featured: true,
  },
  {
    id: "shampoo-anticaspa",
    name: "Shampoo Anticaspa Profissional",
    category: "shampoos",
    description: "Combate a caspa e oleosidade excessiva. Controle duradouro e couro cabeludo saudável.",
    image: images.products.shampoo,
  },
  {
    id: "condicionador-hidratante",
    name: "Condicionador Hidratante Intensivo",
    category: "shampoos",
    description: "Hidratação profunda e desembaraço facilitado. Cabelos mais fortes e saudáveis.",
    image: images.products.shampoo,
  },
  {
    id: "oleo-barba-premium",
    name: "Óleo para Barba Premium",
    category: "barba",
    description: "Hidratação e brilho natural. Fragrância masculina e acabamento sedoso.",
    image: images.products.beard,
    featured: true,
  },
  {
    id: "balm-barba",
    name: "Balm para Barba Modelador",
    category: "barba",
    description: "Hidratação + modelagem em um só produto. Controle de fios rebeldes e nutrição profunda.",
    image: images.products.beard,
  },
  {
    id: "oleo-barba-crescimento",
    name: "Óleo Estimulante de Crescimento",
    category: "barba",
    description: "Estimula o crescimento e fortalece os fios. Barba mais densa e saudável.",
    image: images.products.beard,
  },
  {
    id: "navalha-profissional",
    name: "Navalha Profissional Inox",
    category: "navalhas",
    description: "Aço inoxidável de alta qualidade. Precisão e durabilidade para barbeiros exigentes.",
    image: images.products.razor,
    featured: true,
  },
  {
    id: "laminas-descartaveis",
    name: "Lâminas Descartáveis Premium (100un)",
    category: "navalhas",
    description: "Corte suave e preciso. Esterilizadas e embaladas individualmente.",
    image: images.products.razor,
  },
  {
    id: "navalha-shavette",
    name: "Navalha Shavette Profissional",
    category: "navalhas",
    description: "Design clássico com praticidade moderna. Aceita lâminas descartáveis padrão.",
    image: images.products.razor,
  },
  {
    id: "tesoura-profissional",
    name: "Tesoura de Corte Profissional 6.5\"",
    category: "acessorios",
    description: "Aço japonês temperado. Corte preciso e confortável para longas jornadas.",
    image: images.products.scissors,
  },
  {
    id: "pente-carbono",
    name: "Pente de Carbono Antiestático",
    category: "acessorios",
    description: "Resistente ao calor e produtos químicos. Deslizamento suave e durabilidade superior.",
    image: images.products.accessories,
  },
  {
    id: "kit-pinceis",
    name: "Kit Pincéis para Barbear",
    category: "acessorios",
    description: "Cerdas naturais de alta qualidade. Espuma cremosa e aplicação perfeita.",
    image: images.products.accessories,
  },
  {
    id: "cape-corte",
    name: "Capa de Corte Profissional",
    category: "acessorios",
    description: "Tecido impermeável e respirável. Ajuste confortável para todos os clientes.",
    image: images.products.accessories,
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
