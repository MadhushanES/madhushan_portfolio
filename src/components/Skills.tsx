import { resumeData } from "../data/resume";
import styles from "./Skills.module.css";

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.index}>01.</span> Technical Skills
        </h2>
        
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.skillList}>
                {items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
