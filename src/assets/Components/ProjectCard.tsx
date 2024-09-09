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
  const shadow =
    "shadow-[0px_5px_rgba(0,_98,_90,_0.4),_0px_10px_rgba(0,_98,_90,_0.3),_0px_15px_rgba(0,_98,_90,_0.2),_0px_20px_rgba(0,_98,_90,_0.1),_0px_25px_rgba(0,_98,_90,_0.05)]";

  return (
    <div
      className={`project-card flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ${
        props.project.id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`left-side flex flex-row justify-center transition ease-in-out delay-150 hover:${shadow} w-full lg:w-1/2`}
      >
        <img
          className="object-contain h-40 lg:h-full"
          src={props.project.imgUrl}
          alt={`Screenshot of ${props.project.projectName}`}
        />
      </div>
      <div className="lg:w-1/2 lg:px-5 ">
        <div className="right-side flex flex-col py-4 border-b-[1px] border-t-darkmode-primary">
          <h1 className="text-center font-opensans font-bold text-3xl  text-darkmode-text lg:text-5xl lg:text-start">
            {props.project.id}
          </h1>
          <h2 className="text-center font-opensans font-bold text-2xl lg:text-4xl text-darkmode-light-blue lg:text-start">
            {props.project.projectName}
          </h2>
          <h3 className="text-center font-opensans text-darkmode-primary pb-2 lg:text-start lg:text-xl">
            {props.project.projectSubtitle}
          </h3>
          <p className="font-opensans font-light text-darkmode-text text-sm lg:text-base text-start lg:text-start px-3 lg:px-0">
            {props.project.projectDesc}
          </p>
        </div>
        <div className="tech-stack pt-3 flex flex-wrap justify-center gap-x-5 flex-col items-center ">
          <div className="flex flex-row gap-x-5 pb-5 text-darkmode-text">
            {props.project.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a
            href={props.project.projectRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out delay-20 hover:shadow-[0px_0px_62px_0px_#4a5568]"
          >
            <FontAwesomeIcon className="text-4xl text-white" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};
