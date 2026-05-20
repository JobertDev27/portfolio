import Landing from "./tabs/Landing";

export default function Home() {
  return (
    <>
      <header className="">
        <nav>
          <ul className="flex flex-row items-center md:justify-center gap-4 md:gap-20 mx-4 my-5">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center mt-5 mx-4 md:mt-15 ">
        <Landing />
      </main>
    </>
  );
}
