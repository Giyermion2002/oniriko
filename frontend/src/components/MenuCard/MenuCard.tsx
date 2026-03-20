import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { MenuItem } from "../../types/types";
import "./MenuCard.scss";

interface MenuCardProps {
  category: string;
  items: MenuItem[];
}

export const MenuCard = ({ category, items }: MenuCardProps) => {
  return (
    <Card className="menu-card" variant="outlined">
      <CardHeader
        title={
          <Typography variant="h5" className="menu-card-title">
            {category}
          </Typography>
        }
        className="menu-card-header"
      />
      <CardContent className="menu-card-content">
        {items.map((item, index) => (
          <Box key={item.name}>
            <div className="menu-card-item">
              <div className="menu-card-item-info">
                <Typography variant="subtitle1" className="menu-card-item-name">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="menu-card-item-desc">
                  {item.description}
                </Typography>
              </div>
              <Typography variant="subtitle1" className="menu-card-item-price">
                {item.price}
              </Typography>
            </div>
            {index < items.length - 1 && <Divider className="menu-card-divider" />}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
