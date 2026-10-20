const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;