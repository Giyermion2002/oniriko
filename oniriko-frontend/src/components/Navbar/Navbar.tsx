import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useLocation } from "react-router-dom";
import './Navbar.scss';

interface NavbarProps {
  classNames?: {
    navbar?: string;
    link?: string;
  };
}

export default function Navbar({ classNames = {} }: NavbarProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { to: "/", label: t("header.navigation.home") },
    { to: "/menu", label: t("header.navigation.menu") },
    { to: "/products", label: t("header.navigation.products") },
    { to: "/courses", label: t("header.navigation.courses") },
    { to: "/social", label: t("header.navigation.social") },
  ];

  return (
    <Stack className={`navbar ${classNames.navbar ?? ''}`}>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          component={RouterLink}
          to={to}
          underline="none"
          className={`nav-link ${classNames.link ?? ''} ${location.pathname === to ? "active" : "not-active"}`}
        >
          {label}
        </Link>
      ))}
    </Stack>
  );
}
