import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading reveal">
        <div className="kicker"><span>01 /</span> INTRODUCTION</div>
        <h2>A little <span className="gradient-text">about me.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-lead reveal">Curious by nature.<br /><span>Driven to build.</span></div>
        <div className="about-text reveal">
          <p>I'm Aaron. I enjoy turning ideas into working software and exploring how design,
            technology, and problem-solving fit together.</p>
          <p>My interests span frontend development, interactive applications, and game systems.
            I value readable code, purposeful interfaces, and continuous learning.</p>
          <a className="inline-link" href="#projects">See what I've built <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
