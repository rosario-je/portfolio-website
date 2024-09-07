
interface ProjectCardProps {
  project: {
    id: number,
    projectName: string;
    projectSubtitle: string;
    projectDesc: string;
    techStack: Array<string>;
    imgUrl: string
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="project-card flex flex-col justify-center items-center">
      <div className="left-side shadow-[_10px_10px_0px_rgba(15,135,194)]">
        <img className="object-contain h-40" src={props.project.imgUrl} alt="project-img" />
      </div>
      <div className="right-side flex flex-col py-4">
        <h1 className="text-center font-opensans font-bold text-7xl">{props.project.id}</h1>
        <h2 className="text-center font-opensans font-bold text-4xl text-darkmode-light-blue">
          {props.project.projectName}
        </h2>
        <h3 className="text-center font-opensans text-darkmode-primary pb-2">
          {props.project.projectSubtitle}
        </h3>
        <p className="font-opensans font-light ">{props.project.projectDesc}</p>
      </div>
      <div className="tech-stack pt-3 flex flex-wrap justify-center gap-x-5  border-t-[1px] border-t-darkmode-primary">
        {props.project.techStack.map((tech) => {
          return (
            <span key={tech}>{tech}</span>
          )
        })}
        <span>Github Logo</span>
      </div>
    </div>
  );
};
