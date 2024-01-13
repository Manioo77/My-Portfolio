import myPhotoSecond from "../assets/myPhotoSecond.png";
import profile from "../assets/icons/profileIcon.png";
import email from "../assets/icons/email.png";
import education from "../assets/icons/education.png";
import language from "../assets/icons/language.png";
import phone from "../assets/icons/phone.png";
import birthday from "../assets/icons/birthday.png";
import house from "../assets/icons/house.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const INFO = "Informacje";
const EXP = "Doświadczenie";
const SKILLS = "Umiejętności";

const TECHSKILLS = [
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
];

const SOFTSKILLS = [
  "softSkill1",
  "softSkill2",
  "softSkill3",
  "softSkill4",
  "softSkill5",
  "softSkill6",
];

export function AboutMeSection() {
  const [option, setOption] = useState(INFO);
  const { t } = useTranslation();

  return (
    <>
      <section
        id="about"
        className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-4 sm:w-9/12 2xl:w-full">
          <h1 className="mb-2 pt-5 text-4xl capitalize">{t("aboutMe")}</h1>
          <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
          <div className="flex w-full  max-w-screen-xl flex-wrap  items-center justify-center">
            <div className="my-10 flex w-full justify-around rounded-full border border-black  dark:border-white">
              <button
                onClick={() => setOption(INFO)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === INFO ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs capitalize sm:text-base`}
              >
                {t("information")}
              </button>

              <button
                onClick={() => setOption(EXP)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === EXP ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs capitalize sm:text-base`}
              >
                {t("experience")}
              </button>
              <button
                onClick={() => setOption(SKILLS)}
                className={`rounded-full px-1 py-2 sm:p-3 ${
                  option === SKILLS ? "bg-emerald-900 text-white" : ""
                } w-4/12 text-xs capitalize sm:text-base`}
              >
                {t("skills")}
              </button>
            </div>
            <div className="w-full md:w-4/6">
              {option === INFO && (
                <>
                  <p className="text-md w-full text-justify leading-relaxed md:pe-4 xl:w-4/5">
                    {t("descInformation")}
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
                        <img
                          className="me-4 w-10"
                          src={education}
                          alt="education"
                        />
                        <p>
                          {t("educationMaster")} <br />
                          {t("educationBachelor")}
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img className="me-4 w-10" src={email} alt="email" />
                        <p>marek.manka99@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col sm:w-1/2">
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img
                          className="me-4 w-10"
                          src={language}
                          alt="languages"
                        />
                        <p>
                          {t("polishLanguage")} <br />
                          {t("englishLanguage")}
                        </p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img
                          className="me-4 w-10"
                          src={birthday}
                          alt="birthday"
                        />
                        <p>27.05.1999r.</p>
                      </div>
                      <div className="my-2 flex items-center  sm:justify-start">
                        <img
                          className="me-4 w-10"
                          src={house}
                          alt="my country"
                        />
                        <p>Cieszyn, {t("country")}</p>
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
                    <h3 className="ms-4 uppercase">
                      junior front-end developer
                    </h3>
                    <p className="mb-4 ms-4 text-xs md:pe-4 md:text-sm">
                      {t("workFrontend")}
                    </p>
                    <h3 className="ms-4 uppercase">
                      cx & marketing automation engineer
                    </h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm">
                      {t("workEngineer")}
                    </p>
                  </div>
                  <div className="text-jusify mb-4 xl:w-4/5">
                    <h2 className="mb-1 text-xl font-bold uppercase text-emerald-900 ">
                      haevo
                    </h2>
                    <h3 className="ms-4 uppercase">{t("haevo")}</h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm ">
                      {t("workHaevo")}
                    </p>
                  </div>
                  <div className="text-jusify mb-4 xl:w-4/5">
                    <h2 className="mb-1 text-xl font-bold uppercase text-emerald-900 ">
                      ppg cieszyn
                    </h2>
                    <h3 className="ms-4 uppercase">{t("ppg")}</h3>
                    <p className="mb-3 ms-4 text-xs md:pe-4 md:text-sm">
                      {t("workPpg")}
                    </p>
                  </div>
                </>
              )}
              {option === SKILLS && (
                <>
                  <div className="mt-4 flex w-full flex-wrap justify-between px-5 text-left sm:px-0 xl:w-4/5">
                    <div className="flex w-full flex-col pb-5 sm:w-1/2 sm:pb-0">
                      <h2 className="mb-5 text-xl font-bold uppercase text-emerald-900">
                        {t("techSkills")}
                      </h2>
                      <ul>
                        {TECHSKILLS.map((SKILLTECH) => {
                          return (
                            <li key={SKILLTECH} className="mb-1 ms-4">
                              {SKILLTECH}
                            </li>
                          );
                        })}
                        <li className="mb-1 ms-4">{t("techSkill1")}</li>
                      </ul>
                    </div>
                    <div className="flex w-full flex-col sm:w-1/2">
                      <h2 className="mb-5 text-xl font-bold uppercase text-emerald-900">
                        {t("softSkills")}
                      </h2>
                      <ul>
                        {SOFTSKILLS.map((softSkill) => {
                          return (
                            <li className="mb-1 ms-4 md:pe-4" key={softSkill}>
                              {t(softSkill)}
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
