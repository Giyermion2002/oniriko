import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "./WIP.scss";

interface WIPProps {
  titleKey: string;
}

export const WIP = ({ titleKey }: WIPProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box className="wip-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="wip-card"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }}
          className="wip-icon-wrapper"
        >
          <CoffeeIcon className="wip-icon" />
        </motion.div>

        <Typography variant="h2" className="wip-title">
          {t(titleKey)}
        </Typography>

        <Typography variant="h5" className="wip-subtitle">
          {t("wip.comming_soon")}
        </Typography>

        <Typography variant="body1" className="wip-description">
          {t("wip.description")}
        </Typography>

        <Button 
          variant="outlined" 
          className="wip-button"
          onClick={() => navigate("/")}
        >
          {t("wip.back_home")}
        </Button>
      </motion.div>
    </Box>
  );
};
