import Clock from "../../components/Clock";
import SkillBox from "@/components/SkillBox";

export default function Landing() {
  const skills = [
    ["/react.png", "React"],
    ["/typescript.png", "TypeScript"],
    ["/node-js.png", "Node/Express"],
    ["/git.png", "Git"],
    ["/postgre.png", "PostgreSQL"],
    ["/tailwind.svg", "Tailwind"],
    ["/next.svg", "Next"],
    ["/linux.svg", "Linux"],
  ];

  return (
    <section className="p-5 md:p-0 md:w-[90%] lg:w-[50%] flex flex-row md:gap-10 border border-highlight">
      <div className="flex-1">
        <h1 className=" text-2xl md:text-4xl  font-bold text-(--highlight)">
          Jobert Poylan Jr
        </h1>
        <p className="text-sm md:text-xl">Full-Stack Developer</p>
        <div className="mt-8">
          <div className="flex flex-row flex-wrap gap-5 mt-2">
            {skills.map((skill) => (
              <SkillBox icon={skill[0]} skillName={skill[1]} />
            ))}
          </div>
        </div>
      </div>
      <Clock />
    </section>
  );
}
