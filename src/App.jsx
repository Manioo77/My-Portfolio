import "./App.css";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { AboutMeSection } from "./components/AboutmeSection";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  pl: { nativeName: "PL" },
};

function App() {
  const [theme, setTheme] = useState("light");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header
        translation={(t, i18n)}
        handleChangeTheme={handleChangeTheme}
        theme={theme}
        lngs={lngs}
      />
      <MainSection />
      <AboutMeSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
