"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, Users, Building } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
  type: 'NGO' | 'Corporate' | 'Government';
  impact: string;
}

interface Partners {
  affiliations: Partner[];
  stakeholders: Partner[];
}

const partners: Partners = {
  affiliations: [
    { 
      name: "Green Earth Alliance", 
      logo: "/logos/gea.png",
      description: "A global network of environmental organizations working together for a sustainable future.",
      website: "https://greenearth.org",
      type: "NGO",
      impact: "Planted over 1 million trees worldwide"
    },
    { 
      name: "Sustainable Futures Institute", 
      logo: "/logos/sfi.png",
      description: "Research institute dedicated to developing innovative solutions for environmental challenges.",
      website: "https://sustainablefutures.edu",
      type: "NGO",
      impact: "Developed 5 breakthrough green technologies"
    },
    { 
      name: "EcoTech Solutions", 
      logo: "/logos/ecotech.png",
      description: "Leading provider of eco-friendly technologies for businesses and communities.",
      website: "https://ecotechsolutions.com",
      type: "Corporate",
      impact: "Reduced carbon emissions by 500,000 tons annually"
    },
  ],
  stakeholders: [
    { 
      name: "Ministry of Environment", 
      logo: "/logos/moe.png",
      description: "Government body responsible for environmental policies and regulations.",
      website: "https://moe.gov",
      type: "Government",
      impact: "Implemented nationwide recycling program"
    },
    { 
      name: "Global Climate Fund", 
      logo: "/logos/gcf.png",
      description: "International fund supporting climate change mitigation and adaptation projects.",
      website: "https://globalclimatefund.org",
      type: "NGO",
      impact: "Funded $2 billion in climate projects"
    },
    { 
      name: "Renewable Energy Association", 
      logo: "/logos/rea.png",
      description: "Industry association promoting the adoption of renewable energy technologies.",
      website: "https://renewables.org",
      type: "Corporate",
      impact: "Increased renewable energy usage by 30% in member companies"
    },
  ]
};

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => (
  <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
    <CardHeader className="bg-white p-6">
      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-100 shadow-md">
        <AvatarImage src={partner.logo} alt={partner.name} />
        <AvatarFallback className="text-2xl font-bold bg-gray-100 text-gray-800">
          {partner.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <CardTitle className="text-xl text-center text-gray-800">{partner.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <p className="text-gray-600 mb-4">{partner.description}</p>
      <div className="flex items-center justify-between mb-4">
        {partner.type === 'NGO' && <Leaf className="text-green-500" />}
        {partner.type === 'Corporate' && <Building className="text-blue-500" />}
        {partner.type === 'Government' && <Users className="text-purple-500" />}
        <span className="text-sm font-medium">{partner.type}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">Impact: {partner.impact}</p>
      <Button asChild variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

const Partners: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-green-600">
          Our Partners
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Collaborating for a sustainable future
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
          <p className="text-green-700">
            At Universal Greening Organisation, we're proud to work with a diverse network of partners 
            committed to environmental sustainability. Our affiliations span NGOs, research institutes, 
            and eco-friendly businesses, while our stakeholders include government bodies and industry 
            associations. Together, we're driving innovation, shaping policy, and making a tangible 
            impact on our planet's future.
          </p>
        </div>
        
        <Tabs defaultValue="affiliations" className="space-y-8">
          <TabsList className="flex justify-center space-x-4 mb-8">
            <TabsTrigger 
              value="affiliations" 
              className="px-6 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
            >
              Affiliations
            </TabsTrigger>
            <TabsTrigger 
              value="stakeholders" 
              className="px-6 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
            >
              Stakeholders
            </TabsTrigger>
          </TabsList>
          
          {(Object.entries(partners) as [keyof Partners, Partner[]][]).map(([tab, partnerList]) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partnerList.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Partners;
