import { ArrowUpRight, Github, Terminal, FileText, Gamepad2, Layers } from 'lucide-react';

const icons = { FileText, Gamepad2, Layers };

function ProjectCard({ project }) {
  const Icon = icons[project.icon] || FileText;

  return (
    <article className={`project-card reveal ${project.accent}`}>
      <div className="project-visual">
        <div className="visual-grid" />
        <div className="project-icon"><Icon size={45} strokeWidth={1.35} /></div>
        <div className="project-visual-bottom">
          <span>{project.number} / 03</span>
          <span><Terminal size={14} /> {project.language}</span>
        </div>
      </div>
      <div className="project-content">
        <div className="project-kind">{project.kind}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Live demo <ArrowUpRight size={16} />
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            Source code <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading reveal">
        <div className="kicker"><span>02 /</span> SELECTED WORK</div>
        <div className="heading-row">
          <h2>Featured <span className="gradient-text">projects.</span></h2>
          <p>Three projects from my development journey. Explore the live sites and source code.</p>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
