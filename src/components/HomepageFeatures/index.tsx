import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Data Science',
    Svg: require('@site/static/img/data-science-icon.svg').default,
    description: (
      <>
        Experienced in Python, R, and SQL for data analysis, machine learning, 
        and statistical modeling. Proficient with libraries like NumPy, Pandas, 
        Scikit-learn, and TensorFlow.
      </>
    ),
  },
  {
    title: 'Software Engineering',
    Svg: require('@site/static/img/software-engineering-icon.svg').default,
    description: (
      <>
        Full stack developer with experience in Angular, JavaScript, and RESTful APIs.
        Led development teams and built enterprise-scale applications with robust
        data validation frameworks.
      </>
    ),
  },
  {
    title: 'Big Data & Cloud',
    Svg: require('@site/static/img/cloud-computing-icon.svg').default,
    description: (
      <>
        Skilled in AWS, Apache Spark, Hadoop, and other big data technologies.
        Experience with cloud platforms and database technologies including MySQL, 
        PostgreSQL, MongoDB, and more.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}