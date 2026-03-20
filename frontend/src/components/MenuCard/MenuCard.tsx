import { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import type { MenuItem } from "../../types/types";
import "./MenuCard.scss";

interface MenuCardProps {
  category: string;
  items: MenuItem[];
}

export const MenuCard = ({ category, items }: MenuCardProps) => {
  const [expanded, setExpanded] = useState(true);

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
    </Box>
  );
};
