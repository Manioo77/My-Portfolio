import myPhotoSecond from "../assets/myPhotoSecond.png";
import profile from "../assets/icons/profileIcon.png";
import email from "../assets/icons/email.png";
import education from "../assets/icons/education.png";
import language from "../assets/icons/language.png";
import phone from "../assets/icons/phone.png";
import birthday from "../assets/icons/birthday.png";
import house from "../assets/icons/house.png";

export function AboutmeSection() {
  //   const handleOptionValue = (e) => {
  //     const currentValue = e.target.textContent;
  //     const active = true;

  //     switch (currentValue) {
  //       case "Personal Info":
  //         console.log("info");
  //         break;
  //       case "Qualifications":
  //         console.log("Qualifications");
  //         break;
  //       case "Skills":
  //         console.log("Skills");
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  return (
    <>
      <section id="about" className="flex w-full justify-center">
        <div className="h-screen w-full max-w-screen-xl px-4 pt-28">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl text-white">O mnie</h1>
            <div className="h-1 w-2/5 bg-gradient-to-r from-amber-200"></div>
          </div>

          <div className="flex">
            <div className="w-4/6">
              <div className="mb-10 flex w-4/5 justify-around rounded-full border">
                <button className="m-3 rounded-full bg-amber-200 px-10 py-1">
                  Personal Info
                </button>
                <button className="m-3 rounded-full bg-amber-200 px-10 py-1">
                  Qualifications
                </button>
                <button className="m-3 rounded-full bg-amber-200 px-10 py-1">
                  Skills
                </button>
              </div>
              <p className="w-4/5 text-white ">
                Koder webowy z pasją do piłki nożnej, siłowni i podróży.
                Uwielbiam filmy i górskie wędrówki. Lubie pracować w zespole,
                ale daj mi chwilę samotności na moje kreatywne popisy. Zawsze
                uśmiechnięty i gotów na nowe wyzwania!
              </p>
              <div className="mt-4 flex w-4/5 justify-between ">
                <div className="flex w-1/2 flex-col text-white">
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
                <div className="flex w-1/2 flex-col text-white">
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
