import Image from "next/image";

type SkillProp = {
  icon: string;
  skillName: string;
};

export default function SkillBox(skillProp: SkillProp) {
  return (
    <div className="flex gap-2 items-center justify-center w-fit cursor-default">
      <Image
        src={skillProp.icon}
        width={24}
        height={24}
        alt="img"
        className="w-[1rem]"
      />
      <p className="text-sm">{skillProp.skillName}</p>
    </div>
  );
}
