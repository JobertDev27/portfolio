import type { SocialsLinkProps } from "./components/type";

import Bg from "./components/Bg";
import SkillBox from "./components/SkillBox";
import ProjectContainer from "./components/ProjectContainer";

import { skills } from "./components/data/skills";
import { projects } from "./components/data/projects";

import minkuImage from "./images/minku.webp";

import {
  Code,
  Location,
  Download,
  Github,
  Linkedin,
  Email,
} from "./components/Svg";
import { useRef } from "react";
import ExperienceContainer from "./components/ExperienceContainer";
import { experience } from "./components/data/experience";

export default function App() {
  const mainRef = useRef<HTMLElement>(null);

  const SocialsLink = ({ site, children }: SocialsLinkProps) => {
    const handleClick = () => {
      if (site.startsWith("mailto:")) {
        window.location.href = site;
      } else {
        window.open(site, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <button className="social-btn" onClick={handleClick}>
        {children}
      </button>
    );
  };

  const handlePageTransition = () => {
    mainRef.current!.style.transform = "translateX(-2000px)";
    mainRef.current!.style.transition = "transform 300ms ease-in";
    setTimeout(() => {
      mainRef.current!.style.display = "none";
    }, 300);
  };

  return (
    <>
      <Bg />
      <main ref={mainRef}>
        <section aria-label="Personnal info" className="personnal-info">
          <h1>JOBERT POYLAN JR</h1>
          <section className="info-cont">
            <div className="title">
              <Code width="32px" height="32px" />
              <h2 className="highlight-text">FULL STACK DEVELOPER</h2>
            </div>
            <div className="location">
              <Location width="32px" height="32px" />
              <h2>BASED AT THE PHILIPPINES</h2>
            </div>
          </section>
        </section>
        <section aria-label="Developer links" className="socials">
          <div className="download-btn">
            <Download width="24px" height="24px" className="download-svg" />
            <button
              className="btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/jobert-poylan-resume.pdf";
                link.download = "jobert-poylan-resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </button>
          </div>
          <SocialsLink site="https://github.com/JobertDev27">
            <Github width="32px" height="32px" />
          </SocialsLink>
          <SocialsLink site="https://www.linkedin.com/in/jobert-poylan-jr-78b46634a/">
            <Linkedin width="32px" height="32px" />
          </SocialsLink>
          <SocialsLink site="mailto:jobertdev27@gmail.com">
            <Email width="32px" height="32px" />
          </SocialsLink>
        </section>
        <section className="tech-stack">
          <h2>TECH STACK</h2>
          <div className="skills-container">
            {skills.map((skill, index) => {
              return (
                <SkillBox name={skill.name} image={skill.image} key={index} />
              );
            })}
          </div>
        </section>
        <section aria-label="Projects list">
          <div className="project-header">
            <h2>FEATURED PROJECTS</h2>
            <h2 onClick={handlePageTransition}>SEE MORE &rarr;</h2>
          </div>
          <div className="projects">
            {projects.map((project, index) => {
              return (
                <ProjectContainer {...project} key={index}>
                  <img src={minkuImage} alt="" />
                </ProjectContainer>
              );
            })}
          </div>
        </section>
        <section aria-label="Experience">
          <h2>EXPERIENCE</h2>
          <ExperienceContainer {...experience} />
        </section>
        <section aria-label="Contacts">
          <h2>LET'S TALK</h2>
          <div className="contact-container">
            <h2>Email: jobertdev27@gmail.com</h2>
            <h2>Phone +(63) 963 729 4502</h2>
          </div>
        </section>
      </main>
      <footer>&copy; 2025 JobertDev27 All Rights Reserved</footer>
    </>
  );
}
