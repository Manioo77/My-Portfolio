export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex items-center justify-center bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
      <p className="m-3 ">© Copyright Marek Mańka {year}</p>
    </footer>
  );
}
