import { resumeData } from "../data/resume";
import Image from "next/image";
import styles from "./Hero.module.css";
import React from "react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.terminalBody}>
            <h2 className={styles.greeting}>
              <span className={styles.prompt}>root@miraq:~#</span> ./greet.sh
            </h2>
            <h1 className={`${styles.name} ${styles.glitch}`} data-text={resumeData.name}>
              {resumeData.name}
            </h1>
            <h3 className={styles.title}>
              <span className={styles.typingEffect}>{resumeData.title}</span>
              <span className={styles.cursor}>_</span>
            </h3>
            <p className={styles.summary}>{resumeData.summary}</p>
            
            <div className={styles.actions}>
              <a href={`mailto:${resumeData.email}`} className={styles.btnPrimary}>
                [ Initiate_Contact ]
              </a>
              <a href={resumeData.links.linkedin} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                LinkedIn
              </a>
              <a href={resumeData.links.github} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.imageFrame}>
            <div className={styles.imageOverlay}></div>
            <Image 
              src="/profile.png" 
              alt={resumeData.name} 
              width={400} 
              height={400} 
              className={styles.profileImage}
              priority
            />
            <div className={styles.scanline}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.decorativeElements}>
        <div className={styles.glow} />
        <div className={styles.glowSecondary} />
      </div>
    </section>
  );
}
