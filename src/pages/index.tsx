import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hi, I’m {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Data Scientist | Machine Learning Enthusiast | Problem Solver
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects"
          >
            View My Projects 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}'s Portfolio`}
      description="Explore my work, skills, and projects as a data scientist."
    >
      <HomepageHeader />
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>About Me</h2>
        <p>
          I’m passionate about building data-driven solutions, exploring
          machine learning, and creating impact through technology.
        </p>
        <p>
          <Link to="/about">Learn more about me →</Link>
        </p>
      </main>
    </Layout>
  );
}
