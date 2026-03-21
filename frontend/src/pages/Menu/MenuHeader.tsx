import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { AllergenTag } from "../../types/types";
import { ALLERGEN_TAGS } from "../../data/menuData";

export const MenuHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="menu-header">
      <Typography variant="h2" className="menu-title">
        {t("menu.title")}
      </Typography>
      <Typography variant="h6" className="menu-subtitle">
        {t("menu.subtitle")}
      </Typography>

      <Box className="menu-info-container">
        <Box className="menu-legend">
          {ALLERGEN_TAGS.map((tag: AllergenTag) => (
            <span key={tag} className="legend-item">
              <strong>({tag})</strong> {t(`menu.legend.${tag}`)}
            </span>
          ))}
        </Box>
        <Typography variant="body2" className="menu-notice">
          {t("menu.notice")}
        </Typography>
      </Box>
    </header>
  );
};
