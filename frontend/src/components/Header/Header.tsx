import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavbarLink } from "../../types/types";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { Navbar } from "../Navbar/Navbar";
import "./Header.scss";

interface HeaderProps {
  title: string;
  classNames?: {
    header?: string;
    title?: string;
    navbar?: string;
    languageSelector?: string;
  };
  navbarLinks: NavbarLink[];
}

export const Header = ({ title, classNames = {}, navbarLinks }: HeaderProps) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div className={`header ${classNames.header ?? ""}`}>
      {/* Botón para la navbar en móvil */}
      <div className="mobile">
        <IconButton onClick={() => setOpenNavbar(true)} color="inherit">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Drawer con el navbar en móvil */}
      <Drawer
        className={"navbar-drawer"}
        anchor="left"
        open={openNavbar}
        onClose={() => setOpenNavbar(false)}
        onClick={() => setOpenNavbar(false)}
        slotProps={{
          paper: {
            className: 'navbar-drawer-modal',
            sx: { width: '85%', maxWidth: '350px' } // No longer full screen
          },
          backdrop: {
            sx: { 
              backdropFilter: 'blur(4px)', 
              backgroundColor: 'rgba(0, 0, 0, 0.4)' 
            }
          }
        }}
      >
        <Box className="mobile-drawer">
          <Box className="drawer-header">
            <Typography variant="h5" className="drawer-brand">
              ONÍRIKO
            </Typography>
            <IconButton onClick={() => setOpenNavbar(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          <AnimatePresence>
            {openNavbar && (
              <Box className="drawer-content">
                {navbarLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  >
                    <Navbar
                      links={[link]}
                      classNames={{
                        navbar: "drawer-nav-item",
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            )}
          </AnimatePresence>

          <Box className="drawer-footer">
            <Box className="social-icons">
              <IconButton color="inherit"><InstagramIcon /></IconButton>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
              <IconButton color="inherit"><YouTubeIcon /></IconButton>
            </Box>
            <Typography variant="caption" className="drawer-note">
              Specialty Coffee
            </Typography>
          </Box>
        </Box>
      </Drawer>
      <span className={`header-title ${classNames.title ?? ""}`}>{title}</span>
      {/* Navbar solo en desktop */}
      <div className="header-navbar desktop">
        <Navbar
          classNames={{
            navbar: `header-navbar ${classNames.navbar ?? ""}`,
          }}
          links={navbarLinks}
        />
      </div>
      {/* Selector de idioma en desktop */}
      <LanguageSelector
        className={`header-language-selector desktop ${classNames.languageSelector ?? ""}`}
      />
      {/* Selector de idioma en móvil */}
      <LanguageSelector className="header-language-selector mobile" compact />
    </div>
  );
};