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
    <div className={`project-card flex flex-col justify-center items-center ${props.project.id % 2 == 0  ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div
        className={`left-side transition ease-in-out delay-150 hover:shadow-[0px_5px_rgba(0,_98,_90,_0.4),_0px_10px_rgba(0,_98,_90,_0.3),_0px_15px_rgba(0,_98,_90,_0.2),_0px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] lg:w-full`}
      >
        <img
          className="object-contain h-40 lg:h-full"
          src={props.project.imgUrl}
          alt="project-img"
        />
      </div>
      <div className="lg:w-full lg:px-5">
        <div className="right-side flex flex-col py-4">
          <h1 className="text-center font-opensans font-bold text-7xl lg:text-left text-darkmode-text">
            {props.project.id}
          </h1>
          <h2 className="text-center font-opensans font-bold text-4xl text-darkmode-light-blue lg:text-left">
            {props.project.projectName}
          </h2>
          <h3 className="text-center font-opensans text-darkmode-primary pb-2 lg:text-left">
            {props.project.projectSubtitle}
          </h3>
          <p className="font-opensans font-light text-darkmode-text">
            {props.project.projectDesc}
          </p>
        </div>
        <div className="tech-stack pt-3 flex flex-wrap justify-center gap-x-5  border-t-[1px] border-t-darkmode-primary flex-col items-center">
          <div className="flex flex-row gap-x-5 pb-5 text-darkmode-text">
            {props.project.techStack.map((tech) => {
              return <span key={tech}>{tech}</span>;
            })}
          </div>
          <a
            href={props.project.projectRepo}
            target="_blank"
            className="transition ease-in-out delay-20 hover:shadow-[0px_0px_62px_0px_#4a5568]"
          >
            <FontAwesomeIcon
              className="text-4xl"
              icon={faGithub}
              style={{ color: "#FFFFFF" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};


// ${
//   props.project.id % 2 == 0
//     ? "shadow-[_10px_10px_0px_rgba(15,135,194)]"
//     : "shadow-[_-10px_10px_0px_rgba(15,135,194)]"
// }