import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './skills.module.css';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      'Python (NumPy, Pandas, Scikit-learn, TensorFlow, Matplotlib, Seaborn)',
      'R',
      'SQL',
      'Java',
      'C#',
      'C++',
      'JavaScript'
    ]
  },
  {
    title: 'Data Analysis & Visualization',
    skills: [
      'Tableau',
      'MS Forms',
      'Power BI',
      'Excel (Pivot Tables, VLOOKUP)',
      'Jupyter Notebooks',
      'Google Analytics'
    ]
  },
  {
    title: 'Database Technologies',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Oracle',
      'Redis',
      'Apache Cassandra',
      'Hive'
    ]
  },
  {
    title: 'Big Data & Cloud',
    skills: [
      'AWS (S3, Redshift, EMR)',
      'Apache Spark',
      'Hadoop',
      'Azure Data Factory',
      'Google BigQuery',
      'Elastic Search',
      'ETL',
      'GCP'
    ]
  },
  {
    title: 'Machine Learning',
    skills: [
      'Linear Regression',
      'Logistic Regression',
      'Classification',
      'SVM',
      'Clustering',
      'Time Series Analysis',
      'NLP',
      'Deep Learning'
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      'Git',
      'Docker',
      'Jenkins',
      'JIRA',
      'VS Code',
      'PyCharm'
    ]
  },
  {
    title: 'User Interface & Content Tools',
    skills: [
      'HTML',
      'CSS3',
      'Bootstrap',
      'Angular'
    ]
  },
  {
    title: 'Automation Tools',
    skills: [
      'SharePoint site',
      'MS Power Automate'
    ]
  }
];

type Certification = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    name: 'Google Digital',
    issuer: 'Google',
    url: '#'
  },
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    url: '#'
  },
  {
    name: 'Hacker Rank SQL Certified',
    issuer: 'HackerRank',
    url: '#'
  }
];

export default function Skills(): JSX.Element {
  return (
    <Layout
      title="Skills & Certifications"
      description="Technical Skills and Certifications of Sarita Himthani">
      <header className={clsx('hero hero--primary', styles.skillsHero)}>
        <div className="container">
          <h1 className="hero__title">Skills & Certifications</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <section className={styles.skillsSection}>
              <h2 className={styles.sectionTitle}>Technical Skills</h2>
              
              <div className={styles.skillsGrid}>
                {skillCategories.map((category, index) => (
                  <div key={index} className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <ul className={styles.skillsList}>
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className={styles.skillItem}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            <section className={styles.certificationsSection}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              
              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <div key={index} className={styles.certificationCard}>
                    <h3 className={styles.certificationName}>{cert.name}</h3>
                    <p className={styles.certificationIssuer}>Issued by {cert.issuer}</p>
                    {cert.date && (
                      <p className={styles.certificationDate}>{cert.date}</p>
                    )}
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
            
            <section className={styles.skillsVisualization}>
              <h2 className={styles.sectionTitle}>Skills Visualization</h2>
              <div className={styles.chartContainer}>
                <p className={styles.chartPlaceholder}>
                  This section will contain interactive charts and visualizations of skills.
                  Consider implementing this with Chart.js, D3.js, or Recharts once the basic
                  portfolio structure is in place.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}