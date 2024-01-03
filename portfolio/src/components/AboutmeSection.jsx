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
  const [option, setOption] = useState("Informacje ogólne");

  const handleChangeFirstOption = () => {
    setOption("Informacje ogólne");
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
        className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex h-screen w-full max-w-screen-xl flex-col justify-center px-4 pt-28">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl ">O mnie</h1>
            <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-4/6">
              <div className="mb-10 flex w-4/5 justify-around rounded-full border border-black  dark:border-white">
                <button
                  onClick={handleChangeFirstOption}
                  className={`m-3 rounded-full ${
                    option === "Informacje ogólne"
                      ? "bg-emerald-900 text-white"
                      : ""
                  } px-10 py-1`}
                >
                  Informacje ogólne
                </button>

                <button
                  onClick={handleChangeSecondOption}
                  className={`m-3 rounded-full ${
                    option === "Doświadczenie"
                      ? "bg-emerald-900 text-white"
                      : ""
                  } px-10 py-1`}
                >
                  Doświadczenie
                </button>
                <button
                  onClick={handleChangeThirdOption}
                  className={`m-3 rounded-full ${
                    option === "Umiejętności" ? "bg-emerald-900 text-white" : ""
                  } px-10 py-1`}
                >
                  Umiejętności
                </button>
              </div>
              {option === "Informacje ogólne" && (
                <>
                  <p className="w-4/5 ">
                    Koder webowy z pasją do piłki nożnej, siłowni i podróży.
                    Uwielbiam filmy i górskie wędrówki. Lubie pracować w
                    zespole, ale daj mi chwilę samotności na moje kreatywne
                    popisy. Zawsze uśmiechnięty i gotów na nowe wyzwania!
                  </p>

                  <div className="mt-4 flex w-4/5 justify-between ">
                    <div className="flex w-1/2 flex-col">
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={profile} alt="" />
                        <p>Marek Mańka</p>
                      </div>
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={email} alt="" />
                        <p>marek.manka99@gmail.com</p>
                      </div>
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={education} alt="" />
                        <p>
                          Master of Computer Science <br />
                          Bachelor of Computer Science
                        </p>
                      </div>
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={language} alt="" />
                        <p>
                          Angielski: B2 <br />
                          Polski: Native
                        </p>
                      </div>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={phone} alt="" />
                        <p>501 290 572</p>
                      </div>
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={birthday} alt="" />
                        <p>27.05.1999r.</p>
                      </div>
                      <div className="my-2 flex items-center justify-start">
                        <img className="me-4 w-10" src={house} alt="" />
                        <p>Cieszyn, Polska</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {option === "Doświadczenie" && <></>}

              {option === "Umiejętności" && (
                <>
                  <p>sad</p>
                </>
              )}
            </div>
            <div className="flex w-2/6 justify-end">
              <img
                className="w-5/6"
                src={myPhotoSecond}
                alt="moje zdjęcie na sekcji o mnie"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
