import myPhotoSecond from "../assets/myPhotoSecond.png";
import profile from "../assets/icons/profileIcon.png";
import email from "../assets/icons/email.png";
import education from "../assets/icons/education.png";
import language from "../assets/icons/language.png";
import phone from "../assets/icons/phone.png";
import birthday from "../assets/icons/birthday.png";
import house from "../assets/icons/house.png";
import { useState } from "react";

const INFO = "Informacje";
const EXP = "Doświadczenie";
const SKILLS = "Umiejętności";

const SKILLSTECH = [
  "React, Next",
  "JavaScript, ES6, Typescript",
  "HTML, CSS, SASS",
  "Tailwind, Bootstrap",
  "REST",
  "Axios, Fetch, Context API",
  "Git",
  "Python",
  "Figma, Photoshop",
  "SQL",
  "Jira/Asana/Confluence",
  "Kodowanie Maili",
];

const SKILLSSOFT = [
  "Motywowanie zespołu do osiągania celów",
  "Zaangażowanie i chęć rozwoju zawodowego",
  "Kreatywność",
  "Umiejętność pracy w zespole",
  "Punktualność i elastyczność",
  "Logiczne myślenie",
];

export function AboutMeSection() {
  const [option, setOption] = useState(INFO);

  return (
    <>
      <section
        id="about"
        className="flex w-full  justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-4 sm:w-9/12 2xl:w-full">
          <h1 className="mb-2 text-4xl">O mnie</h1>
          <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
          <div className="flex w-full  max-w-screen-xl flex-wrap  items-center justify-center">
            <div className="my-10 flex w-full justify-around rounded-full border border-black  dark:border-white">
              <button
                onClick={() => setOption(INFO)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === INFO ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Informacje
              </button>

              <button
                onClick={() => setOption(EXP)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === EXP ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Doświadczenie
              </button>
              <button
                onClick={() => setOption(SKILLS)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === SKILLS ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Umiejętności
              </button>
            </div>
            <div className="w-full md:w-4/6">
              {option === INFO && (
                <>
                  <p className="text-md w-full text-justify leading-relaxed md:pe-4 xl:w-4/5">
                    Koder webowy z pasją do piłki nożnej, siłowni i podróży.
                    Uwielbiam filmy i górskie wędrówki. Lubie pracować w
                    zespole, ale daj mi chwilę samotności na moje kreatywne
                    popisy. Zawsze uśmiechnięty i gotów na nowe wyzwania!
                  </p>

                  <div className="mt-4 flex w-full flex-wrap items-center justify-center xl:w-4/5">
                    <div className="flex w-full flex-col sm:w-1/2">
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={profile} alt="avatar" />
                        <p>Marek Mańka</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={phone} alt="phone" />
                        <p>501 290 572</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={education} alt="education" />
                        <p>
                          Master of Computer Science <br />
                          Bachelor of Computer Science
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={email} alt="email" />
                        <p>marek.manka99@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col sm:w-1/2">
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={language} alt="languages" />
                        <p>
                          Angielski: B2 <br />
                          Polski: Native
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={birthday} alt="birthday" />
                        <p>27.05.1999r.</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={house} alt="my country" />
                        <p>Cieszyn, Polska</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {option === EXP && (
                <>
                  <div className="text-jusify mb-4 xl:w-4/5 ">
                    <h2 className="mb-1 text-xl font-bold uppercase text-emerald-900">
                      salesmanago
                    </h2>
                    <h3 className="ms-4">JUNIOR FRONT-END DEVELOPER</h3>
                    <p className="mb-4 ms-4 text-xs md:pe-4 md:text-sm">
                      Kodowanie formularzy/ maili/ landing page/ skryptów
                      dedykowanych. Testy manualne.
                    </p>
                    <h3 className="ms-4">CX & MARKETING AUTOMATION ENGINEER</h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm">
                      Wspieranie klientów SALESmanago, oraz pracowników działu
                      Success w określonych kwestiach związanych z działaniem
                      wybranych funkcjonalności na stronie klienta - skracanie
                      czasu oczekiwania na wdrożenie funkcjonalności, kodowanie
                      HTML i CSS (maili, landing page, itd.), wsparcie w
                      wdrożeniach.
                    </p>
                  </div>
                  <div className="text-jusify mb-4 xl:w-4/5">
                    <h2 className="mb-1 text-xl font-bold uppercase text-emerald-900">
                      haevo
                    </h2>
                    <h3 className="ms-4">Serwisant sprzętu komputerowego</h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm">
                      Przyjmowanie komputerów od klientów, kontakt z klientem,
                      drobne naprawy i serwis sprzętu komputerowego.
                    </p>
                  </div>
                  <div className="text-jusify mb-4 xl:w-4/5">
                    <h2 className="mb-1 text-xl font-bold uppercase text-emerald-900 ">
                      ppg cieszyn
                    </h2>
                    <h3 className="ms-4">
                      Laborant kontroli jakości i kolorysta{" "}
                    </h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm">
                      Wykonywanie badań produkowanych wyrobów, bieżące
                      prowadzenie dokumentacji badań, analiza wyników.
                    </p>
                  </div>
                </>
              )}
              {option === SKILLS && (
                <>
                  <div className="mt-4 flex w-full flex-wrap justify-between px-5 text-left sm:px-0 xl:w-4/5">
                    <div className="flex w-full flex-col pb-5 sm:w-1/2 sm:pb-0">
                      <h2 className="mb-5 text-xl font-bold uppercase text-emerald-900">
                        Techniczne
                      </h2>
                      <ul>
                        {SKILLSTECH.map((SKILLTECH) => {
                          return (
                            <li key={SKILLTECH} className="mb-1 ms-4">
                              {SKILLTECH}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="flex w-full flex-col sm:w-1/2">
                      <h2 className="mb-5 text-xl font-bold uppercase text-emerald-900">
                        miękkie
                      </h2>
                      <ul>
                        {SKILLSSOFT.map((SKILLSOFT) => {
                          return (
                            <li className="mb-1 ms-4 md:pe-4" key={SKILLSOFT}>
                              {SKILLSOFT}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            <img
              className="mt-10 w-5/6 md:w-1/3 xl:mt-0 xl:w-1/3"
              src={myPhotoSecond}
              alt="moje zdjęcie - strona główna"
            />
          </div>
        </div>
      </section>
    </>
  );
}
