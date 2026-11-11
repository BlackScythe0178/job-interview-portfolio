import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import { useProjects } from './hooks/useProjects';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { projects } = useProjects();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="site-shell">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main id="main">
          <Hero />
          <About />
          <Projects projects={projects} />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          <a href="#home" className="footer-brand">AP<span>.</span></a>
          <span>© {new Date().getFullYear()} Aaron Parker. Built with intention.</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
