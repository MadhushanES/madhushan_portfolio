import { resumeData } from "../data/resume";
import styles from "./Experience.module.css";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.index}>02.</span> Professional Experience
        </h2>
        
        <div className={styles.timeline}>
          {experience.map((job, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.logId}>[LOG_{1000 + idx}]::STATUS_OK</div>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>
                    {job.title} <span className={styles.company}>@ {job.company}</span>
                  </h3>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <ul className={styles.achievements}>
                  {job.achievements.map((achievement, aIdx) => (
                    <li key={aIdx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
