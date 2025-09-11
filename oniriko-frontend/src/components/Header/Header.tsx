import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Navbar from "../Navbar/Navbar";
import './Header.scss';

interface HeaderProps {
    title: string;
    classNames?: {
        header?: string;
        title?: string;
        navbar?: string;
        languageSelector?: string;
    }
}

const Header = ({ title, classNames = {} }: HeaderProps) => {

    const { t } = useTranslation();

    return (
        <div className={`header ${classNames.header ?? ''}`}>
            <p className={`header-title ${classNames.title ?? ''}`}>{title}</p>
            <Navbar classNames={{ navbar: `header-navbar ${classNames.navbar ?? ''}` }} />
            <LanguageSelector className={`header-language-selector ${classNames.languageSelector ?? ''}`} />
        </div>
    );
};

export default Header;
