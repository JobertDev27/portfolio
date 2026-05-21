import Clock from "@/components/Clock";
import SkillBox from "@/components/SkillBox";
import Image from "next/image";
import ProjectBox from "@/components/ProjectBox";

export default function Home() {
  // Add skills here, images are found in public
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

  // Add projects here
  const projects = [
    {
      title: "Yomutsugi",
      thumbnail: "/yomutsugi.png",
      stack: ["React", "Supabase", "PostgreSQL"],
      desc: "Anime library App",
    },
  ];

  return (
    <>
      <main className="flex justify-center mx-4 my-10">
        <div className="max-w-4xl">
          <section className=" w-full flex flex-col md:flex-row gap-5 md:items-center mb-10">
            <div className="flex-1">
              <h1 className="font-bold text-(--highlight)">Jobert Poylan Jr</h1>
              <h2>Full-Stack Developer</h2>
              <Clock />
            </div>
            <div className=" self-start">
              <nav className="flex gap-4 items-center">
                <a href="https://github.com/JobertDev27">
                  <Image
                    className="w-[1.5rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/github.png"}
                    alt="github"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jobert-poylan-jr/">
                  <Image
                    className="w-[1.5rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/linkedin.png"}
                    alt="linkedin"
                  />
                </a>
                <a href="mailto:jobertdev27@gmail.com">
                  <Image
                    className="w-[1.5rem] cursor-pointer"
                    width={24}
                    height={24}
                    src={"/gmail.png"}
                    alt="gmail"
                  />
                </a>
                <a
                  href="/Resume.pdf"
                  className="border py-1.5 px-4 flex gap-2 items-center justify-around rounded-lg"
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
          <section className="md:p-0 w-full flex flex-col my-10 ">
            <h3 className="mb-2">EXPERIENCE:</h3>
            <div className="flex flex-col md:flex-row w-full justify-between border border-(--border) p-4 rounded-md">
              <div>
                <h4 className="font-bold text-(--highlight)">
                  Office Assistant
                </h4>
                <p className="text-sm">Iloilo City Government</p>
              </div>
              <p>May 2024 - June 2024</p>
            </div>
          </section>
          <section className="md:p-0 w-full flex flex-col my-10 ">
            <h3 className="mb-2">EDUCATION:</h3>
            <div className="flex flex-col md:flex-row w-full justify-between border border-(--border) p-4 rounded-md">
              <div>
                <h4 className="font-bold text-(--highlight)">
                  Phinma University of Iloilo
                </h4>
                <p className="text-sm">B.S in Information Technology</p>
              </div>
              <p>Expected 2028</p>
            </div>
          </section>
          <section className="md:p-0 flex flex-col md:gap-2 mb-8 mt-5">
            <h3>PROJECTS:</h3>
            <div className="flex flex-row flex-wrap md:grid md:grid-cols-2 gap-3">
              <ProjectBox {...projects[0]} />
              <ProjectBox {...projects[0]} />
              <ProjectBox {...projects[0]} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
