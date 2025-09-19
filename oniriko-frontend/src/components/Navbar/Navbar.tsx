import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Link as RouterLink, useLocation } from "react-router-dom";
import type { NavbarLink } from "../../types/types";
import './Navbar.scss';

interface NavbarProps {
  classNames?: {
    navbar?: string;
    link?: string;
  };
  links: NavbarLink[];
}

export const Navbar = ({ classNames = {}, links }: NavbarProps) => {
  const location = useLocation();

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
