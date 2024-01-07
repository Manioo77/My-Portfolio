import myPhotoSecond from "../assets/myPhotoSecond.png";
import profile from "../assets/icons/profileIcon.png";
import email from "../assets/icons/email.png";
import education from "../assets/icons/education.png";
import language from "../assets/icons/language.png";
import phone from "../assets/icons/phone.png";
import birthday from "../assets/icons/birthday.png";
import house from "../assets/icons/house.png";
import { useState } from "react";

export function AboutmeSection() {
  const [option, setOption] = useState("Informacje");

  const handleChangeFirstOption = () => {
    setOption("Informacje");
  };

  const handleChangeSecondOption = () => {
    setOption("Doświadczenie");
  };

  const handleChangeThirdOption = () => {
    setOption("Umiejętności");
  };

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
                onClick={handleChangeFirstOption}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === "Informacje" ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Informacje
              </button>

              <button
                onClick={handleChangeSecondOption}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === "Doświadczenie" ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Doświadczenie
              </button>
              <button
                onClick={handleChangeThirdOption}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === "Umiejętności" ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs sm:text-base`}
              >
                Umiejętności
              </button>
            </div>
            <div className="w-full md:w-4/6">
              {option === "Informacje" && (
                <>
                  <p className="text-md w-full text-justify leading-relaxed md:w-4/5 ">
                    Koder webowy z pasją do piłki nożnej, siłowni i podróży.
                    Uwielbiam filmy i górskie wędrówki. Lubie pracować w
                    zespole, ale daj mi chwilę samotności na moje kreatywne
                    popisy. Zawsze uśmiechnięty i gotów na nowe wyzwania!
                  </p>

                  <div className="mt-4 flex w-full flex-wrap justify-between md:w-4/5 ">
                    <div className="flex w-full flex-col sm:w-1/2">
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={profile} alt="" />
                        <p>Marek Mańka</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={phone} alt="" />
                        <p>501 290 572</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={education} alt="" />
                        <p>
                          Master of Computer Science <br />
                          Bachelor of Computer Science
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={email} alt="" />
                        <p>marek.manka99@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col sm:w-1/2">
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={language} alt="" />
                        <p>
                          Angielski: B2 <br />
                          Polski: Native
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={birthday} alt="" />
                        <p>27.05.1999r.</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={house} alt="" />
                        <p>Cieszyn, Polska</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {option === "Doświadczenie" && (
                <>
                  <div className="mb-4 text-center md:text-left">
                    <h2 className="mb-1">SALESMANAGO</h2>
                    <p className="ms-4">* JUNIOR FRONT-END DEVELOPER</p>
                    <p className="ms-4">* CX & MARKETING AUTOMATION ENGINEER</p>
                  </div>
                  <div className="mb-4 text-center md:text-left">
                    <h2>HAEVO</h2>
                    <p className="ms-4">* Serwisant sprzętu komputerowego</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h2>PPG CIESZYN</h2>
                    <p className="ms-4">
                      * Laborant kontroli jakości i kolorysta
                    </p>
                  </div>
                </>
              )}

              {option === "Umiejętności" && (
                <>
                  <div className="mt-4 flex w-full justify-between text-center md:w-4/5 md:text-left ">
                    <div className="flex w-1/2 flex-col">
                      <h2>Umiejętności techniczne</h2>
                      <ul>
                        <li>* React, Next</li>
                        <li>* JavaScript, ES6, Typescript</li>
                        <li>* HTML, CSS, SASS </li>
                        <li>* Tailwind, Bootstrap</li>
                        <li>* REST</li>
                        <li>* Axios, Fetch, Context API</li>
                        <li>* Git</li>
                        <li>* Python</li>
                        <li>* Figma, Photoshop</li>
                        <li>* SQL </li>
                        <li>* Jira/Asana/Confluence</li>
                        <li>* Kodowanie Maili</li>
                      </ul>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <h2>Umiejętności miękkie</h2>
                      <ul>
                        <li>* Motywowanie zespołu do osiągania celów</li>
                        <li>* Zaangażowanie i chęć rozwoju zawodowego</li>
                        <li>* Kreatywność </li>
                        <li>* Umiejętność pracy w zespole</li>
                        <li>* Punktualność i elastyczność</li>
                        <li>* Logiczne myślenie</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            <img
              className="w-2/3 pt-10 md:w-1/3 md:pt-0"
              src={myPhotoSecond}
              alt="moje zdjęcie - strona główna"
            />
          </div>
        </div>
      </section>
    </>
  );
}
