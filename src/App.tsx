import Bg from "./components/Bg";
import { Code, Location, Download, Github } from "./components/Svg";
import type { SocialsLinkProps } from "./components/type";

export default function App() {
  const SocialsLink = ({ site, children }: SocialsLinkProps) => {
    return (
      <button
        className="social-btn"
        onClick={() => window.open(site, "_blank", "noopener,noreferrer")}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <Bg />
      <main>
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
        </section>
      </main>
    </>
  );
}
