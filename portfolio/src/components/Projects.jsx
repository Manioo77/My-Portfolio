import foodsApp from "../assets/foodsApp.png";
import lksKonczyce from "../assets/lksKonczyce.png";
import sklep from "../assets/sklep.png";
import todolist from "../assets/todolist.png";

export function Projects() {
  return (
    <>
      <section
        id="projects"
        className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex min-h-screen  max-w-screen-xl  flex-col justify-center px-4 pt-28 sm:w-9/12 2xl:w-full">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl">Projekty</h1>
            <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
          </div>
          <div className="flex w-full flex-wrap items-stretch justify-center">
            <div className="my-2 w-full md:m-1 md:w-5/12 md:p-1">
              <a
                href="https://github.com/Manioo77/lks-konczyce-male"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="w-full"
                  src={lksKonczyce}
                  alt="mój projekt lksKonczyce"
                />
              </a>
            </div>
            <div className="my-2 w-full md:m-1 md:w-5/12 md:p-1">
              <a
                href="https://manioo77.github.io/Good-Cook-App/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="w-full"
                  src={foodsApp}
                  alt="mój projekt foodsApp"
                />
              </a>
            </div>
            <div className="my-2 w-full md:m-1 md:w-5/12 md:p-1">
              <a
                href="https://manioo77.github.io/Sklep-it_STELA/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="w-full" src={sklep} alt="mój projekt sklep" />
              </a>
            </div>
            <div className="my-2 w-full md:m-1 md:w-5/12 md:p-1">
              <a
                href="https://manioo77.github.io/To-do-list-JavaScript/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="w-full"
                  src={todolist}
                  alt="mój projekt todolist"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
