import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

interface HeaderProps {
    title: string;
    classNames?: {
        header?: string;
        title?: string;
        navbar?: string;
        languageSelector?: string;
    };
}

const Header = ({ title, classNames = {} }: HeaderProps) => {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <div className={`header ${classNames.header ?? ""}`}>
            {/* Botón para la navbar en móvil */}
            <div className="mobile">
                <IconButton onClick={() => setOpenNavbar(true)}>
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
                slotProps={{ paper: { className: 'navbar-drawer-modal' } }}
            >
                <div className="mobile-drawer">
                    <Navbar
                        classNames={{
                            navbar: `header-navbar ${classNames.navbar ?? ""}`,
                        }}
                    />
                </div>
            </Drawer>

            <span className={`header-title ${classNames.title ?? ""}`}>{title}</span>

            {/* Navbar solo en desktop */}
            <div className="header-navbar desktop">
                <Navbar
                    classNames={{
                        navbar: `header-navbar ${classNames.navbar ?? ""}`,
                    }}
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

export default Header;
