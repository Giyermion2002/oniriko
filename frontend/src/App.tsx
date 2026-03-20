import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import backgroundVideo from "./assets/videos/videoplayback.mp4";
import { Header } from "./components/Header/Header";
import type { AppPage } from "./types/types";
import { Footer } from "./components/Footer/Footer";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Menu = React.lazy(() => import("./pages/Menu/Menu"));
const Products = React.lazy(() => import("./pages/Products"));
const Social = React.lazy(() => import("./pages/Social"));

export const App = () => {

  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollArea = document.getElementById("main-scroll-area");
    if (scrollArea) {
      scrollArea.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Fallback de seguridad
    }
  }, [pathname]);

  const pages: AppPage[] = [
    {

      element: <Home />,
      navbarLink: {
        to: "/",
        label: t("header.navigation.home")
      }
    },
    {
      element: <Menu />,
      navbarLink: {
        to: "/menu",
        label: t("header.navigation.menu")
      },
    },
    {
      element: <Products />,
      navbarLink: {
        to: "/products",
        label: t("header.navigation.products")
      },
    },
    {
      element: <Social />,
      navbarLink: {
        to: "/social",
        label: t("header.navigation.social")
      },
    },
  ];

  return (
    <div className="app">
      <video className="app-background" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header
        title={t("header.title")}
        navbarLinks={pages.map(page => page.navbarLink)}
      />

      <div className="main-scroll-area" id="main-scroll-area">
        <div className={"app-container"}>
          <Routes>
            {pages.map((page, idx) => (
              <Route key={idx} path={page.navbarLink.to} element={page.element} />
            ))}
          </Routes>
        </div>
        <Footer links={pages.map(page => page.navbarLink)} />
      </div>
    </div>
  );
}