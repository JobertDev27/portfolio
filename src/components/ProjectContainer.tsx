import type { ProjectProps } from "./type";

type StackContainerProps = {
  skill: string;
};

function StackContainer({ skill }: StackContainerProps) {
  return <div className="stack-skill">{skill}</div>;
}

export default function ProjectContainer(props: ProjectProps) {
  return (
    <div className="project-container">
      <div className="project-image">{props.children}</div>
      <div className="project-info">
        <h3 className="project-title">{props.name}</h3>
        <p className="project-desc">{props.desc}</p>
        <div className="stack-container">
          {props.stack.map((skill, index) => {
            return <StackContainer skill={skill} key={index} />;
          })}
        </div>
        <div className="project-links">
          <button
            className="proj-btn"
            onClick={() =>
              window.open(props.live, "_blank", "noopener,noreferrer")
            }
          >
            Live
          </button>
          <button
            className="proj-btn"
            onClick={() =>
              window.open(props.code, "_blank", "noopener,noreferrer")
            }
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
