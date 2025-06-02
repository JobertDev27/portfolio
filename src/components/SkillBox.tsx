import type { SkillProps } from "./type";

export default function SkillBox({ name, image }: SkillProps) {
  return (
    <div className="skill-box">
      {image}
      <p>{name}</p>
    </div>
  );
}
