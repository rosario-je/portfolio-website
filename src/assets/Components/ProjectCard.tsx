import React, { FC } from "react";

interface ProjectCardProps {
  id: number,
  project: object,
}


export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="project-card flex flex-col justify-center items-center">
      <div className="left-side">
        <div className="w-56 h-56 bg-slate-500"/>
      </div>
      <div className="right-side flex flex-col py-4">
        <h1 className="text-center font-opensans font-bold text-7xl">01</h1>
        <h2 className="text-center font-opensans font-bold text-4xl text-darkmode-light-blue">Colab</h2>
        <h3 className="text-center font-opensans text-darkmode-primary pb-2">Collaborative coding platform</h3>
        <p className="font-opensans font-light ">
          CoLab is a collaborative platform that allows developers to create,
          join, and manage programming projects. Users can discover projects,
          collaborate with team members, and effectively manage project details.
          The app features user authentication, real-time chat, and a project
          dependent links for GitHub, Trello, and Figma to streamline the
          project management process.
        </p>
      </div>
      <div className="tech-stack pt-3 flex flex-wrap justify-center gap-x-5  border-t-[1px] border-t-darkmode-primary">
        <span>ReactJS</span>
        <span>Express</span>
        <span>NodeJS</span>
        <span>PostgreSQL</span>
        <span>SocketIO</span>
        <span>Github Logo</span>
      </div>
    </div>
  );
};
