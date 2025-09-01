import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Me"
      description="About Sarita Himthani - Data Scientist & Software Engineer">
      <header className={clsx('hero', styles.aboutHero)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>About Me</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.profileSection}>
              <div className={styles.profileImageContainer}>
                <img
                  className={styles.profileImage}
                  src="/portfolio/img/profile-photo.jpg"
                  alt="Sarita Himthani"
                />
              </div>
              <div className={styles.profileContent}>
                <h2 className={styles.profileName}>Sarita Himthani</h2>
                <p className={styles.profileLocation}>
                  <span className={styles.icon}>📍</span> New York, NY
                </p>
                <p className={styles.profileTagline}>Data Scientist & Software Engineer</p>
                <div className={styles.contactInfo}>
                  <p><span className={styles.icon}>📧</span> sarita.himthani@pace.edu</p>
                  <p><span className={styles.icon}>📱</span> +1 (551) 318-3824</p>
                </div>
                <div className={styles.socialLinks}>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    LinkedIn
                  </a>
                  <a href="https://github.com/saritahimthani" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    GitHub
                  </a>
                  <a href="https://www.kaggle.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    Kaggle
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.aboutContent}>
              <h2>Professional Summary</h2>
              <p>
                I am a Data Scientist and Software Engineer with over 7 years of professional experience 
                building enterprise-scale applications and driving data-driven insights. My unique journey 
                combines a strong business foundation with deep technical expertise, allowing me to bridge 
                the gap between complex data science concepts and practical business solutions.
              </p>
              <p>
                Currently pursuing a Master's in Information Systems with a concentration in Data Science 
                at Pace University (GPA: 3.9), I'm passionate about leveraging cutting-edge technologies 
                like machine learning, big data analytics, and artificial intelligence to solve real-world 
                problems. My diverse educational background—spanning entrepreneurship, computer applications, 
                and data science—gives me a holistic perspective on technology's role in business transformation.
              </p>

              <h2>What Sets Me Apart</h2>
              <div className={styles.highlightSection}>
                <div className={clsx(styles.highlight, styles.gradientCard)}>
                  <h3>Cross-Functional Expertise</h3>
                  <p>
                    My background in entrepreneurship commerce provides me with a unique understanding of 
                    business needs, enabling me to translate technical solutions into measurable business value.
                  </p>
                </div>
                <div className={clsx(styles.highlight, styles.gradientCard)}>
                  <h3>Full-Stack Capabilities</h3>
                  <p>
                    From front-end development to complex data pipelines, I bring end-to-end technical 
                    skills that allow me to see projects from conception to deployment.
                  </p>
                </div>
                <div className={clsx(styles.highlight, styles.gradientCard)}>
                  <h3>Continuous Learning</h3>
                  <p>
                    Currently expanding my expertise in advanced analytics, machine learning algorithms, 
                    and big data technologies while maintaining hands-on experience with the latest 
                    development frameworks.
                  </p>
                </div>
              </div>

              <h2>Technical Philosophy</h2>
              <p>
                I believe in building solutions that are not only technically sound but also user-centric 
                and business-focused. Whether I'm developing a machine learning model to predict customer 
                behavior or building a full-stack application, I prioritize clean code, scalability, and 
                meaningful impact.
              </p>
              
              <h2>Education</h2>
              <div className={styles.educationItem}>
                <h3>Master of Science in Information Systems</h3>
                <p className={styles.educationDetails}>
                  <strong>Pace University, Seidenberg School of Computer Science & Information Systems</strong><br />
                  Concentration: Data Science | GPA: 3.9<br />
                  Expected Graduation: December 2025
                </p>
                <p>
                  <strong>Coursework:</strong> Data Systems, Machine Learning, Mathematics, Artificial Intelligence, 
                  Big Data, Data Models
                </p>
              </div>
              
              <div className={styles.educationItem}>
                <h3>Post Graduate Diploma in Computer Application</h3>
                <p className={styles.educationDetails}>
                  <strong>RKDF University, India</strong><br />
                  Graduated: June 2023
                </p>
                <p>
                  <strong>Coursework:</strong> Object-oriented Programming, Software Engineering & Algorithms, 
                  CI/CD, SaaS, Microservices
                </p>
              </div>
              
              <div className={styles.educationItem}>
                <h3>Bachelor of Entrepreneurship Commerce with Honors</h3>
                <p className={styles.educationDetails}>
                  <strong>Barkatullah University, India</strong><br />
                  Graduated: June 2015
                </p>
                <p>
                  <strong>Coursework:</strong> Statistics, Digital Entrepreneurship, Advertising, 
                  Market Research & Analysis, Visual Basics
                </p>
              </div>
              
              <h2>Beyond the Code</h2>
              <p>
                When I'm not immersed in data sets or debugging code, I enjoy exploring the intersection 
                of technology and creativity. I'm passionate about staying current with emerging tech trends, 
                contributing to open-source projects, and sharing knowledge with the developer community. 
                I find inspiration in problem-solving challenges, whether they're algorithmic puzzles or 
                real-world business problems that require innovative technical solutions.
              </p>

              <h2>Looking Forward</h2>
              <p>
                I'm excited about the future of data science and software engineering, particularly in 
                areas like machine learning operations (MLOps), edge computing, and ethical AI. My goal 
                is to continue growing as a technologist while contributing to projects that make a 
                positive impact on businesses and communities.
              </p>

              <div className={clsx(styles.callToAction, styles.gradientBackground)}>
                <p className={styles.callToActionText}>
                  <em>Let's connect and explore how we can collaborate on your next data-driven project 
                  or innovative software solution.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}