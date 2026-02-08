# Central dos Barbeiros - Site Institucional

Site institucional moderno e conversivo para a Central dos Barbeiros, distribuidor especializado em produtos profissionais para barbearias na Região dos Lagos, RJ.

## 🎯 Características

- ✨ Design premium com paleta preto + dourado
- 📱 100% responsivo e otimizado para mobile
- ⚡ Performance otimizada com Next.js 14
- 🎭 Animações suaves com Framer Motion
- 🔍 SEO otimizado para busca local
- 💬 Integração direta com WhatsApp
- 🎨 Componentes UI modernos
- 🚀 Loading screen elegante
- 📦 Catálogo completo de produtos

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Imagens:** Next/Image com Unsplash

## 📂 Estrutura do Projeto

```
central-barbeiros/
├── app/
│   ├── produtos/          # Página de catálogo
│   ├── fox-for-men/       # Página Fox For Men
│   ├── area-atendimento/  # Página de cobertura
│   ├── sobre/             # Página institucional
│   ├── contato/           # Página de contato
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Home page
│   ├── globals.css        # Estilos globais
│   ├── sitemap.ts         # Sitemap SEO
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/                # Componentes UI base
│   │   ├── Button.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── ProductCard.tsx
│   └── sections/          # Seções da página
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── WhyUs.tsx
│       ├── HowItWorks.tsx
│       ├── FeaturedProducts.tsx
│       ├── FoxForMenSection.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── CTASection.tsx
├── lib/
│   ├── images.ts          # Biblioteca de imagens
│   ├── utils.ts           # Funções utilitárias
│   └── products.ts        # Dados de produtos
└── public/                # Arquivos estáticos

```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

```bash
npm run build
npm start
```

## 📄 Páginas Disponíveis

- **Home (/):** Página principal com todas as seções
- **/produtos:** Catálogo completo com filtros por categoria
- **/fox-for-men:** Página sobre representação Fox For Men
- **/area-atendimento:** Cidades atendidas e mapa
- **/sobre:** História e valores da empresa
- **/contato:** Formulário e informações de contato

## 🎨 Paleta de Cores

- **Preto Principal:** #0B0B0C
- **Preto Secundário:** #111113
- **Dourado:** #D4AF37
- **Acentos:** Variações de dourado e cinza

## 📞 Funcionalidades WhatsApp

O site possui templates pré-configurados de mensagens para:

- Pedido geral
- Pedido de produto específico
- Cadastro de barbearia
- Reposição rápida
- Solicitação de catálogo

## 🔍 SEO

O site inclui:

- Meta tags otimizadas
- Open Graph para redes sociais
- JSON-LD para Local Business
- Sitemap.xml automático
- Robots.txt configurado
- URLs amigáveis

## 📱 Responsividade

Breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🎭 Animações

Todas as seções incluem:

- Fade in ao scroll
- Animações de entrada
- Hover effects suaves
- Loading screen inicial

## 🚢 Deploy

Recomendado para deploy na Vercel:

1. Conecte seu repositório GitHub
2. A Vercel detecta automaticamente Next.js
3. Deploy automático em cada push

Ou manualmente:

```bash
npm run build
```

E faça upload da pasta `.next`, `public` e arquivos de configuração para seu servidor.

## 📝 Customização

### Alterar Informações da Empresa

Edite `/lib/utils.ts`:

```typescript
export const companyData = {
  name: "Central dos Barbeiros",
  phone: "+55 22 99818-8813",
  // ...
};
```

### Adicionar/Editar Produtos

Edite `/lib/products.ts`:

```typescript
export const products: Product[] = [
  // Adicione seus produtos aqui
];
```

### Trocar Imagens

Edite `/lib/images.ts` com novas URLs do Unsplash/Pexels.

## 🆘 Suporte

Para dúvidas sobre o código ou customizações, consulte a documentação:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 Licença

Desenvolvido para Central dos Barbeiros - Todos os direitos reservados.

---

**Central dos Barbeiros** - Distribuidor Premium para Barbearias | Região dos Lagos, RJ
