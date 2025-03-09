"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaImage, FaSearch } from 'react-icons/fa';

interface Picture {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// You might want to replace this with actual data fetching logic
const getPictures = async (): Promise<Picture[]> => {
  // Simulated data
  return [
    { id: 1, src: '/gallery/image1.jpg', alt: 'Community garden project', category: 'Projects' },
    { id: 2, src: '/gallery/image2.jpg', alt: 'Tree planting event', category: 'Events' },
    { id: 3, src: '/gallery/image3.jpg', alt: 'Environmental workshop', category: 'Education' },
    { id: 4, src: '/gallery/image4.jpg', alt: 'Recycling initiative', category: 'Projects' },
    { id: 5, src: '/gallery/image5.jpg', alt: 'Youth leadership program', category: 'Events' },
    { id: 6, src: '/gallery/image6.jpg', alt: 'Sustainable farming', category: 'Projects' },
  ];
};

const PicturesGalleryPage = () => {
  const [pictures, setPictures] = React.useState<Picture[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('All');

  React.useEffect(() => {
    const loadPictures = async () => {
      const data = await getPictures();
      setPictures(data);
      setLoading(false);
    };
    loadPictures();
  }, []);

  const categories = ['All', 'Projects', 'Events', 'Education'];
  const filteredPictures = filter === 'All' 
    ? pictures 
    : pictures.filter(pic => pic.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-green-600 via-green-700 to-green-900">
        <div className="absolute inset-0">
          <Image
            src="/gallery/hero.jpg"
            alt="UGO Image Gallery"
            fill
            priority
            className="object-cover mix-blend-overlay opacity-30"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 to-green-950/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-block text-green-200 text-sm font-medium">
                Universal Greening Organisation
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Image Gallery
              </h1>
              <p className="text-base md:text-lg text-green-100 max-w-2xl leading-relaxed">
                Capturing our journey towards environmental sustainability
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filteredPictures.map((picture, index) => (
              <motion.div
                key={picture.id}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={picture.src}
                  alt={picture.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{picture.alt}</p>
                    <span className="text-green-200 text-xs">{picture.category}</span>
                  </div>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <FaSearch className="w-4 h-4 text-gray-700" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PicturesGalleryPage;

