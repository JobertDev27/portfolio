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
          <nav className="flex gap-4 mt-5">
            <Image
              className="w-[1.5rem]"
              width={24}
              height={24}
              src={"/github.png"}
              alt="github"
            />
            <Image
              className="w-[1.5rem]"
              width={24}
              height={24}
              src={"/linkedin.png"}
              alt="linkedin"
            />
            <Image
              className="w-[1.5rem]"
              width={24}
              height={24}
              src={"/gmail.png"}
              alt="gmail"
            />
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
    </main>
  );
}
