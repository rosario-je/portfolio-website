import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub);

interface ProjectCardProps {
  project: {
    id: number;
    projectName: string;
    projectSubtitle: string;
    projectDesc: string;
    techStack: Array<string>;
    imgUrl: string;
    projectRepo: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="project-card flex flex-col justify-center items-center">
      <div
        className={`left-side ${
          props.project.id % 2 == 0
            ? "shadow-[_10px_10px_0px_rgba(15,135,194)]"
            : "shadow-[_-10px_10px_0px_rgba(15,135,194)]"
        }`}
      >
        <img
          className="object-contain h-40"
          src={props.project.imgUrl}
          alt="project-img"
        />
      </div>
      <div className="right-side flex flex-col py-4">
        <h1 className="text-center font-opensans font-bold text-7xl">
          {props.project.id}
        </h1>
        <h2 className="text-center font-opensans font-bold text-4xl text-darkmode-light-blue">
          {props.project.projectName}
        </h2>
        <h3 className="text-center font-opensans text-darkmode-primary pb-2">
          {props.project.projectSubtitle}
        </h3>
        <p className="font-opensans font-light ">{props.project.projectDesc}</p>
      </div>
      <div className="tech-stack pt-3 flex flex-wrap justify-center gap-x-5  border-t-[1px] border-t-darkmode-primary flex-col items-center">
        <div className="flex flex-row gap-x-5 pb-5">
          {props.project.techStack.map((tech) => {
            return <span key={tech}>{tech}</span>;
          })}
        </div>
        <a href={props.project.projectRepo} target="_blank" className="transition ease-in-out delay-20 hover:shadow-[0px_0px_62px_0px_#4a5568]">
          <FontAwesomeIcon
            className="text-4xl"
            icon={faGithub}
            style={{ color: "#FFFFFF" }}
          />
        </a>
      </div>
    </div>
  );
};

