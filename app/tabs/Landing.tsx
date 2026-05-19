import Clock from "../../components/Clock";
import SkillBox from "@/components/SkillBox";
import Image from "next/image";

export default function Landing() {
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
    <main>
      <section className="md:p-0 md:w-[90%] lg:w-[50%] flex flex-row md:gap-10 items-center mb-8">
        <div className="flex-1">
          <h1 className="font-bold text-(--highlight)">Jobert Poylan Jr</h1>
          <h2>Full-Stack Developer</h2>
          <Clock />
          <nav className="flex gap-4 mt-5 items-center">
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
      <section className="md:p-0 md:w-[90%] lg:w-[50%] flex flex-col md:gap-10 mb-8 mt-5">
        <h3>EXPERIENCE:</h3>
        <div className="flex justify-between">
          <div>
            <h4>Office Assistant</h4>
            <p className="text-sm">Iloilo City Government</p>
          </div>
          <div className="flex justify-end">
            <p>May 2024 - June 2024</p>
          </div>
        </div>
      </section>
    </main>
  );
}
