import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import type { MenuCategory } from "../../types/types";
import './Menu.scss';

const menuItems: MenuCategory[] = [
  {
    name: "CAFÉS DE ESPECIALIDAD",
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
      { name: "Leche de avena", description: "", price: "+ 0.30€" },
      { name: "Extra shot de café", description: "", price: "+ 0.50€" },
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
      { name: "Voghera", description: "(Burrata, mortadela, aceite de oliva virgen infusionado con albahaca y pistachos)", price: "6.50€", favourite: true },
      { name: "El zoñar", description: "(Tomate, aceite de oliva virgen y jamón ibérico)", price: "6.50€" },
      { name: "Zakopane (VG)", description: "(Mantequilla de pasto y mermelada de frutos del bosque)", price: "3.50€" },
      { name: "Avellana dukkah (VG)", description: "(Crema de avellanas, miel cruda asturiana y dukkah)", price: "6.50€", favourite: true },
      { name: "Avocado (VG)", description: "(Aguacate, queso feta, tomate seco y aceite de oliva virgen)", price: "6.50€" },
      { name: "Bulnes (VG)", description: "(Queso ricotta, miel, compota de manzana y nueces)", price: "6.00€" },
      { name: "PB jelly (VE)", description: "(Crema de cacahuete y mermelada de fresa)", price: "4.00€" },
      { name: "Sandwich de queso al grill (VG)", description: "(Queso gouda y emmental en pan de masa madre)", price: "5.00€" },
      { name: "Tostada del mes", description: "Pregunta a nuestro personal por la tostada del mes", price: "7.50€" },
      { name: "Opción pan sin gluten", description: "Sustitución en tostadas por pan de trigo sarraceno ECO", price: "+ 1.00€" },
    ],
  },
  {
    name: "BOWLS",
    items: [
      { name: "Açai bowl (VE, GF, SA)", description: "(Banana, açai, frutos del bosque, granola keto sin gluten, crema de almendra, frutas de temporada)", price: "8.00€" },
      { name: "Oníriko cacao bowl (VE, GF, SA)", description: "(Banana, leche de coco, cacao puro, peanut butter, almendras, nibs de cacao, granola keto sin gluten)", price: "8.00€" },
      { name: "Yogurt bowl (VG, GF, SA)", description: "(Yogurt, frutos de temporada, granola keto sin gluten, peanut butter)", price: "5.50€" },
    ],
  },
  {
    name: "BRUNCH",
    price: "16.00€",
    items: [
      { name: "Café a elegir", description: "(Otras bebidas a elegir con suplemento)", price: "" },
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
      { name: "Roiboos, ciruela y canela", description: "(Notas frutales y dulces)" },
      { name: "Anochecer", description: "(Naranja, manzana, hierbaluisa, ajedrea y valeriana. Notas cítricas y dulces, relajante)" },
      { name: "Frutos rojos", description: "(Ligeramente ácida y dulce)" },
    ],
  },
  {
    name: "TÉS",
    price: "1.80€",
    items: [
      { name: "Marrakech", description: "(Té verde y hierbabuena)" },
      { name: "Ruanda", description: "(Té negro ecológico)" },
      { name: "Funky monkey", description: "(Té rojo, papaya, saflor y plátano)" },
      { name: "Una tarde en Bangkok", description: "(Té verde jazmín, pétalos de rosa y miel)" },
    ],
  },
];

const Menu = () => {
  const { t } = useTranslation();

  return (
    <Box className="menu-page">
      <header className="menu-header">
        <Typography variant="h2" className="menu-title">
          {t("menu.title")}
        </Typography>
        <Typography variant="h6" className="menu-subtitle">
          {t("menu.subtitle")}
        </Typography>

        <Box className="menu-info-container">
          <Box className="menu-legend">
            <span className="legend-item"><strong>(VE)</strong> {t("menu.legend.ve")}</span>
            <span className="legend-item"><strong>(VG)</strong> {t("menu.legend.vg")}</span>
            <span className="legend-item"><strong>(GF)</strong> {t("menu.legend.gf")}</span>
            <span className="legend-item"><strong>(SA)</strong> {t("menu.legend.sa")}</span>
          </Box>
          <Typography variant="body2" className="menu-notice">
            {t("menu.notice")}
          </Typography>
        </Box>
      </header>

      <div className="menu-grid">
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 0).map((item) => (
            <MenuCard key={item.name} name={item.name} price={item.price} description={item.description} items={item.items} />
          ))}
        </div>
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 1).map((item) => (
            <MenuCard key={item.name} name={item.name} price={item.price} description={item.description} items={item.items} />
          ))}
        </div>
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 2).map((item) => (
            <MenuCard key={item.name} name={item.name} price={item.price} description={item.description} items={item.items} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Menu;
