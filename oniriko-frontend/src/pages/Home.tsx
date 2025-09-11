import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();

    return (
        <div>
            <span>{t("home.title")}</span><br />
            <span>{t("home.description")}</span>
        </div>
    );
}

export default Home;