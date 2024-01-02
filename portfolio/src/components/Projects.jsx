import foodsApp from "../assets/foodsApp.png";
import lksKonczyce from "../assets/lksKonczyce.png";
import sklep from "../assets/sklep.png";
import todolist from "../assets/todolist.png";

export function Projects() {
  return (
    <>
      <section id="projects" className="flex w-full justify-center">
        <div className="h-screen w-full max-w-screen-xl px-4 pt-28">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl text-white">Projekty</h1>
            <div className="h-1 w-2/5 bg-gradient-to-r from-amber-200"></div>
          </div>
          <div className="flex flex-wrap items-stretch justify-between">
            <div className="mx-3 mb-10  rounded-md bg-amber-200 p-1 transition hover:scale-105">
              <a
                href="https://github.com/Manioo77/lks-konczyce-male"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="h-48 w-96"
                  src={lksKonczyce}
                  alt="mój projekt lksKonczyce"
                />
              </a>
            </div>
            <div className="mx-3 mb-10  rounded-md bg-amber-200 p-1 transition hover:scale-105">
              <a
                href="https://manioo77.github.io/Good-Cook-App/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="h-48 w-96 "
                  src={foodsApp}
                  alt="mój projekt foodsApp"
                />
              </a>
            </div>
            <div className="mx-3 mb-10  rounded-md bg-amber-200 p-1 transition hover:scale-105">
              <a
                href="https://manioo77.github.io/Sklep-it_STELA/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="h-48 w-96"
                  src={sklep}
                  alt="mój projekt sklep"
                />
              </a>
            </div>
            <div className="mx-3 mb-10  rounded-md bg-amber-200 p-1 transition hover:scale-105">
              <a
                href="https://manioo77.github.io/To-do-list-JavaScript/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="h-48 w-96"
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
