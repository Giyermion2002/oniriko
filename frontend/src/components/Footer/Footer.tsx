import Link from "@mui/material/Link";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import type { NavbarLink } from "../../types/types";
import './Footer.scss';
import { useTranslation } from "react-i18next";


interface FooterProps {
  links: NavbarLink[]
}

export const Footer = ({ links }: FooterProps) => {

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="main-footer">
        <section className="footer-principal">
          <div className="title">{t('footer.principal.title')}</div>
          <div className="content">
            <div className="description">{t('footer.principal.description')}</div>
            <div className="logos">
              <Link className="icon" href="http://instagram.com/onirikocoffee" underline="none" target="_blank" rel="noopener noreferrer"><Instagram /></Link>
              <Link className="icon" href="http://twitter.com/onirikocoffee" underline="none" target="_blank" rel="noopener noreferrer"><Twitter /></Link>
              <Link className="icon" href="http://facebook.com/onirikocoffee" underline="none" target="_blank" rel="noopener noreferrer"><Facebook /></Link>
            </div>
          </div>
        </section>
        <section className="footer-contact">
          <div className="title">{t('footer.contact.title')}</div>
          <div className="content">
            <div className="content-container site">
              <MapPin className="logo" />
              <Link
                className="content"
                href="https://maps.app.goo.gl/3C75xGZV9PLVTCRy6"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Calle Alfonso VII 3</div>
                <div>Avilés, Asturias</div>
              </Link>
            </div>
            <div className="content-container phone">
              <Phone className="logo" />
              <Link className="content" href="tel:+34 684 634 272" underline="none">+34 684 634 272</Link>
            </div>
            <div className="content-container mail">
              <Mail className="logo" />
              <Link className="content" href="mailto:onirikocoffee@gmail.com" underline="none">onirikocoffee@gmail.com</Link>
            </div>
          </div>
        </section>
        <section className="footer-hours">
          <div className="title">{t('footer.hours.title')}</div>
          <div className="content-container">
            <Clock className="logo" />
            <div className="content">
              <div>{`${t('footer.hours.hours.1')}: 9:00 - 14:00`}</div>
              <div>{`${t('footer.hours.hours.2')}: 9:00 - 14:00 / 17:00 - 20:00`}</div>
              <div>{`${t('footer.hours.hours.3')}: 10:00 - 14:00`}</div>
            </div>
          </div>
        </section>
        <section className="footer-links">
          <div className="title">{t('footer.links.title')}</div>
          <div className="content">
            {links.map(link => (
              <Link
                className="links"
                key={link.to}
                to={link.to}
                underline="none"
                component={RouterLink}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="copyright-footer">
        {`© ${new Date().getFullYear()} ${t('footer.copyright')}`}
      </div>
    </footer>
  );
}