import Image from "next/image";

type SkillProp = {
  icon: string;
  skillName: string;
};

export default function SkillBox(skillProp: SkillProp) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-2 items-center justify-center w-fit h-[30px] cursor-default">
      <Image
        src={skillProp.icon}
        width={24}
        height={24}
        alt="img"
        className="sm:w-[14px] md:w-[24px]"
      />
      <p className="text-sm">{skillProp.skillName}</p>
    </div>
  );
}
