import Image from "next/image";

type ProjectProps = {
  title: string;
  thumbnail: string;
  desc: string;
  stack: string[];
  code: string;
  live?: string;
};

export default function ProjectBox(prop: ProjectProps) {
  return (
    <div className="w-full flex flex-col border border-(--border) p-4 rounded-md">
      <div>
        <Image
          className="w-full h-auto"
          width={1080}
          height={720}
          alt="thumnail"
          src={prop.thumbnail}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2 py-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{prop.title}</p>
          <div className="text-(--accent-hover) flex gap-2">
            {prop.live && (
              <a className="border-r pr-2" href={prop.live}>
                live
              </a>
            )}{" "}
            <a href={prop.code}>github</a>
          </div>
        </div>
        <p>{prop.desc}</p>
        <div className="flex gap-1 flex-wrap">
          {prop.stack.map((skill, i) => {
            return (
              <div
                key={i}
                className=" px-1 rounded-sm bg-(--foreground) text-(--background) text-sm"
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
