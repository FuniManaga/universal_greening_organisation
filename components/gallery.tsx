"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackgroundBeams } from "./ui/background-beams";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle, Calendar, MapPin, Users } from "lucide-react";

const Gallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: 'video1', title: 'UGO Reforestation Project', embedId: 'dQw4w9WgXcQ', date: '2023-05-15' },
    { id: 'video2', title: 'Sustainable Living Workshop', embedId: 'dQw4w9WgXcQ', date: '2023-07-22' },
    { id: 'video3', title: 'UGO Annual Conference Highlights', embedId: 'dQw4w9WgXcQ', date: '2023-09-10' },
    { id: 'video4', title: 'Urban Gardening Initiative', embedId: 'dQw4w9WgXcQ', date: '2023-11-05' },
  ];

  const events = [
    { id: 'event1', title: 'Tree Planting Day', imageUrl: '/images/tree-planting.jpg', date: '2024-04-22', location: 'Central Park', attendees: 150 },
    { id: 'event2', title: 'UGO Fundraising Gala', imageUrl: '/images/fundraising-gala.jpg', date: '2024-06-15', location: 'Grand Hotel', attendees: 200 },
    { id: 'event3', title: 'Environmental Awareness Workshop', imageUrl: '/images/workshop.jpg', date: '2024-08-10', location: 'Community Center', attendees: 75 },
    { id: 'event4', title: 'Beach Cleanup Drive', imageUrl: '/images/beach-cleanup.jpg', date: '2024-09-18', location: 'Sunset Beach', attendees: 100 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <BackgroundBeams />
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-green-600">UGO Gallery</h1>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Welcome to the Universal Greening Organisation's gallery, showcasing our impactful environmental initiatives and community events. 
          Explore our videos and event highlights to see how we're making a difference in creating a greener, more sustainable world.
        </p>
        
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger 
              value="videos"
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-600 text-sm sm:text-base"
            >
              YouTube Videos
            </TabsTrigger>
            <TabsTrigger 
              value="events"
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-600 text-sm sm:text-base"
            >
              Event Pictures
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300 border-green-200 hover:border-green-400">
                      <CardContent className="p-0 relative">
                        <img 
                          src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
                          alt={video.title} 
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <PlayCircle className="w-16 h-16 text-green-500" />
                        </div>
                      </CardContent>
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-green-600 transition-colors duration-300">{video.title}</CardTitle>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(video.date).toLocaleDateString()}
                        </p>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="group hover:shadow-xl transition-shadow duration-300 border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="group-hover:text-green-600 transition-colors duration-300">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">See More</a>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attendees
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
