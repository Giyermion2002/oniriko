import { useTranslation } from "react-i18next";

const Courses = () => {

    const { t } = useTranslation();

    return (
        <div>
            <span>{t("courses.title")}</span><br />
            <span>{t("courses.description")}</span>
        </div>
    );
}

export default Courses;