import { useState } from "react";
import { Box, Typography, IconButton, Collapse, Dialog } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTranslation } from "react-i18next";
import type { MenuItem } from "../../types/types";
import "./MenuCard.scss";

interface MenuCardProps {
  category: string;
  items: MenuItem[];
}

export const MenuCard = ({ category, items }: MenuCardProps) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(true);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleOpenPhoto = (itemName: string) => {
    // Pipeline de limpieza de strings: "Té Rojo " -> "te_rojo"
    const formattedName = itemName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // 1. Fuera tildes
      .toLowerCase() // 2. Fuera mayúsculas
      .trim() // Quita espacios iniciales y finales (ej: "Espresso ")
      .replace(/\s+/g, '_') // 3. Modifica huecos centrales por barrabajas
      .replace(/[^a-z0-9_]/g, ''); // Cortafuegos: elimina barras u otros símbolos no alfanuméricos

    // Le decimos a Vite que resuelva el JPG alojado en los assets locales
    const imageUrl = new URL(`../../assets/images/menu/${formattedName}.jpg`, import.meta.url).href;
    setImageError(false); // Reseteamos un potencial error previo
    setActivePhoto(imageUrl);
  };

  return (
    <Box className="menu-card">
      <Box className="menu-card-header-wrapper">
        <Typography variant="h5" className="menu-card-title">
          {category}
        </Typography>
        <IconButton
          className="menu-card-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle category"
        >
          {expanded ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </IconButton>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className="menu-card-content">
          {items.map((item) => (
            <Box key={item.name} className="menu-card-item">
              <Box className="menu-card-item-header">
                <Typography variant="subtitle1" className="menu-card-item-name">
                  {item.name}
                  {item.hasPhoto && (
                    <span
                      className="menu-card-item-camera"
                      title={t("menu.card.viewPhoto")}
                      onClick={() => handleOpenPhoto(item.name)}
                    >
                      <PhotoCameraIcon fontSize="inherit" />
                    </span>
                  )}
                  {item.favourite && (
                    <span className="menu-card-item-favourite" title={t("menu.card.recommended")}>
                      <StarIcon fontSize="inherit" />
                    </span>
                  )}
                </Typography>

                <Box className="menu-card-item-dots" />

                <Typography variant="subtitle1" className="menu-card-item-price">
                  {item.price}
                </Typography>
              </Box>

              <Typography variant="body2" className="menu-card-item-desc">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>

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
