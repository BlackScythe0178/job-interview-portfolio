const skills = [
  'JavaScript', 'TypeScript', 'React', 'HTML',
  'CSS', 'Git & GitHub', 'Responsive Design', 'Frontend Development',
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading reveal">
        <div className="kicker"><span>03 /</span> TOOLKIT</div>
        <h2>Tools of the <span className="gradient-text">trade.</span></h2>
        <p className="section-sub">Technologies represented in my current work and learning journey.</p>
      </div>
      <div className="skill-grid reveal">
        {skills.map((skill) => (
          <div className="skill-pill" key={skill}>
            <span className="skill-dot" />{skill}
          </div>
        ))}
      </div>
      <p className="skill-note">Skills are areas of experience or study, not formal proficiency ratings.</p>
    </section>
  );
}
