import type { MenuCategory, AllergenTag } from "../types/types";

export const ALLERGEN_TAGS: AllergenTag[] = ['VE', 'VG', 'GF', 'SA'];

export const menuItems: MenuCategory[] = [
  {
    name: "CAFÉS DE ESPECIALIDAD",
    description: "Leche de avena +0.30€\nExtra shot de café +0.50€",
    items: [
      { name: "Espresso", description: "", price: "1.80€", hasPhoto: true },
      { name: "Latte M / L", description: "", price: "2.00€ / 2.50€" },
      { name: "Flat white", description: "", price: "2.70€" },
      { name: "Batch brew", description: "", price: "2.50€" },
      { name: "Cold brew", description: "", price: "2.50€" },
      { name: "Mocca", description: "", price: "2.50€" },
      { name: "Iced latte", description: "", price: "3.00€" },
      { name: "Dirty chai", description: "", price: "3.00€" },
      { name: "Hibisco latte", description: "", price: "3.00€" },
      { name: "Coconut coffee", description: "", price: "3.50€" },
      { name: "Cold brew cóctel", description: "", price: "4.50€" },
    ],
  },
  {
    name: "OTRAS BEBIDAS",
    items: [
      { name: "Pistacho latte", description: "", favourite: true, price: "4.00€", hasPhoto: true },
      { name: "Chai latte", description: "", price: "3.00€" },
      { name: "Matcha latte", description: "", price: "3.00€" },
      { name: "Pink latte", description: "", price: "3.00€" },
      { name: "Brutal cacao", description: "", price: "2.50€" },
      { name: "Infusión", description: "Ver carta de infusiones", price: "1.80€" },
      { name: "Tés", description: "Ver carta de tés", price: "1.80€" },
      { name: "Kombucha", description: "", price: "2.80€" },
      { name: "Limonada sin azúcar ECO", description: "", price: "2.50€" },
      { name: "Zumo de naranja sin azúcar", description: "", price: "2.00€" },
      { name: "Agua", description: "", price: "1.20€" },
      { name: "Agua con gas", description: "", price: "1.80€" },
      { name: "Iced", description: "", price: "+ 0.50€" },
    ],
  },
  {
    name: "TOSTADAS",
    description: "Todas las tostadas son de masa madre.\nOpción sin gluten: pan de trigo sarraceno ECO (+1€).",
    items: [
      { name: "Voghera", description: "Burrata, mortadela, aceite de oliva virgen infusionado con albahaca y pistachos", price: "6.50€", favourite: true },
      { name: "El zoñar", description: "Tomate, aceite de oliva virgen y jamón ibérico", price: "6.50€" },
      { name: "Zakopane", allergens: ["VG"], description: "Mantequilla de pasto y mermelada de frutos del bosque", price: "3.50€" },
      { name: "Avellana dukkah", allergens: ["VG"], description: "Crema de avellanas, miel cruda asturiana y dukkah", price: "6.50€", favourite: true },
      { name: "Avocado", allergens: ["VG"], description: "Aguacate, queso feta, tomate seco y aceite de oliva virgen", price: "6.50€" },
      { name: "Bulnes", allergens: ["VG"], description: "Queso ricotta, miel, compota de manzana y nueces", price: "6.00€" },
      { name: "PB jelly", allergens: ["VE"], description: "Crema de cacahuete y mermelada de fresa", price: "4.00€" },
      { name: "Sandwich de queso al grill", allergens: ["VG"], description: "Queso gouda y emmental en pan de masa madre", price: "5.00€" },
      { name: "Tostada del mes", description: "Pregunta a nuestro personal por la tostada del mes", price: "7.50€" },
      { name: "Opción pan sin gluten", description: "Sustitución en tostadas por pan de trigo sarraceno ECO", price: "+ 1.00€" },
    ],
  },
  {
    name: "BOWLS",
    items: [
      { name: "Açai bowl", allergens: ["VE", "GF", "SA"], description: "Banana, açai, frutos del bosque, granola keto sin gluten, crema de almendra, frutas de temporada", price: "8.00€" },
      { name: "Oníriko cacao bowl", allergens: ["VE", "GF", "SA"], description: "Banana, leche de coco, cacao puro, peanut butter, almendras, nibs de cacao, granola keto sin gluten", price: "8.00€" },
      { name: "Yogurt bowl", allergens: ["VG", "GF", "SA"], description: "Yogurt, frutos de temporada, granola keto sin gluten, peanut butter", price: "5.50€" },
    ],
  },
  {
    name: "BRUNCH",
    price: "16.00€",
    items: [
      { name: "Café a elegir", description: "Otras bebidas a elegir con suplemento", price: "" },
      { name: "Zumo de naranja", description: "", price: "" },
      { name: "Tostadas a elegir", description: "Ver carta de tostadas", price: "" },
      { name: "Bowl a elegir", description: "Ver carta de bowls", price: "" },
    ],
  },
  {
    name: "BAKERY",
    description: "Te invitamos a ver en vitrina nuestras diferentes opciones según el día.\nTenemos opciones sin gluten.",
    items: [],
  },
  {
    name: "INFUSIONES",
    price: "1.80€",
    items: [
      { name: "Roiboos, ciruela y canela", description: "Notas frutales y dulces" },
      { name: "Anochecer", description: "Naranja, manzana, hierbaluisa, ajedrea y valeriana. Notas cítricas y dulces, relajante" },
      { name: "Frutos rojos", description: "Ligeramente ácida y dulce" },
    ],
  },
  {
    name: "TÉS",
    price: "1.80€",
    items: [
      { name: "Marrakech", description: "Té verde y hierbabuena" },
      { name: "Ruanda", description: "Té negro ecológico" },
      { name: "Funky monkey", description: "Té rojo, papaya, saflor y plátano" },
      { name: "Una tarde en Bangkok", description: "Té verde jazmín, pétalos de rosa y miel" },
    ],
  },
];
