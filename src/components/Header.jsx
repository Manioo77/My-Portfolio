import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
import moonDark from "../assets/moonDark.png";
import sunDark from "../assets/sunDark.png";
import sun from "../assets/sun.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import { useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton";

export function Header({ handleChangeTheme, theme }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="w-screen">
        <header className="fixed z-30 flex h-20 w-full items-center justify-end bg-neutral-200 shadow-md  sm:justify-center dark:bg-neutral-900 dark:shadow-white">
          <div className="z-50 me-4 flex sm:hidden">
            <img className="w-12" src={logo} alt="logo od portfolio" />
          </div>
          <MobileMenuButton
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />

          <div
            className={`fixed  top-0 z-40 h-full w-2/4 bg-neutral-900 transition-all sm:hidden dark:bg-neutral-200 
            ${mobileMenu === false ? "-right-1/2" : "right-0"} 	`}
          >
            <nav className="flex h-full flex-col items-center justify-center">
              <ul className="flex flex-col items-center justify-center text-sm font-bold lg:text-base">
                <li className="mb-3">
                  <a
                    className="text-2xl uppercase text-neutral-200 no-underline transition-colors hover:text-emerald-900 dark:text-neutral-900"
                    href="#home"
                  >
                    home
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="text-2xl uppercase text-neutral-200 no-underline transition-colors hover:text-emerald-900 dark:text-neutral-900"
                    href="#about"
                  >
                    o mnie
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="text-2xl uppercase text-neutral-200  no-underline transition-colors hover:text-emerald-900 dark:text-neutral-900"
                    href="#projects"
                  >
                    projekty
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="text-2xl uppercase text-neutral-200  no-underline transition-colors hover:text-emerald-900 dark:text-neutral-900"
                    href="#contact"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>

              <div>
                <ul className="flex flex-wrap justify-center pt-3">
                  <li className="m-3 mx-5 w-full max-w-7">
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
                  <li className=" m-3 mx-5 w-full max-w-7">
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
                  <li className=" m-3 mx-5 w-full max-w-7">
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
                  <li
                    onClick={handleChangeTheme}
                    className="m-3 mx-5 w-full max-w-7 cursor-pointer"
                  >
                    {theme === "dark" ? (
                      <img
                        className="w-full cursor-pointer"
                        src={sunDark}
                        alt="sun"
                      />
                    ) : (
                      <img
                        className="w-full cursor-pointer"
                        src={moonDark}
                        alt="moon"
                      />
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className=" hidden w-9/12 max-w-7xl items-center justify-between sm:flex 2xl:w-full">
            <nav>
              <ul className="flex flex-row items-center text-sm  font-bold lg:text-base">
                <li className="mr-5 ">
                  <a
                    className="uppercase text-black no-underline transition-colors hover:text-emerald-900 dark:text-white"
                    href="#home"
                  >
                    home
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    className="uppercase text-black no-underline transition-colors hover:text-emerald-900 dark:text-white"
                    href="#about"
                  >
                    o mnie
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    className="uppercase text-black  no-underline transition-colors hover:text-emerald-900 dark:text-white"
                    href="#projects"
                  >
                    projekty
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    className="uppercase text-black  no-underline transition-colors hover:text-emerald-900 dark:text-white"
                    href="#contact"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
            <div className="hidden lg:flex">
              <img className="w-12" src={logo} alt="logo od portfolio" />
            </div>
            <div>
              <ul className="flex ">
                <li className="mr-5 w-full max-w-5 lg:max-w-6">
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
                <li className=" mr-5 w-full max-w-5 lg:max-w-6">
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
                <li className=" mr-5 w-full max-w-5 lg:max-w-6">
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
                <li
                  onClick={handleChangeTheme}
                  className={`w-full max-w-5 cursor-pointer lg:max-w-6`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-full cursor-pointer"
                      src={sun}
                      alt="sun"
                    />
                  ) : (
                    <img
                      className="w-full cursor-pointer"
                      src={moon}
                      alt="moon"
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
