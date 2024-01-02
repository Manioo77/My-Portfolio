import "./App.css";
import { AboutmeSection } from "./components/AboutmeSection";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutmeSection />
      <Projects />
    </>
  );
}

export default App;
