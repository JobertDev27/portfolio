import { useState } from "react";
import type { ExperienceProps } from "./type";

export default function ExperienceContainer(props: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  return (
    <div className="experience-container">
      <div className="tab-btn-container">
        <div
          className={`education-btn ${
            activeTab === "education" ? "active-tab-btn" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          EDUCATION
        </div>
        <div
          className={`work-btn ${activeTab === "work" ? "active-tab-btn" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          WORK
        </div>
      </div>
      <div
        className={` education-tab ${
          activeTab === "work" ? "inactive-tab" : ""
        }`}
      >
        {props.educations && props.educations.length > 0 ? (
          props.educations.map((education, index) => {
            return (
              <div className="experience-box" key={index}>
                <p className="experience-header">{education.school}</p>
                <p className="experience-subheader">{education.diploma}</p>
                <p className="experience-timeline">
                  {education.schoolTimeline}
                </p>
              </div>
            );
          })
        ) : (
          <h2>Currently none</h2>
        )}
      </div>
      <div
        className={`work-tab ${
          activeTab === "education" ? "inactive-tab" : ""
        }`}
      >
        {props.works && props.works.length > 0 ? (
          props.works.map((work, index) => {
            return (
              <div className="experience-box" key={index}>
                <p className="experience-header">{work.company}</p>
                <p className="experience-subheader">{work.position}</p>
                <p className="experience-timeline">{work.workTimeline}</p>
              </div>
            );
          })
        ) : (
          <h2>Currently none</h2>
        )}
      </div>
    </div>
  );
}
