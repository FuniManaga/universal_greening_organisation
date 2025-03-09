import React from 'react';

const ClientsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed opacity-90">
            Partnering with organizations worldwide to drive sustainable environmental solutions 
            and create lasting positive impact through innovative collaboration and shared commitment 
            to environmental stewardship.
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full px-4 py-8 md:py-12">
        {/* Current Clients Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-green-700">Client Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Client Cards */}
            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
              <h3 className="text-base font-semibold mb-3 text-gray-800">Environmental Organizations</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Conservation NGOs</li>
                <li>• Wildlife Protection Agencies</li>
                <li>• Environmental Research Institutes</li>
              </ul>
            </div>

            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
              <h3 className="text-base font-semibold mb-3 text-gray-800">Government Agencies</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Environmental Protection Departments</li>
                <li>• Natural Resource Management Offices</li>
                <li>• Agricultural Development Agencies</li>
              </ul>
            </div>

            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
              <h3 className="text-base font-semibold mb-3 text-gray-800">Educational Institutions</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Universities and Research Centers</li>
                <li>• Environmental Education Programs</li>
                <li>• Sustainability Research Institutes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-green-700">Impact Stories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border border-gray-200 rounded-lg bg-white">
              <h3 className="text-base font-semibold mb-2 text-gray-800">Sustainable Land Management</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Successful implementation of sustainable land management practices in partnership 
                with local communities and agricultural organizations.
              </p>
            </div>

            <div className="p-5 border border-gray-200 rounded-lg bg-white">
              <h3 className="text-base font-semibold mb-2 text-gray-800">Conservation Projects</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Collaborative efforts with wildlife protection agencies leading to successful 
                conservation initiatives and habitat preservation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-green-700">Partner With Us</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Join our growing network of partners committed to environmental sustainability. 
            Let's discuss how we can support your initiatives and create positive change together.
          </p>
          <button className="bg-green-700 text-white px-5 py-2 text-sm rounded-lg hover:bg-green-800 transition-colors">
            Get in Touch
          </button>
        </section>
      </div>
    </main>
  );
};

export default ClientsPage;

