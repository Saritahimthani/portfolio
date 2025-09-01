import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './experience.module.css';

type ExperienceItem = {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
};

const workExperience: ExperienceItem[] = [
  {
    company: 'NYC Dept. of Housing Preservation & Development',
    location: 'New York, NY',
    position: 'Applied Data Scientist Intern',
    period: 'February 2025 – Present',
    responsibilities: [
      'Analyze housing application queries and historical datasets using Python, and ODBC, SQL to analyze, uncover trends, support internal reporting, and inform data-driven housing policy initiatives across multiple HPD divisions.',
      'Collaborate with strategic planning teams to translate complex housing data into clear insights, ensuring timely reporting and contributing to the design of the use cases for operational improvement.'
    ]
  },
  {
    company: 'Innovecture Pvt. Ltd., Marsh Digital Labs',
    location: 'Phoenix, AZ',
    position: 'Associate Technical Lead',
    period: 'June 2018 – December 2023',
    responsibilities: [
      'Led development of data-driven features using Angular & RESTful APIs, creating automated data validation frameworks & implementing data monitoring solutions that improved data accuracy & system scalability by 50%.',
      'Engineered Tesla\'s insurance portal systems for international markets, building robust data validation frameworks & API integrations that improved data accuracy & platform scalability, optimizing policy-making to increase customer satisfaction.'
    ]
  },
  {
    company: 'Prohaktiv Inc',
    location: 'Aliso Viejo, CA',
    position: 'Software Engineer',
    period: 'June 2016 - May 2018',
    responsibilities: [
      'Built full-stack features in Angular, including marketing automation with MailChimp API & RESTful integrations, increasing engagement by 60% & reducing data retrieval time by 40% for 100K+ monthly customer interactions.',
      'Developed Angular-based document management & notification system handling 50K+ assets, implementing advanced search algorithms that improved delivery success rate by 25% & reduced retrieval time by 45%.'
    ]
  }
];

type ProjectItem = {
  title: string;
  period: string;
  technologies: string;
  description: string[];
};

const projects: ProjectItem[] = [
  {
    title: 'Computer System Design & Development with CaterPal Technologies',
    period: 'March 2025',
    technologies: 'Python, Flask, OpenAI API, Streamlit',
    description: [
      'Conceptualized & designed an NLP-infused AI chatbot for a catering startup in a team of 4, allowing seamless customer interaction & enhanced engagement, presenting solutions to CaterPal leadership & securing 1st place among 5 competing teams.',
      'Engineered user-friendly chatbot interface with Streamlit, optimizing communication efficiency for users, & enabling tailored menu recommendations integrated with client websites based on user inputs, including budget & dietary restrictions.'
    ]
  },
  {
    title: 'ShopGPT',
    period: 'October 2024',
    technologies: 'Python, OpenAI API, Streamlit',
    description: [
      'Developed AI-powered shopping assistant chatbot using OpenAI\'s GPT model integrated with Streamlit interface, building backend using Python & integrating OpenAI API, enabling chatbot to handle 500+ queries daily with 95% response accuracy.'
    ]
  }
];

export default function Experience(): JSX.Element {
  return (
    <Layout
      title="Experience"
      description="Professional Experience of Sarita Himthani">
      <header className={clsx('hero hero--primary', styles.experienceHero)}>
        <div className="container">
          <h1 className="hero__title">Professional Experience</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <section className={styles.experienceSection}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              
              <div className={styles.timeline}>
                {workExperience.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <div className={styles.jobHeader}>
                        <h3 className={styles.jobTitle}>{item.position}</h3>
                        <span className={styles.jobPeriod}>{item.period}</span>
                      </div>
                      <div className={styles.companyInfo}>
                        <span className={styles.companyName}>{item.company}</span>
                        <span className={styles.companyLocation}>{item.location}</span>
                      </div>
                      <ul className={styles.responsibilitiesList}>
                        {item.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className={styles.experienceSection}>
              <h2 className={styles.sectionTitle}>Projects & Experiential Learning</h2>
              
              <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                  <div key={index} className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <span className={styles.projectPeriod}>{project.period}</span>
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techLabel}>Technologies:</span> {project.technologies}
                    </div>
                    <ul className={styles.projectDescription}>
                      {project.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            <section className={styles.experienceSection}>
              <h2 className={styles.sectionTitle}>Extracurricular Activities</h2>
              
              <div className={styles.extracurricularItem}>
                <div className={styles.extracurricularHeader}>
                  <h3>Pace Data Science Club, NYC</h3>
                  <span className={styles.extracurricularRole}>Core Member</span>
                  <span className={styles.extracurricularPeriod}>October 2024 – Present</span>
                </div>
                <ul className={styles.extracurricularList}>
                  <li>
                    Conducted exploratory data analysis (EDA) on Titanic dataset using Python (Pandas, NumPy), 
                    identifying survival patterns through statistical analysis & creating visualizations using 
                    Seaborn & Matplotlib to reveal passenger demographics & survival correlations.
                  </li>
                  <li>
                    Developed & launched static website with intuitive & responsive UI, increasing traffic by 
                    50% increase & enhancing user experience.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}