import { useState } from "react";
import { Box, Typography, Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { menuItems } from "../../data/menuData";
import { MenuHeader } from "./MenuHeader";
import './Menu.scss';

const Menu = () => {
  const { t } = useTranslation();
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleOpenPhoto = (itemName: string) => {
    // Pipeline de limpieza: "Té Rojo " -> "te_rojo"
    const formattedName = itemName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") 
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
      
    setActivePhoto(`/assets/images/menu/${formattedName}.jpg`);
    setImageError(false);
  };

  return (
    <Box className="menu-page">
      <MenuHeader />

      <div className="menu-grid">
        {[0, 1, 2].map((col) => (
          <div key={col} className="menu-col">
            {menuItems.filter((_, i) => i % 3 === col).map((item) => (
              <MenuCard
                key={item.name}
                name={item.name}
                price={item.price}
                description={item.description}
                items={item.items}
                onPhotoClick={() => handleOpenPhoto(item.name)}
              />
            ))}
          </div>
        ))}
      </div>

      <Dialog
        open={!!activePhoto}
        onClose={() => setActivePhoto(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          className: "menu-card-photo-modal-paper"
        }}
      >
        <Box className="menu-card-photo-modal" onClick={() => setActivePhoto(null)}>
          {activePhoto && !imageError && (
            <img
              src={activePhoto}
              alt={t("menu.card.photoAlt")}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          )}
          {activePhoto && imageError && (
            <Box className="menu-card-photo-error">
              <Typography variant="h6" className="error-title">
                {t("menu.card.errorTitle")}
              </Typography>
              <Typography variant="body2" className="error-desc">
                {t("menu.card.errorDesc")}
              </Typography>
            </Box>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Menu;
