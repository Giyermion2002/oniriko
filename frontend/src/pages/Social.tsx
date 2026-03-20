import { useTranslation } from "react-i18next";

const Social = () => {

    const { t } = useTranslation();

    return (
        <div>
            <span>{t("social.title")}</span><br />
            <span>{t("social.description")}</span>
        </div>
    );
}

export default Social;