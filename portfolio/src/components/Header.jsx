import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

export function Header({ handleChangeTheme }) {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center justify-center bg-neutral-200 shadow-sm shadow-emerald-900  dark:bg-neutral-900 dark:shadow-emerald-200">
      <div className="flex w-full max-w-7xl items-center justify-between px-4">
        <nav>
          <ul className="flex flex-row items-center font-bold">
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
            {/* <li className="mr-5 w-full max-w-6">
              {mode ? (
                <img className="w-full cursor-pointer" src={sun} alt="sun" />
              ) : (
                <img className="w-full cursor-pointer" src={moon} alt="moon" />
              )}
            </li> */}
            <li
              onClick={handleChangeTheme}
              className={`w-full max-w-6 cursor-pointer`}
            >
              <img className="w-full cursor-pointer" src={moon} alt="moon" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
