"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building, Briefcase, User, ArrowRight, Globe, Info } from 'lucide-react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

const UGONetwork = () => {
  const [showMap, setShowMap] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-center text-green-800"
        >
          UGO Network
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-8 sm:mb-12"
        >
          Connecting for a sustainable future
        </motion.p>
        
        <div className="mb-8 text-center">
          <button 
            onClick={() => setShowSummary(!showSummary)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center mx-auto"
          >
            {showSummary ? 'Hide' : 'Show'} UGO Summary
            <Info className="ml-2 h-4 w-4" />
          </button>
        </div>

        {showSummary && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">About Universal Greening Organisation Network</h2>
            <p className="text-gray-700 leading-relaxed">
              The Universal Greening Organisation (UGO) Network is a global initiative dedicated to promoting environmental sustainability and green practices worldwide. We connect students, civil society organizations, companies, and individuals who are passionate about creating a greener future. Our network facilitates knowledge sharing, collaboration on eco-friendly projects, and the implementation of sustainable solutions across various sectors and communities.
            </p>
          </motion.div>
        )}
        
        <Tabs defaultValue="students" className="space-y-8 mt-8 sm:mt-0">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {['students', 'civil', 'companies', 'individuals'].map((tab) => (
              <TabsTrigger key={tab} value={tab} className="flex items-center justify-center space-x-2 py-2 px-3 sm:py-3 sm:px-4 bg-green-100 hover:bg-orange-100 transition-colors duration-300">
                {getTabIcon(tab)}
                <span className="hidden sm:inline">{getTabTitle(tab)}</span>
                <span className="sm:hidden">{getTabShortTitle(tab)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {['students', 'civil', 'companies', 'individuals'].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6 sm:mt-0">
              <Card className="border-t-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-white/30">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-green-700">{getTabTitle(tab)}</CardTitle>
                </CardHeader>
                <CardContent>
                  {tab === 'individuals' ? (
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Our network includes hundreds of dedicated individuals committed to environmental sustainability. Join us to make a difference!
                      </p>
                      <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
                        Join the Network
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                      {getTabContent(tab).map((item, index) => (
                        <li key={index} className="hover:text-orange-600 transition-colors duration-200">{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowMap(!showMap)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center mx-auto"
          >
            {showMap ? 'Hide' : 'Show'} Global Network Map
            <Globe className="ml-2 h-4 w-4" />
          </button>
        </div>

        {showMap && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">Global Network Map</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* Replace this div with an actual map component */}
              <div className="flex items-center justify-center text-gray-500">
                Interactive map placeholder
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2023 UGO Network. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">Privacy Policy</a>
            {' | '}
            <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const getTabIcon = (tab: string) => {
  const icons = {
    students: <Users className="h-5 w-5" />,
    civil: <Building className="h-5 w-5" />,
    companies: <Briefcase className="h-5 w-5" />,
    individuals: <User className="h-5 w-5" />,
  };
  return icons[tab as keyof typeof icons];
};

const getTabTitle = (tab: string) => {
  const titles = {
    students: 'Student Chapters',
    civil: 'Civil Society Organizations',
    companies: 'Host Companies',
    individuals: 'Individual Members',
  };
  return titles[tab as keyof typeof titles];
};

const getTabShortTitle = (tab: string) => {
  const shortTitles = {
    students: 'Students',
    civil: 'Civil',
    companies: 'Companies',
    individuals: 'Individuals',
  };
  return shortTitles[tab as keyof typeof shortTitles];
};

const getTabContent = (tab: string) => {
  const content = {
    students: [
      'University of Green Sciences Chapter',
      'Eco Tech Institute Chapter',
      'Sustainable Futures College Chapter',
    ],
    civil: [
      'Green Earth Alliance',
      'Sustainable Communities Network',
      'EcoAction Coalition',
    ],
    companies: [
      'EcoTech Solutions Inc.',
      'Green Energy Innovations Ltd.',
      'Sustainable Materials Co.',
    ],
    individuals: [],
  };
  return content[tab as keyof typeof content];
};

export default UGONetwork;
