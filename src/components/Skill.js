import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ skill, onDelete }) => {
  return (
    <span className="flex row align-center justify-between">
      <p>{skill.text}</p>
      <FontAwesomeIcon
        icon={('fa-regular', faTimes)}
        onClick={() => onDelete(skill.id)}
      />
    </span>
  )
}

export default Skills
