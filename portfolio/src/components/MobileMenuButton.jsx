export function MobileMenuButton({ mobileMenu, setMobileMenu }) {
  const handleChangeIcon = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleChangeIcon}
      className="group relative z-50 pe-4 sm:hidden"
    >
      <div
        className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-emerald-900 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 ${
          mobileMenu && "ring-4"
        }`}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-100 duration-300 ${
              mobileMenu && "translate-y-6"
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 ${
              mobileMenu && "translate-y-6"
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${
              mobileMenu && "translate-y-6"
            }`}
          ></div>
          <div
            className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
              mobileMenu && "w-12 translate-x-0"
            }`}
          >
            <div
              className={`absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                mobileMenu && "rotate-45"
              }`}
            ></div>
            <div
              className={`absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                mobileMenu && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
}
