import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UGO Fellowship Programme',
  description: 'Learn about the UGO Fellowship Programme and how to apply.',
};

const UGOFellowshipPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">UGO Fellowship Programme</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About the Programme</h2>
        <p>
          The UGO Fellowship Programme is designed to... [Add programme description here]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>Requirement 1</li>
          <li>Requirement 2</li>
          <li>Requirement 3</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p>
          To apply for the UGO Fellowship Programme, please follow these steps:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          For more information about the UGO Fellowship Programme, please contact us at:
          <br />
          Email: <a href="mailto:ugo-fellowship@example.com" className="text-blue-600 hover:underline">ugo-fellowship@example.com</a>
        </p>
      </section>
    </div>
  );
};

export default UGOFellowshipPage;
