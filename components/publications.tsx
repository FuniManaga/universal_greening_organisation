"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Calendar, FileText, Newspaper, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

interface Publication {
  id: number;
  title: string;
  date: string;
  link: string;
  description: string; 
}

interface Publications {
  newsletters: Publication[];
  reports: Publication[];
  annualReports: Publication[];
}

const publications: Publications = {
  newsletters: [
    { id: 1, title: "Spring 2024 Newsletter", date: "March 2024", link: "/newsletters/spring-2024.pdf", description: "Highlights of our spring activities and upcoming events." },
    { id: 2, title: "Winter 2023 Newsletter", date: "December 2023", link: "/newsletters/winter-2023.pdf", description: "Year-end review and winter project updates." },
    { id: 3, title: "Fall 2023 Newsletter", date: "September 2023", link: "/newsletters/fall-2023.pdf", description: "Autumn initiatives and community engagement recap." },
    { id: 4, title: "Summer 2023 Newsletter", date: "June 2023", link: "/newsletters/summer-2023.pdf", description: "Highlights of our summer initiatives and community projects." },
  ],
  reports: [
    { id: 1, title: "Annual Impact Report 2023", date: "January 2024", link: "/reports/impact-2023.pdf", description: "Comprehensive overview of our achievements and impact in 2023." },
    { id: 2, title: "Sustainability Progress Report", date: "July 2023", link: "/reports/sustainability-2023.pdf", description: "Detailed analysis of our sustainability initiatives and outcomes." },
    { id: 3, title: "Community Engagement Summary", date: "April 2023", link: "/reports/community-2023.pdf", description: "Overview of our community outreach programs and their effects." },
    { id: 4, title: "Biodiversity Impact Study", date: "February 2023", link: "/reports/biodiversity-2023.pdf", description: "Comprehensive analysis of our biodiversity conservation efforts." },
  ],
  annualReports: [
    { id: 1, title: "Annual Report 2023", date: "March 2024", link: "/annual-reports/2023.pdf", description: "Comprehensive overview of our activities and achievements in 2023." },
    { id: 2, title: "Annual Report 2022", date: "March 2023", link: "/annual-reports/2022.pdf", description: "Detailed report on our progress and impact throughout 2022." },
  ]
};

const PublicationCard: React.FC<{ publication: Publication; index: number }> = ({ publication, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <Card className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg sm:text-xl text-gray-800 group-hover:text-green-600 transition-colors duration-300">{publication.title}</CardTitle>
        <div className="flex items-center text-sm sm:text-base text-gray-500 mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{publication.date}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm sm:text-base text-gray-600 mb-4">{publication.description}</p>
      </CardContent>
      <div className="p-4 pt-0 mt-auto">
        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300">
          <a href={publication.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filterAndSortPublications = (publicationList: Publication[]) => {
    return publicationList
      .filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 min-h-screen bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-green-800 tracking-tight">
        Universal Greening Organisation Publications
      </h1>
      <p className="text-lg sm:text-xl text-center text-gray-600 mb-8">
        Stay informed with our latest newsletters, reports, and annual publications
      </p>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">About Our Publications</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          At Universal Greening Organisation, we are committed to transparency and knowledge sharing. Our publications offer in-depth insights into our environmental initiatives, research findings, and community impact. From quarterly newsletters to comprehensive annual reports, our documents showcase our dedication to creating a greener, more sustainable world.
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          Explore our diverse range of publications to learn about our latest projects, scientific studies, and the positive changes we're making in communities around the globe. Whether you're a partner, supporter, or simply curious about our work, these resources provide valuable information about our mission and achievements.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <Input
          type="text"
          placeholder="Search publications..."
          className="mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="flex items-center bg-green-600 hover:bg-green-700 w-full sm:w-auto"
        >
          Sort by Date
          <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      <Tabs defaultValue="newsletters" className="space-y-8">
        <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 bg-white p-1 rounded-full shadow-sm">
          <TabsTrigger value="newsletters" className="px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition-all duration-300 data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            <Newspaper className="w-4 h-4 mr-2" /> Newsletters
          </TabsTrigger>
          <TabsTrigger value="reports" className="px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition-all duration-300 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800">
            <FileText className="w-4 h-4 mr-2" /> Reports
          </TabsTrigger>
          <TabsTrigger value="annualReports" className="px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition-all duration-300 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">
            <Calendar className="w-4 h-4 mr-2" /> Annual Reports
          </TabsTrigger>
        </TabsList>
        
        {(Object.entries(publications) as [keyof Publications, Publication[]][]).map(([tab, publicationList]) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filterAndSortPublications(publicationList).map((publication, index) => (
                <PublicationCard key={publication.id} publication={publication} index={index} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Publications;
