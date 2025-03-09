import React from 'react';
import Head from 'next/head';

const EcoLearnPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>EcoLearn Programme</title>
        <meta name="description" content="Learn about sustainability and eco-friendly practices with EcoLearn" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to EcoLearn</h1>
        <p className="mb-4">
          EcoLearn is an innovative programme designed to educate and inspire individuals about sustainability and eco-friendly practices.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Programme Overview</h2>
          <ul className="list-disc list-inside">
            <li>Interactive lessons on environmental topics</li>
            <li>Hands-on projects to apply eco-friendly concepts</li>
            <li>Community challenges to promote sustainable living</li>
            <li>Expert-led webinars and discussions</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">
            Ready to embark on your eco-learning journey? Join EcoLearn today and become a champion for sustainability!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
};

export default EcoLearnPage;

