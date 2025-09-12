import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Courses from "./pages/Courses";
import Social from "./pages/Social";
import Header from "./components/Header/Header";
import backgroundVideo from "./assets/videos/background.mp4";
import "./App.scss";

function App() {

  const { t } = useTranslation();

  return (
    <div className="app">
      <video className="app-background" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header title={t("header.title")} />
      <div className={"app-container"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/products" element={<Products />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
