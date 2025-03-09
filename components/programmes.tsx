import React from 'react';
import { ArrowRight, Calendar, Users, Target, Clock, MapPin } from 'lucide-react';

const programmes = [
  {
    title: "Shumani Future Village",
    description: "A sustainable community project focusing on eco-friendly living and agricultural innovations.",
    link: "/shumani-future-village",
    startDate: "2024-01-15",
    duration: "6 months",
    location: "Limpopo, South Africa",
    participants: 50,
    goal: "Sustainable Living"
  },
  {
    title: "UGO Fellowship",
    description: "An initiative to nurture the next generation of environmental leaders through mentorship and hands-on projects.",
    link: "/ugo-fellowship",
    startDate: "2024-02-15",
    duration: "3 months",
    location: "Johannesburg, South Africa",
    participants: 30,
    goal: "Environmental Leadership"
  },
  {
    title: "PH Omara Ojungu Outreach Program",
    description: "Community outreach program dedicated to environmental education and local sustainability projects.",
    link: "/ph-omara-ojungu-outreach",
    startDate: "2024-03-15",
    duration: "2 months",
    location: "KwaZulu-Natal, South Africa",
    participants: 20,
    goal: "Environmental Education"
  },
  {
    title: "Marubini Mugivhi WIL",
    description: "Work-integrated learning program focusing on practical skills in environmental management and sustainable development.",
    link: "/marubini-mugivhi-wil",
    startDate: "2024-04-15",
    duration: "4 months",
    location: "Mpumalanga, South Africa",
    participants: 40,
    goal: "Sustainable Development"
  }
];

const Programmes = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] animate-fade-in" />
      <div className="container relative mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800 animate-slide-up">
          Our <span className="text-green-500 animate-fade-in">Programmes</span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 animate-slide-up animation-delay-200">Discover our initiatives for a sustainable future</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programmes.map((programme, index) => (
            <div key={index} className="relative group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in animation-delay-300">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm rounded-bl-lg animate-slide-in-right">
                Featured
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{programme.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{programme.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-green-500" />
                    <span>Starts: {programme.startDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    <span>Duration: {programme.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span>{programme.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{programme.participants} Participants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Target className="w-4 h-4 mr-2 text-green-500" />
                    <span>Goal: {programme.goal}</span>
                  </div>
                </div>
                <a
                  href={programme.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 animate-pulse-slow"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded-lg transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;
