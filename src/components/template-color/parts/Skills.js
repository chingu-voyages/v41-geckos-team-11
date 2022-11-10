
function Skills({ skills }) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
      {skills.map(skill=> (<li key={skill.id}>{skill.text}</li>))}
      </ul>
    </div>
  )
}

export default Skills
