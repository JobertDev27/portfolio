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
    <div className="w-full flex flex-col border border-(--border) p-4 rounded-md bg-(--background)">
      <div>
        <Image
          className="w-full h-auto max-h-[230px]"
          width={1080}
          height={720}
          alt="thumnail"
          src={prop.thumbnail}
        />
      </div>
      <div className="flex flex-col mt-2 py-2 gap-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{prop.title}</p>
          <div className="flex gap-2">
            {prop.live && (
              <a
                className="bg-neutral-200 text-neutral-950 px-1 rounded-sm text-sm"
                href={prop.live}
              >
                live
              </a>
            )}{" "}
            <a
              className="bg-neutral-200 text-neutral-950 px-1 rounded-sm text-sm"
              href={prop.code}
            >
              source
            </a>
          </div>
        </div>
        <p className="text-(--muted) text-sm">{prop.desc}</p>
        <div className="flex gap-1 flex-wrap">
          {prop.stack.map((skill, i) => {
            return (
              <div
                key={i}
                className=" px-1 rounded-sm bg-neutral-700 text-(--foreground) text-xs"
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
