import { useTranslation } from "react-i18next";

const Menu = () => {

    const { t } = useTranslation();

    return (
        <div>
            <span>{t("menu.title")}</span><br />
            <span>{t("menu.description")}</span>
        </div>
    );
}

export default Menu;