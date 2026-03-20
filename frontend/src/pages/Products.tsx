import { useTranslation } from "react-i18next";

const Products = () => {

    const { t } = useTranslation();

    return (
        <div>
            <span>{t("products.title")}</span><br />
            <span>{t("products.description")}</span>
        </div>
    );
}

export default Products;