import React from 'react';
import Head from 'next/head';

const ResilientGreenPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resilient Green Programme</title>
        <meta name="description" content="Learn about our Resilient Green Programme" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Resilient Green Programme</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Programme</h2>
          <p className="mb-4">
            The Resilient Green Programme is designed to promote sustainable practices
            and environmental resilience in urban and rural areas.
          </p>
          <p>
            Through this initiative, we aim to create greener, more sustainable
            communities that can withstand environmental challenges while promoting
            biodiversity and ecological balance.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside">
            <li>Sustainable urban planning</li>
            <li>Green infrastructure development</li>
            <li>Community engagement in environmental projects</li>
            <li>Biodiversity conservation</li>
            <li>Climate change adaptation strategies</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default ResilientGreenPage;

