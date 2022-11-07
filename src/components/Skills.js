// import { useState } from "react";
import Skill from './Skill'


const Skills = ({ skills, onDelete }) => {
  return (
    <>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Skills;
