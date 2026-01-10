import React from 'react';
import styles from './About.module.css';

const skills = [
  { category: 'Systems', items: ['Windows', 'Linux (Ubuntu/Debian)', 'Android ROMs', 'Docker'] },
  { category: 'SIEM & SOC Ops', items: ['Wazuh', 'Grafana', 'TheHive', 'Cortex', 'Cloudflare'] },
  { category: 'Offensive', items: ['Vuln. Assessment', 'Penetration Testing'] },
  { category: 'Hardware', items: ['PC Building', 'Troubleshooting'] },
];

export const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About</span>
          <div className={styles.sectionLine} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Exploring the boundaries of
            <br />
            <span className={styles.titleAccent}>Systems & Security</span>
          </h2>

          <p className={styles.description}>
            I am a Cybersecurity Engineering student at Polibatam with a deep passion about 
            <strong> Network Security</strong>, <strong>Pentesting</strong> and 
            <strong> System Customization</strong>.
            <br/><br/>
            Beyond my academic studies in Network Security, Penetration Testing and Digital Forensic. I am an Android Custom ROMs Enthusiast. I love exploring how operating systems work under the hood, optimizing systems, and building my own self-hosted solutions.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
