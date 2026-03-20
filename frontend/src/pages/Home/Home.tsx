import { Trans } from "react-i18next";
import Image1 from "../../assets/images/home/image1.png";
import Image2 from "../../assets/images/home/image2.png";
import Image3 from "../../assets/images/home/image3.png";
import "./Home.scss";

const Home = () => {

  const t = (i18nKey: string) => {
    return <Trans i18nKey={i18nKey} components={{ b: <b /> }} />
  }

  return (
    <div className="home-page">
      <div className="first-paragraph">
        <span className="text-1">{t('home.first-paragraph.text-1')}</span>
        <span className="text-2">{t('home.first-paragraph.text-2')}</span>
        <span className="text-3">{t('home.first-paragraph.text-3')}</span>
      </div>

      <div className="second-paragraph">
        <img className="image" src={Image1} />
        <div className="text">
          <div>
            <span>{t("home.second-paragraph.text-1")}</span>
            <br />
            <br />
            <span>{t("home.second-paragraph.text-2")}</span>
            <br />
            <br />
            <span>{t("home.second-paragraph.text-3")}</span>
          </div>
          <div>
            <span>{t("home.second-paragraph.text-4")}</span>
            <br />
            <span>{t("home.second-paragraph.text-5")}</span>
          </div>
          <div>
            <span>{t("home.second-paragraph.text-6")}</span>
          </div>
        </div>
      </div>

      <div className="third-paragraph">
        <div className="text">
          <span>{t("home.third-paragraph.text-1")}</span>
          <span>{t("home.third-paragraph.text-2")}</span>
          <span>{t("home.third-paragraph.text-3")}</span>
        </div>
        <img className="image" src={Image2} />
      </div>

      <div className="fourth-paragraph">
        <img className="image" src={Image3} />
        <div className="text">
          <div>
            <span>{t("home.fourth-paragraph.text-1")}</span>
          </div>
          <div>
            <span>{t("home.fourth-paragraph.text-2")}</span>
          </div>
          <div className="final-text">
            <span>{t("home.fourth-paragraph.text-3")}</span>
            <span className="large">{t("home.fourth-paragraph.text-4")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;