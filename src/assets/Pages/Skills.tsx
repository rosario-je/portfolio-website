import { useState } from "react";
import { technicalSkills, softSkills } from "../imports/SkillsObjects";
import { Skill } from "../Components/SkillComponent";

export const Skills = () => {
  const [currentSkills, setCurrentSkills] = useState("1");

  const handleSkillChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentSkills(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };

  return (
    <section className="skills-section h-screen flex flex-col justify-center">
      <div className="buttons flex justify-around mb-4">
        <button
          className={`btn btn-outline sticky w-1/3 ${
            currentSkills == "1" ? "bg-darkmode-accent" : "btn-info"
          }`}
          onClick={handleSkillChange}
          id="1"
        >
          <span className="text-darkmode-text">Technical Skills</span>
        </button>
        <button
          className={`btn btn-outline w-1/3 ${
            currentSkills == "2" ? "bg-darkmode-accent" : "btn-info"
          }` }
          onClick={handleSkillChange}
          id="2"
        >
          <span className="text-darkmode-text">Soft Skills</span>
        </button>
      </div>
      <div className={`skills grid grid-cols-2 justify-items-center h-4/6 ${(currentSkills == "1" ? "lg:grid-cols-4" : "lg:grid-cols-3")} `}>
        {(currentSkills === "1" ? technicalSkills : softSkills).map(
          (skill: any) => {
            return (
              <Skill
                key={skill.id}
                id={skill.id}
                skillName={skill.skillName}
                skillLogoPath={skill.skillNameLogoPath}
                skill={skill.skill}
              />
            );
          }
        )}
      </div>
    </section>
  );
};
