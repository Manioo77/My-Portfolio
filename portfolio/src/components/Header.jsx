import { useState } from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

export function Header() {
  const [mode, setMode] = useState(true);

  const handleChangeMode = () => {
    setMode((prevState) => !prevState);
  };

  return (
    <header
      className={`${
        mode ? "border-white bg-neutral-900" : "border-black bg-neutral-400"
      } fixed z-50 flex h-20 w-full items-center justify-center border-b-[1px] `}
    >
      <div className="flex w-full max-w-7xl items-center justify-between px-4">
        <nav>
          <ul className="flex flex-row items-center">
            <li className="mr-5">
              <a
                className={`${
                  mode ? "text-white" : "text-black"
                } uppercase  no-underline transition-colors hover:text-amber-200`}
                href="#home"
              >
                home
              </a>
            </li>
            <li className="mr-5">
              <a
                className={`${
                  mode ? "text-white" : "text-black"
                } uppercase  no-underline transition-colors hover:text-amber-200`}
                href="#about"
              >
                o mnie
              </a>
            </li>
            <li className="mr-5">
              <a
                className={`${
                  mode ? "text-white" : "text-black"
                } uppercase  no-underline transition-colors hover:text-amber-200`}
                href="#projects"
              >
                projekty
              </a>
            </li>
            <li className="mr-5">
              <a
                className={`${
                  mode ? "text-white" : "text-black"
                } uppercase  no-underline transition-colors hover:text-amber-200`}
                href="#contact"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <img className="w-12" src={logo} alt="logo od portfolio" />
        </div>
        <div>
          <ul className="flex ">
            <li className="mr-5 w-full max-w-6">
              <a
                href="https://github.com/Manioo77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full"
                  src={github}
                  alt="github od marek mańka"
                />
              </a>
            </li>
            <li className=" mr-5 w-full max-w-6">
              <a
                href="https://www.linkedin.com/in/marek-manka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full"
                  src={linkedin}
                  alt="linkedin od marek mańka"
                />
              </a>
            </li>
            <li className=" mr-5 w-full max-w-6">
              <a
                href="https://www.facebook.com/marek.manka.9?locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full"
                  src={facebook}
                  alt="facebook od marek mańka"
                />
              </a>
            </li>
            <li className="mr-5 w-full max-w-6" onClick={handleChangeMode}>
              {mode ? (
                <img className="w-full cursor-pointer" src={sun} alt="sun" />
              ) : (
                <img className="w-full cursor-pointer" src={moon} alt="moon" />
              )}
            </li>
            <li
              className={`w-full max-w-6 cursor-pointer ${
                mode ? "text-white" : "text-black"
              } `}
            >
              PL
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
