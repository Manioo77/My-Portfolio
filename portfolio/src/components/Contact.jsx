export function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white"
    >
      <div className="flex h-screen w-full max-w-screen-xl flex-col justify-center px-4 pt-28">
        <div className="mb-5">
          <h1 className="mb-2 text-4xl ">Kontakt</h1>
          <div className="h-1 w-2/5 bg-gradient-to-r from-emerald-900"></div>
        </div>
        <form
          action="https://formsubmit.io/send/marek.manka99@gmail.com"
          method="POST"
          className=" flex flex-col "
        >
          <label className="my-2 w-full " htmlFor="mail">
            Twój e-mail*
          </label>
          <input
            className="mb-5 h-11 w-full rounded-md  border border-black bg-transparent p-1 ps-3 outline-none dark:border-white"
            type="email"
            name="mail"
            id="mail"
            required
            placeholder="Wpisz swój adres email"
          />
          <label className="my-2 w-full " htmlFor="msg">
            Twoja wiadomość*
          </label>
          <textarea
            className="w-full rounded-md border border-black  bg-transparent p-1 ps-3 outline-none dark:border-white"
            name="msg"
            id="msg"
            rows="5"
            required
            placeholder="Wpisz wiadomość"
          ></textarea>
          <input
            className="my-10 h-11 w-48 cursor-pointer rounded-full bg-emerald-900 text-white hover:bg-emerald-950 "
            type="submit"
            value="Wyślij"
          />
        </form>
      </div>
    </section>
  );
}
