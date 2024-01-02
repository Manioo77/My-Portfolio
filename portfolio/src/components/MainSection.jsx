import myPhotoFirst from "../assets/myPhotoFirst.png";

export function MainSection() {
  return (
    <section id="home" className="flex w-full justify-center">
      <div className="flex h-screen w-full max-w-screen-xl items-center justify-between px-4 pt-20">
        <div className="relative">
          <div className="absolute"></div>
          <img
            className="w-96"
            src={myPhotoFirst}
            alt="moje zdjęcie - strona główna"
          />
        </div>
        <div className="w-7/12 text-white">
          <h1 className="text-7xl leading-tight">
            Cześć, jestem <br />
            <span className="text-amber-200">Marek Mańka</span>
          </h1>
          <p className="text-justify leading-relaxed">
            Moją wielką pasją jest tworzenie stron internetowych. Jako junior
            frontend developer zajmuję się nieustannie fascynującymi wyzwaniami,
            które nie tylko absorbują moją uwagę, lecz również przynoszą mi
            ogromną satysfakcję.
          </p>
          <button className="my-6 h-11 w-48 rounded-full bg-amber-200 text-slate-900">
            Pobierz CV
          </button>
        </div>
      </div>
    </section>
  );
}
