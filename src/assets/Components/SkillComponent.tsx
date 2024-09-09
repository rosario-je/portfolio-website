import React from "react";
import { Tooltip } from "@nextui-org/react";

//Sets the template for what the props will be
interface SkillProps {
  id: number;
  skillName: string;
  skillLogoPath: string;
  skill: string;
}

//Have to specify that it is a react function that takes the <Skill Prop> interface
//as a blueprint
export const Skill: React.FC<SkillProps> = (props) => {
  return (
    <Tooltip
      showArrow={true}
      content={props.skillName}
      className="text-darkmode-text bg-darkmode-light-blue rounded-xl"
    >
      <div className="w-32 h-32 bg-darkmode-primary rounded-2xl border-4 border-darkmode-accent hover:border-darkmode-secondary flex justify-center items-center lg:w-44 lg:h-44">
        <div className="flex flex-col items-center">
          {props.skill == "tech" ? (
            <img
              className="w-20"
              src={props.skillLogoPath}
              alt="technology_icon"
            />
          ) : (
            <img
              className="w-8 relative "
              src={props.skillLogoPath}
              alt="technology_icon"
            />
          )}
          {props.skill == "soft" && (
            <div className="text-darkmode-text">{props.skillName}</div>
          )}
        </div>
      </div>
    </Tooltip>
  );
};
