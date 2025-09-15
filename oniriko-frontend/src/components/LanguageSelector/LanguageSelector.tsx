import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import EnglishFlag from "../../assets/images/EnglishFlag.svg";
import SpanishFlag from "../../assets/images/SpanishFlag.svg";
import './LanguageSelector.scss';

const languages = [
  { code: "es", label: "Español", flag: SpanishFlag },
  { code: "en", label: "English", flag: EnglishFlag },
];

interface LanguageSelectorProps {
  className?: string;
  compact?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className, compact }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as string);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      variant="outlined"
      size="small"
      className={`language-selector ${className ?? ""}`}
      MenuProps={{
        PaperProps: {
          className: 'language-selector-menu',
        }
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code} className="language-selector-item">
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

export default LanguageSelector;
