import React from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, type SelectChangeEvent } from "@mui/material";
import SpanishFlag from "../../assets/SpanishFlag.svg";
import EnglishFlag from "../../assets/EnglishFlag.svg";
import './LanguageSelector.scss';

const languages = [
  { code: "es", label: "Español", flag: SpanishFlag },
  { code: "en", label: "English", flag: EnglishFlag },
];

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as string); // 👈 aquí lo castea a string
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      variant="outlined"
      size="small"
      className={`language-selector ${className ?? ""}`}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code} className="language-selector-item">
          <img
            className="language-selector-flag"
            src={lang.flag}
            alt={lang.label}
          />
          {lang.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
