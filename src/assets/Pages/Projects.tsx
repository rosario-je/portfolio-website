import { ProjectCard } from "../Components/ProjectCard";
import { projectsArray } from "../imports/ProjectsObjects";

export const Projects = () => {
  return (
    <section className="flex flex-col justify-center items center">
      <h1 className="font-opensans font-bold text-center text-darkmode-light-blue text-3xl pb-10">
        Some projects i have worked on:
      </h1>
      <div className="projects flex flex-col gap-y-48">
        {projectsArray.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};
