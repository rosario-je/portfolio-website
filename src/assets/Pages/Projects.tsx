import { ProjectCard } from "../Components/ProjectCard";
import { projectsArray } from "../imports/ProjectsObjects";

export const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 pb-20"
      id="work"
    >
      <h1 className="font-opensans font-bold text-center text-darkmode-light-blue text-3xl pb-10">
        Some projects I have worked on:
      </h1>
      <div className="projects flex flex-col gap-y-20 lg:pt-20 lg:gap-y-40">
        {projectsArray.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};
