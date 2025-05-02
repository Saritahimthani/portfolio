import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="A showcase of my work, case studies, and experiments."
    >
      <main style={{ padding: '2rem' }}>
        <h1>My Projects</h1>
        <ul>
          <li>
            <h2>Project 1: Predicting Housing Prices</h2>
            <p>
              Built a regression model using scikit-learn to predict housing prices based on key features.
            </p>
            <Link to="https://github.com/yourusername/housing-prices">View on GitHub</Link>
          </li>
          <li>
            <h2>Project 2: Sentiment Analysis on Tweets</h2>
            <p>
              NLP pipeline for classifying tweet sentiments using BERT fine-tuning.
            </p>
            <Link to="https://github.com/yourusername/sentiment-analysis">View on GitHub</Link>
          </li>
          <li>
            <h2>Project 3: Customer Churn Dashboard</h2>
            <p>
              Interactive dashboard in Power BI to visualize churn trends and insights.
            </p>
            <Link to="https://github.com/yourusername/churn-dashboard">View on GitHub</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
