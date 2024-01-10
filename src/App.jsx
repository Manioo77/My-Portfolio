import "./App.css";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { AboutMeSection } from "./components/AboutmeSection";

function App() {
  const [theme, setTheme] = useState("light");

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
      <Header handleChangeTheme={handleChangeTheme} theme={theme} />
      <MainSection />
      <AboutMeSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
