import React from "react";
import { useEffect, useState } from "react";
import portfolio from "../assets/portfolio.png";
import lks from "../assets/lks.png";
import goodCook from "../assets/goodCook.png";
import sklep from "../assets/sklep.png";
import todolist from "../assets/toDo.png";
import code from "../assets/icons/code.png";
import eye from "../assets/icons/eye.png";
import { useTranslation } from "react-i18next";

const URL = "https://api.github.com/users/manioo77/repos";

const REPOS = [
  {
    name: "My-Portfolio",
    image: portfolio,
  },
  {
    name: "lks-konczyce-male",
    image: lks,
    linkToPage: "https://github.com/Manioo77/lks-konczyce-male",
  },
  {
    name: "Good-Cook-App",
    image: goodCook,
    linkToPage: "https://manioo77.github.io/Good-Cook-App/",
  },
  {
    name: "Sklep-it_STELA",
    image: sklep,
    linkToPage: "https://manioo77.github.io/Sklep-it_STELA/",
  },
  {
    name: "To-do-list-JavaScript",
    image: todolist,
    linkToPage: "https://manioo77.github.io/To-do-list-JavaScript/",
  },
];

export function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((el) => {
          const projectName = el.name;
          const repoNames = REPOS.map(({ name }) => name);
          return repoNames.includes(projectName);
        });
        setProjects(filteredData);
      });
  }, []);

  return (
    <>
      <section
        id="projects"
        className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex min-h-screen  max-w-screen-xl  flex-col justify-center px-4 pt-28 sm:w-9/12 2xl:w-full">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl capitalize">{t("projects")}</h1>
            <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
          </div>
          <div className="flex w-full flex-wrap items-stretch justify-between">
            {projects.map((project) => {
              const repoName = project.name;
              const currentRepo = REPOS.find(({ name }) => name === repoName);
              return (
                <React.Fragment key={project.id}>
                  <div
                    key={project.id}
                    className="relative my-2 w-full md:m-1 md:w-5/12"
                  >
                    <div className="absolute bottom-0 flex h-1/5 w-full items-center justify-between  rounded-xl bg-black-rgba  text-white">
                      <div>
                        <a
                          href={project.html_url}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex justify-center"
                        >
                          <img
                            src={code}
                            className="w-2/6 cursor-pointer rounded-2xl transition-colors hover:bg-emerald-900 xl:w-1/2"
                            alt="github_link"
                          />
                        </a>
                      </div>
                      <p className="text-sm xl:text-base">{currentRepo.name}</p>
                      <div>
                        <a
                          href={currentRepo.linkToPage}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex justify-center"
                        >
                          <img
                            src={eye}
                            className={`${
                              currentRepo.name === "My-Portfolio" && "opacity-0"
                            } w-2/6  rounded-2xl transition-colors hover:bg-emerald-900 xl:w-1/2`}
                            alt="strona projektu"
                          />
                        </a>
                      </div>
                    </div>
                    <img
                      className="w-full rounded-xl"
                      src={currentRepo.image}
                      alt="projekt z githuba"
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
