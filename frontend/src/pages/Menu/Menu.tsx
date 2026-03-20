import { useTranslation } from "react-i18next";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import type { MenuCategory } from "../../types/types";
import './Menu.scss';

const menuItems: MenuCategory[] = [
  {
    category: "CAFÉS DE ESPECIALIDAD",
    items: [
      { name: "Espresso ", description: "Sin descrip.", price: "1.80€", hasPhoto: true },
      { name: "Latte M / L", description: "Sin descrip.", price: "2€ / 2.50€" },
      { name: "Flat white", description: "Sin descrip.", price: "2.70€" },
      { name: "Batch brew", description: "Sin descrip.", price: "2.50€" },
      { name: "Cold brew", description: "Sin descrip.", price: "2.50€" },
      { name: "Mocca", description: "Sin descrip.", price: "2.50€" },
      { name: "Iced latte", description: "Sin descrip.", price: "3€" },
      { name: "Dirty chai", description: "Sin descrip.", price: "3€" },
      { name: "Hibisco latte", description: "Sin descrip.", price: "3€" },
      { name: "Coconut coffee", description: "Sin descrip.", price: "3.50€" },
      { name: "Cold brew cóctel", description: "Sin descrip.", price: "4.50€" },
      { name: "Leche de avena", description: "Sin descrip.", price: "+ 0.30€" },
      { name: "Extra shot de café", description: "Sin descrip.", price: "+ 0.50€" },
    ],
  },
  {
    category: "OTRAS BEBIDAS",
    items: [
      { name: "Pistacho latte ", description: "Sin descrip.", favourite: true, price: "4€", hasPhoto: true },
      { name: "Chai latte ", description: "Sin descrip.", price: "3€" },
      { name: "Matcha latte", description: "Sin descrip.", price: "3€" },
      { name: "Pink latte", description: "Sin descrip.", price: "3€" },
      { name: "Brutal cacao", description: "Sin descrip.", price: "2.50€" },
      { name: "Infusión ", description: "Sin descrip.", price: "1.80€" },
      { name: "Tés", description: "Sin descrip.", price: "1.80€" },
      { name: "Kombucha ", description: "Sin descrip.", price: "2.80€" },
      { name: "Limonada sin azúcar ECO", description: "Sin descrip.", price: "2.50€" },
      { name: "Zumo de naranja sin azúcar ", description: "Sin descrip.", price: "2€" },
      { name: "Agua ", description: "Sin descrip.", price: "1.20€" },
      { name: "Agua con gas", description: "Sin descrip.", price: "1.80€" },
      { name: "Iced", description: "Sin descrip.", price: "+ 0.50€" },
    ],
  },
  {
    category: "Tés e Infusiones",
    items: [
      { name: "Té Verde", description: "Antioxidante natural", price: "2.80€" },
      { name: "Té Negro", description: "Clásico y energizante", price: "2.80€" },
      { name: "Té Rojo", description: "Pu-erh digestivo", price: "3.00€" },
      { name: "Té Chai", description: "Especiado con leche", price: "3.50€" },
      { name: "Manzanilla", description: "Relajante natural", price: "2.50€" },
      { name: "Menta Poleo", description: "Refrescante y digestivo", price: "2.50€" },
      { name: "Infusión de Frutas", description: "Mezcla de frutas del bosque", price: "2.80€" },
    ],
  },
  {
    category: "Bebidas Especiales",
    items: [
      { name: "Chocolate Caliente", description: "Cremoso y reconfortante", price: "3.50€" },
      { name: "Chocolate Blanco", description: "Dulce y suave", price: "3.80€" },
      { name: "Matcha Latte", description: "Té verde japonés con leche", price: "4.50€" },
      { name: "Golden Milk", description: "Leche dorada con cúrcuma", price: "4.00€" },
      { name: "Chai Latte", description: "Especias con leche vaporizada", price: "4.20€" },
    ],
  },
  {
    category: "Repostería Dulce",
    items: [
      { name: "Croissant Mantequilla", description: "Recién horneado y crujiente", price: "2.20€" },
      { name: "Croissant Chocolate", description: "Relleno de chocolate belga", price: "2.50€" },
      { name: "Napolitana Chocolate", description: "Hojaldre con chocolate", price: "2.30€" },
      { name: "Palmera", description: "Hojaldre caramelizado", price: "2.00€" },
      { name: "Muffin Arándanos", description: "Esponjoso con arándanos frescos", price: "2.80€" },
      { name: "Muffin Chocolate", description: "Con chips de chocolate", price: "2.80€" },
      { name: "Brownie", description: "Intenso chocolate negro", price: "3.20€" },
      { name: "Cookie Chocolate", description: "Galleta artesanal con chips", price: "2.50€" },
      { name: "Carrot Cake", description: "Bizcocho de zanahoria con frosting", price: "4.00€" },
      { name: "Cheesecake", description: "Cremoso con base de galleta", price: "4.50€" },
      { name: "Tarta de Limón", description: "Refrescante y cremosa", price: "4.20€" },
      { name: "Tarta de Chocolate", description: "Tres capas de chocolate", price: "4.80€" },
    ],
  },
  {
    category: "Opciones Saladas",
    items: [
      { name: "Tostada Aguacate", description: "Pan integral con aguacate y semillas", price: "5.50€" },
      { name: "Tostada Salmón", description: "Salmón ahumado con queso crema", price: "6.50€" },
      { name: "Croissant Jamón y Queso", description: "Relleno caliente", price: "4.20€" },
      { name: "Sandwich Vegetal", description: "Pan integral con vegetales frescos", price: "5.00€" },
      { name: "Sandwich Pollo", description: "Pollo, lechuga y tomate", price: "5.80€" },
      { name: "Quiche Lorraine", description: "Tarta salada con bacon", price: "4.50€" },
      { name: "Quiche Verduras", description: "Tarta salada vegetariana", price: "4.50€" },
      { name: "Empanada", description: "Variedad del día", price: "3.50€" },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Shot Espresso Extra", description: "Añade intensidad", price: "0.50€" },
      { name: "Leche Vegetal", description: "Soja, avena o almendra", price: "0.50€" },
      { name: "Sirope", description: "Vainilla, caramelo o avellana", price: "0.60€" },
      { name: "Nata Montada", description: "Extra de cremosidad", price: "0.80€" },
    ],
  },
]

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.title")}</h1>
      <p>{t("menu.description")}</p>

      <div className="menu-grid">
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 0).map((item) => (
            <MenuCard key={item.category} category={item.category} items={item.items} />
          ))}
        </div>
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 1).map((item) => (
            <MenuCard key={item.category} category={item.category} items={item.items} />
          ))}
        </div>
        <div className="menu-col">
          {menuItems.filter((_, i) => i % 3 === 2).map((item) => (
            <MenuCard key={item.category} category={item.category} items={item.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
