import { resumeData } from "../data/resume";
import styles from "./Education.module.css";

export default function Education() {
  const { education, certifications } = resumeData;

  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Education Column */}
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.index}>03.</span> Education
            </h2>
            <div className={styles.cards}>
              {education.map((edu, idx) => (
                <div key={idx} className={styles.card}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.institution}>{edu.institution}</div>
                  <div className={styles.detailsRow}>
                    <span className={styles.details}>{edu.details}</span>
                    <span className={styles.years}>{edu.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.index}>04.</span> Certifications
            </h2>
            <div className={styles.cards}>
              {certifications.map((cert, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.certHeader}>
                    <h3 className={styles.certTitle}>{cert.title}</h3>
                    <div className={styles.certIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 15l-2 5-9-5 9-5 2 5z"></path>
                        <path d="M10 10l5-2 5 2-5 9-5-9z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.certIssuer}>{cert.issuer}</div>
                  {cert.deadline && <div className={styles.certDeadline}>{cert.deadline}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
