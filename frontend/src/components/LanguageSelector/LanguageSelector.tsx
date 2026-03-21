import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";
import EnglishFlag from "../../assets/images/flags/EnglishFlag.svg";
import SpanishFlag from "../../assets/images/flags/SpanishFlag.svg";
import NorwegianFlag from "../../assets/images/flags/NorwegianFlag.svg";
import FrenchFlag from "../../assets/images/flags/FrenchFlag.svg";
import GermanFlag from "../../assets/images/flags/GermanFlag.svg";
import ItalianFlag from "../../assets/images/flags/ItalianFlag.svg";
import PortugueseFlag from "../../assets/images/flags/PortugueseFlag.svg";
import './LanguageSelector.scss';

const languages = [
  { code: "es", label: "Español", flag: SpanishFlag },
  { code: "en", label: "English", flag: EnglishFlag },
  { code: "no", label: "Norsk", flag: NorwegianFlag },
  { code: "fr", label: "Français", flag: FrenchFlag },
  { code: "de", label: "Deutsch", flag: GermanFlag },
  { code: "it", label: "Italiano", flag: ItalianFlag },
  { code: "pt", label: "Português", flag: PortugueseFlag },
].sort((a, b) => a.label.localeCompare(b.label));

interface LanguageSelectorProps {
  className?: string;
  compact?: boolean;
}

export const LanguageSelector = ({ className = "", compact }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as string);
  };

  return (
    <Select
      value={i18n.resolvedLanguage ?? 'es'}
      onChange={handleChange}
      renderValue={(selected) => {
        const lang = languages.find((l) => l.code === selected);
        if (!lang) return null;
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="language-selector-item-flag"
              src={lang.flag}
              alt={lang.label}
            />
            {!compact && <span className="language-selector-item-label">{lang.label}</span>}
          </div>
        );
      }}
      variant="outlined"
      size="small"
      className={`language-selector ${className ?? ""} ${compact ? 'compact' : ''}`}
      MenuProps={{
        PaperProps: {
          className: 'language-selector-menu',
        }
      }}
    >
      {languages.map((lang) => (
        <MenuItem
          key={lang.code}
          value={lang.code}
          className={`language-selector-item ${compact ? 'compact-item' : ''}`}
        >
          <img
            className="language-selector-item-flag"
            src={lang.flag}
            alt={lang.label}
          />
          {!compact && <span className="language-selector-item-label">{lang.label}</span>}
        </MenuItem>
      ))}
    </Select>
  );
};