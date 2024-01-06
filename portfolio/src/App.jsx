import "./App.css";
import { AboutmeSection } from "./components/AboutmeSection";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";

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
      <AboutmeSection />
      <Projects />
      <Contact />
      <div className="flex items-center justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
        <p className="m-3 ">© Copyright Marek Mańka 2024</p>
      </div>
    </>
  );
}

export default App;
