import { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTranslation } from "react-i18next";
import type { MenuItem } from "../../types/types";
import "./MenuCard.scss";

interface MenuCardProps {
  name: string;
  price?: string;
  description?: string;
  items: MenuItem[];
  onPhotoClick: (itemName: string) => void;
}

export const MenuCard = ({ name, price, description, items, onPhotoClick }: MenuCardProps) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(true);

  return (
    <Box className="menu-card">
      <Box className="menu-card-header-wrapper">
        <Box className="menu-card-title-container">
          <Typography variant="h5" className="menu-card-title">
            {name}
          </Typography>
          {price && (
            <Typography variant="h5" className="menu-card-category-price">
              {price}
            </Typography>
          )}
        </Box>
        {items.length > 0 && (
          <IconButton
            className="menu-card-expand-btn"
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle category"
          >
            {expanded ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
          </IconButton>
        )}
      </Box>
      {description && (
        <Typography variant="body2" className="menu-card-category-desc">
          {description}
        </Typography>
      )}

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
                      onClick={() => onPhotoClick(item.name)}
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

                {item.price && (
                  <>
                    <Box className="menu-card-item-dots" />
                    <Typography variant="subtitle1" className="menu-card-item-price">
                      {item.price}
                    </Typography>
                  </>
                )}
              </Box>

              {item.allergens && item.allergens.length > 0 && (
                <Box className="menu-card-item-allergens">
                  {item.allergens.map((tag) => (
                    <span key={tag} className="menu-card-item-allergen">
                      ({tag})
                    </span>
                  ))}
                </Box>
              )}

              {item.description && (
                <Typography variant="body2" className="menu-card-item-desc">
                  {item.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
