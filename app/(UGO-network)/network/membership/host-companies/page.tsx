import React from 'react';

const HostCompaniesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Host Companies</h1>
      <p className="mb-4">
        Our network includes a variety of host companies that provide valuable opportunities for our members.
      </p>
      {/* TODO: Add a list or grid of host companies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example company card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Company Name</h2>
          <p className="text-gray-600 mb-4">Brief description of the company and its role in the network.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        {/* Add more company cards as needed */}
      </div>
    </div>
  );
};

export default HostCompaniesPage;

