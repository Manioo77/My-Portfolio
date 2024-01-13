import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
    >
      <div className="flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-4 sm:w-9/12 2xl:w-full ">
        <div className="mb-5">
          <h1 className="mb-2 text-4xl capitalize">{t("contact")}</h1>
          <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
        </div>
        <form
          action="https://formsubmit.io/send/marek.manka99@gmail.com"
          method="POST"
          className=" flex flex-col "
        >
          <label className="my-2 w-full capitalize" htmlFor="mail">
            {t("contactEmail")}*
          </label>
          <input
            className="mb-5 h-11 w-full rounded-md  border border-black bg-transparent p-1 ps-3 outline-none dark:border-white"
            type="email"
            name="mail"
            id="mail"
            required
            placeholder={t("placeholderEmail")}
          />
          <label className="my-2 w-full capitalize" htmlFor="msg">
            {t("contactMesage")}*
          </label>
          <textarea
            className="w-full rounded-md border border-black  bg-transparent p-1 ps-3 outline-none dark:border-white"
            name="msg"
            id="msg"
            rows="5"
            required
            placeholder={t("placeholderMessage")}
          ></textarea>

          <input name="_formsubmit_id" type="text" className="hidden" />

          <div className="flex justify-center md:justify-start">
            <input
              className="my-10 h-11 w-48 cursor-pointer rounded-full bg-emerald-900 uppercase text-white hover:bg-emerald-950"
              type="submit"
              value={t("buttonSend")}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
