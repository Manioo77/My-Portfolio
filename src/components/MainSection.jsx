import i18next from "i18next";
import myPhotoFirst from "../assets/myPhotoFirst.png";
import { useTranslation } from "react-i18next";

export function MainSection() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="flex min-h-screen w-full justify-center bg-neutral-200 dark:bg-neutral-900"
    >
      <div className=" flex w-full  max-w-screen-xl flex-wrap  items-center justify-center pt-20 sm:w-9/12 md:justify-between 2xl:w-full">
        <img
          className="mt-10 w-5/6 md:w-1/2 xl:w-1/3"
          src={myPhotoFirst}
          alt="moje zdjęcie - strona główna"
        />
        <div className=" p-5 text-center text-black md:w-1/2 md:text-left xl:w-2/3 dark:text-white">
          <h1 className="pb-3 text-4xl font-bold leading-tight lg:text-5xl 2xl:text-6xl">
            {t("welcome")} <br />
            <span className="text-emerald-900">Marek Mańka</span>
          </h1>
          <p className="text-justify text-lg leading-relaxed">
            {t("description")}
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href={` ${
                i18next.resolvedLanguage === "pl"
                  ? "CV_Marek_Mańka.pdf"
                  : "EN_CV_Marek_Mańka.pdf"
              }`}
              download
              className="my-6 flex h-11 w-48 items-center justify-center rounded-full bg-emerald-900 uppercase text-white transition-colors hover:bg-emerald-950"
            >
              {t("downloadCv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
