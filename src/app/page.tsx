import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import styles from "./page.module.css";
import { resumeData } from "../data/resume";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#">MESP</a>
          </div>
          <div className={styles.navLinks}>
            <a href="#skills">01. Skills</a>
            <a href="#experience">02. Experience</a>
            <a href="#education">03. Education</a>
          </div>
        </nav>
      </header>
      
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Built by {resumeData.name}</p>
          <p className={styles.techStack}>Powered by Next.js & Vanilla CSS</p>
          <div className={styles.footerLinks}>
            <a href={`mailto:${resumeData.email}`}>Email</a>
            <a href={resumeData.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={resumeData.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
