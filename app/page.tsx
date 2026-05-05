import Landing from "./tabs/Landing";

export default function Home() {
  return (
    <>
      <header className="">
        <nav>
          <ul className="flex flex-row items-center justify-center gap-20 m-5">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Download CV</li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center mt-15">
        <Landing />
      </main>
    </>
  );
}
