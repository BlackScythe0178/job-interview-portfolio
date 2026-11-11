import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner reveal">
        <div className="kicker"><span>04 /</span> GET IN TOUCH</div>
        <h2>Have something<br /><span className="gradient-text">in mind?</span></h2>
        <p>I'm always interested in learning about development opportunities
          and interesting projects. Let's connect.</p>
        <a className="primary-btn" href="mailto:shadowwarhawk2@gmail.com?subject=Portfolio%20Inquiry">
          Send me an email <ArrowUpRight size={18} />
        </a>
        <div className="contact-links">
          <a href="mailto:shadowwarhawk2@gmail.com">shadowwarhawk2@gmail.com</a>
          <a href="https://www.linkedin.com/in/vexel-undefined-589b4143b/" target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="https://github.com/BlackScythe0178" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
