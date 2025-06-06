import type { ExperienceProps } from "../type";

const works: { company: string; position: string; workTimeline: string }[] = [
  // company, position, workTimeline
];
const educations: {
  school: string;
  diploma: string;
  schoolTimeline: string;
}[] = [
  {
    school: "PHINMA University of Iloilo",
    diploma: "Bachelor's in Science in Information Technology",
    schoolTimeline: "2024 - 2027",
  },
];

export const experience: ExperienceProps = { works, educations };
