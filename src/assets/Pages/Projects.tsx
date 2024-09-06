import { ProjectCard } from "../Components/ProjectCard";

export const Projects = () => {
  return (
    <section className="flex flex-col justify-center items center">
      <h1 className="font-opensans font-bold text-center text-darkmode-light-blue text-3xl pb-10">Some projects i have worked on:</h1>
      <div className="projects flex flex-col gap-y-60">
        <ProjectCard
        // id={project.id}
        // project={project}
        />
        <ProjectCard
        // id={project.id}
        // project={project}
        />
        <ProjectCard
        // id={project.id}
        // project={project}
        />
      </div>
    </section>
  );
};
