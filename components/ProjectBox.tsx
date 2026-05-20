import Image from "next/image";

type ProjectProps = {
  title: string;
  thumbnail: string;
  desc: string;
  stack: string[];
};

export default function ProjectBox(prop: ProjectProps) {
  return (
    <div className="w-full flex flex-col border-(--foreground) p-4">
      <div>
        <Image
          className="w-full h-auto"
          width={1080}
          height={720}
          alt="thumnail"
          src={prop.thumbnail}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-lg font-bold">{prop.title}</p>
        <p>{prop.desc}</p>
        <div className="flex gap-1">
          {prop.stack.map((skill, i) => {
            return (
              <div
                key={i}
                className="py-1 px-1.5 rounded-full bg-(--foreground) text-(--background) text-sm"
              >
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
