"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient';
import TreePlantingForm from '@/components/TreePlantingForm';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from 'react-responsive';
import { FaTree, FaLeaf, FaUsers, FaMapMarkerAlt, FaChartPie, FaListUl } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useQuery, useQueries } from 'react-query';
import SouthAfricaTreePlantingGraph from '@/components/SouthAfricaTreePlantingGraph';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import CookieConsent from '@/components/CookieConsent';

const DynamicTreePlantingMap = dynamic(() => import('@/components/TreeplantingMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const GOAL = 1000000; // 1 million trees

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 flex items-center border border-gray-100 hover:border-green-200 transition-all duration-300"
  >
    <div className="bg-green-600 text-white rounded-lg sm:rounded-xl p-3 sm:p-4 mr-3 sm:mr-5">
      {icon}
    </div>
    <div>
      <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  </motion.div>
);

const WelcomeDashboard = () => {
  const [treeCount, setTreeCount] = useState(0);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [participantCount, setParticipantCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTrees, setAllTrees] = useState<any[]>([]);
  const { toast } = useToast();
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isMedium = useMediaQuery({ query: '(max-width: 1024px)' });

  const { data: recentPlantingsPages, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'recentPlantings',
    async ({ pageParam = 0 }) => {
      const { data, error } = await supabase
        .from('trees')
        .select('*')
        .order('created_at', { ascending: false })
        .range(pageParam, pageParam + 19);
      if (error) throw error;
      return data;
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.length === 20 ? pages.length * 20 : undefined,
    }
  );

  const recentPlantings = recentPlantingsPages?.pages.flat() || [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  useEffect(() => {
    fetchTreeCount();
    fetchAllTrees();
    fetchSpeciesAndParticipants();

    const channel = supabase
      .channel('tree_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'trees' }, () => {
        fetchTreeCount();
        fetchAllTrees();
        fetchSpeciesAndParticipants();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTreeCount = async () => {
    const { count, error } = await supabase
      .from('trees')
      .select('*', { count: 'exact' });

    if (error) {
      console.error('Error fetching tree count:', error);
    } else {
      setTreeCount(count || 0);
    }
  };

  const fetchAllTrees = async () => {
    const { data, error } = await supabase
      .from('trees')
      .select('*');

    if (error) {
      console.error('Error fetching all trees:', error);
    } else {
      setAllTrees(data || []);
    }
  };

  const fetchSpeciesAndParticipants = async () => {
    const { data, error } = await supabase
      .from('trees')
      .select('species, planter_name');

    if (error) {
      console.error('Error fetching species and participants:', error);
    } else if (data) {
      const uniqueSpecies = new Set(data.map(tree => tree.species).filter(Boolean));
      const uniqueParticipants = new Set(data.map(tree => tree.planter_name).filter(Boolean));
      
      setSpeciesCount(uniqueSpecies.size);
      setParticipantCount(uniqueParticipants.size);
    }
  };

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}m ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)}d ago`;
    }
  };

  const progress = (treeCount / GOAL) * 100;

  const pieData = [
    { name: 'Planted', value: treeCount },
    { name: 'Remaining', value: GOAL - treeCount },
  ];

  const COLORS = ['#4ade80', '#f87171'];

  const renderCustomizedLabel = ({ 
    cx, 
    cy, 
    midAngle, 
    innerRadius, 
    outerRadius, 
    percent 
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const fetchLocation = async (lat: number, lon: number) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    return data.display_name;
  };

  // Optimize location queries
  const locationQueries = useQueries(
    recentPlantings.map(tree => ({
      queryKey: ['location', tree.latitude, tree.longitude],
      queryFn: () => fetchLocation(tree.latitude, tree.longitude),
      enabled: !!tree.latitude && !!tree.longitude,
      staleTime: Infinity, // Cache the result indefinitely
      cacheTime: 1000 * 60 * 60 * 24, // Keep in cache for 24 hours
    }))
  );

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
      <motion.div 
        className="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white text-gray-900 p-4 sm:p-6 md:p-10 relative overflow-hidden border-b">
          <div className="relative z-10 flex flex-col items-center">
            <Image 
              src="/ugo.png"
              alt="UGO Logo"
              width={80}
              height={80}
              className="mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900">
              UGO Tree Planting Tracker
            </h1>
            <p className="text-center mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-600 font-light">
              Together, we're making the world greener
            </p>
          </div>
        </div>

        <CardContent className="p-4 sm:p-6 md:p-10">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-6 sm:mb-10 bg-gray-50 p-1.5 rounded-2xl">
              <TabsTrigger 
                value="overview" 
                className="text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
              >
                <FaChartPie className="mr-1 sm:mr-2" /> Overview
              </TabsTrigger>
              <TabsTrigger 
                value="recent"
                className="text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
              >
                <FaListUl className="mr-1 sm:mr-2" /> Recent Plantings
              </TabsTrigger>
              <TabsTrigger 
                value="map"
                className="text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-1 sm:mr-2" /> Map View
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab Content */}
            <TabsContent value="overview">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <StatCard icon={<FaTree />} title="Trees Planted" value={treeCount.toLocaleString()} />
                  <StatCard icon={<FaLeaf />} title="Species" value={speciesCount} />
                  <StatCard icon={<FaUsers />} title="Participants" value={participantCount} />
                </div>

                {/* Progress Section */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">
                    Progress Towards Goal
                  </h2>
                  <Progress 
                    value={progress} 
                    className="h-4 sm:h-6 bg-gray-200 [&>div]:bg-green-600"
                  />
                  <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
                    <span>0</span>
                    <span className="font-medium text-green-600">{progress.toFixed(1)}% Complete</span>
                    <span>{GOAL.toLocaleString()}</span>
                  </div>
                </div>

                {/* Graph Section */}
                <div className="bg-white rounded-lg shadow p-3 sm:p-4 md:p-6">
                  <SouthAfricaTreePlantingGraph />
                </div>

                {/* Pie Chart Section */}
                <div className="bg-white rounded-lg shadow p-3 sm:p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-green-700">
                    Visual Progress
                  </h3>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full md:w-3/5 h-[200px] sm:h-[250px] md:h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={isMobile ? 60 : isMedium ? 80 : 100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => value.toLocaleString()} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-full md:w-2/5 text-center md:text-left">
                      <p className="text-lg md:text-xl font-bold text-green-600">{treeCount.toLocaleString()}</p>
                      <p className="text-xs md:text-sm text-gray-600">Trees Planted</p>
                      <p className="text-lg md:text-xl font-bold text-red-400 mt-3 md:mt-4">{(GOAL - treeCount).toLocaleString()}</p>
                      <p className="text-xs md:text-sm text-gray-600">Trees Remaining</p>
                      <p className="text-base md:text-lg font-semibold text-blue-500 mt-3 md:mt-4">{GOAL.toLocaleString()}</p>
                      <p className="text-xs md:text-sm text-gray-600">Total Goal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="recent">
              <ScrollArea className="h-[600px] rounded-xl border-0 bg-gray-50/50 p-4">
                <ul className="space-y-4">
                  {recentPlantings.map((tree, index) => (
                    <motion.li
                      key={tree.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/tree-tracker/tree/${tree.id}`}>
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${tree.planter_name || 'Anonymous'}`} />
                              <AvatarFallback>{tree.planter_name ? tree.planter_name.charAt(0) : 'A'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="text-base font-semibold text-green-700 truncate">
                                  {tree.planter_name || 'Anonymous'}
                                </h3>
                                <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
                                  {formatRelativeTime(new Date(tree.created_at))}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 truncate">{tree.organization || 'Unknown Organization'}</p>
                            </div>
                          </div>
                          <Separator className="my-3" />
                          <div className="flex items-center justify-between text-sm">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              {tree.species}
                            </Badge>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center text-gray-500">
                                <FaMapMarkerAlt className="mr-1" />
                                <span>
                                  {locationQueries[index]?.isLoading
                                    ? 'Loading location...'
                                    : locationQueries[index]?.data || 'Unknown Location'}
                                </span>
                              </div>
                              {tree.latitude && tree.longitude && (
                                <a
                                  href={`https://www.google.com/maps/dir/?api=1&destination=${tree.latitude},${tree.longitude}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-600 hover:text-green-700 underline text-sm ml-2"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Get Directions
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="map">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h2 className="text-xl font-semibold mb-4 text-green-700">Tree Planting Locations</h2>
                <div className="bg-white rounded-lg shadow p-2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <DynamicTreePlantingMap plantings={allTrees} />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto mt-6 flex justify-end">
        <motion.button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-xl text-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaTree className="mr-3 text-xl" />
          Register a Tree
        </motion.button>
      </div>

      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="max-h-[100vh] w-full md:w-[600px] overflow-y-auto"> 
          <AlertDialogHeader>
          </AlertDialogHeader>
          <TreePlantingForm
            onSubmit={async (data) => {
              const { error } = await supabase.from('trees').insert(data);
              if (error) {
                console.error('Error adding tree:', error);
                toast({
                  title: "Error",
                  description: "Failed to add tree. Please try again.",
                  variant: "destructive",
                });
              } else {
                toast({
                  title: "Success",
                  description: "Congratulations! You just planted a tree! 🌳",
                });
                setIsModalOpen(false);
              }
            }}
            onCancel={() => setIsModalOpen(false)}
          />
        </AlertDialogContent>
      </AlertDialog>

      <Toaster />
      <CookieConsent />
    </div>
  );
};

export default WelcomeDashboard;
