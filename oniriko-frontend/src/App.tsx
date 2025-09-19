import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import backgroundVideo from "./assets/videos/background.mp4";
import { Header } from "./components/Header/Header";
import type { AppPage } from "./types/types";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Products = React.lazy(() => import("./pages/Products"));
const Social = React.lazy(() => import("./pages/Social"));

export const App = () => {

  const { t } = useTranslation();

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
      <div className={"app-container"}>
        <Routes>
          {pages.map(page => (
            <Route path={page.navbarLink.to} element={page.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}