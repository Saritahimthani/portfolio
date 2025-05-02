import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Me"
      description="Learn more about who I am and what I do."
    >
      <main style={{ padding: '2rem' }}>
        <h1>About Me</h1>
        <p>
          Hi! I’m a data scientist passionate about solving real-world problems
          using machine learning, data analysis, and storytelling through data.
        </p>
        <p>
          I have experience in Python, SQL, scikit-learn, TensorFlow, and NLP
          techniques. I enjoy building interpretable models and deploying them to production.
        </p>
        <p>
          Outside of work, I love reading about AI ethics and volunteering in
          coding communities.
        </p>
      </main>
    </Layout>
  );
}
