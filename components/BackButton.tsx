'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-green-500 hover:text-green-600 mb-4 inline-block"
    >
      &larr; Back
    </button>
  );
};

export default BackButton;

