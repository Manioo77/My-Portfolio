import "./App.css";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";

function App() {
  return (
    <>
      <Header />
      <main className="flex w-full justify-center">
        <MainSection />
      </main>
    </>
  );
}

export default App;
