import Clock from "@/components/Clock";
import SkillBox from "@/components/SkillBox";
import Image from "next/image";

export default function Home() {
  const skills = [
    ["/react.png", "React"],
    ["/typescript.png", "TypeScript"],
    ["/node-js.png", "Node"],
    ["/express.svg", "Express"],
    ["/git.png", "Git"],
    ["/postgre.png", "PostgreSQL"],
    ["/tailwind.svg", "Tailwind"],
    ["/next.svg", "Next"],
    ["/linux.svg", "Linux"],
  ];

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
        <div>
          <section className=" w-full flex flex-col md:flex-row gap-5 md:items-center mb-8">
            <div className="flex-1">
              <h1 className="font-bold text-(--highlight)">Jobert Poylan Jr</h1>
              <h2>Full-Stack Developer</h2>
              <Clock />
            </div>
            <div className=" self-start">
              <nav className="flex gap-4 items-center">
                <a href="https://github.com/JobertDev27">
                  <Image
                    className="w-[2rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/github.png"}
                    alt="github"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jobert-poylan-jr/">
                  <Image
                    className="w-[2rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/linkedin.png"}
                    alt="linkedin"
                  />
                </a>
                <a href="mailto:jobertdev27@gmail.com">
                  <Image
                    className="w-[2rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/gmail.png"}
                    alt="gmail"
                  />
                </a>
                <a
                  href="/Resume.pdf"
                  className="border py-2 px-4 flex gap-2 items-center justify-around rounded-lg"
                >
                  <Image
                    className="w-[1rem] h-[1rem]"
                    width={24}
                    height={24}
                    src={"/resume.png"}
                    alt="img"
                  />
                  <p>Resume</p>
                </a>
              </nav>
            </div>
          </section>
          <section>
            <h3>SKILLS:</h3>
            <div className="flex flex-row flex-wrap gap-2.5 mt-2">
              {skills.map((skill, i) => (
                <SkillBox key={i} icon={skill[0]} skillName={skill[1]} />
              ))}
            </div>
          </section>
          <section className="md:p-0 w-full flex flex-col mb-6 mt-5">
            <h3 className="mb-2">EXPERIENCE:</h3>
            <div className="flex w-full justify-between">
              <div>
                <h4>Office Assistant</h4>
                <p className="text-sm">Iloilo City Government</p>
              </div>
              <p>May 2024 - June 2024</p>
            </div>
          </section>
          <section className="md:p-0 md:w-[90%] lg:w-[50%] flex flex-col md:gap-10 mb-8 mt-5">
            <h3>PROJECTS:</h3>
            <div className="flex flex-col"></div>
          </section>
        </div>
      </main>
    </>
  );
}
