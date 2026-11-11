import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Code2, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> DEVELOPER PORTFOLIO
          <span className="eyebrow-line" /> AARON PARKER
        </div>
        <h1>Building ideas<br />into <span className="gradient-text">experiences.</span></h1>
        <p className="hero-desc">
          I'm <strong>Aaron Parker</strong>, a software developer interested in crafting
          clean, thoughtful, and engaging digital experiences.
        </p>
        <div className="hero-cta">
          <a className="primary-btn" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
          <a className="text-btn" href="#contact">Get in touch <ArrowRight size={17} /></a>
        </div>
        <div className="socials">
          <a href="https://github.com/BlackScythe0178" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/vexel-undefined-589b4143b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="mailto:shadowwarhawk2@gmail.com" aria-label="Email"><Mail size={19} /></a>
          <span className="social-label">FIND ME ONLINE</span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-tile">
          <div className="tile-top">
            <span className="dots"><i /><i /><i /></span>
            <span>portfolio.jsx</span><Code2 size={15} />
          </div>
          <div className="tile-code">
            <span className="line-no">01</span> <span className="code-purple">const</span> developer = {'{'}<br />
            <span className="line-no">02</span> &nbsp; name: <span className="code-blue">'Aaron Parker'</span>,<br />
            <span className="line-no">03</span> &nbsp; focus: <span className="code-blue">'Web Development'</span>,<br />
            <span className="line-no">04</span> &nbsp; mindset: <span className="code-blue">'Keep Building'</span><br />
            <span className="line-no">05</span> {'}'};
          </div>
          <div className="tile-foot"><span className="pulse" /> Ready to create</div>
        </div>
        <div className="art-label">DESIGN × DEVELOPMENT</div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span><ChevronDown size={16} />
      </a>
    </section>
  );
}
