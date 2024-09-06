import React from 'react';

//Sets the template for what the props will be
interface SkillProps {
  id: number,
  skillName: string;
  skillLogoPath: string;
}

//Have to specify that it is a react function that takes the <Skill Prop> interface
//as a blueprint
export const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className="tooltip tooltip-top w-32 h-32 bg-darkmode-primary rounded-2xl border-4 border-darkmode-accent hover:border-darkmode-secondary flex justify-center items-center" data-tip={props.skillName}>
      <h1>{props.skillName}</h1>
      {/* <img className="w-20 h-20" src={props.skillLogoPath} alt="logo" /> */}
    </div>
  );
};
