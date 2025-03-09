import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supabase } from '@/lib/supabaseClient';

interface TreeData {
  latitude: number;
  longitude: number;
}

interface ProvinceData {
  name: string;
  count: number;
}

// Add these helper functions outside the component
const cache: Record<string, string> = {};

const rateLimiter = async () => {
  await new Promise(resolve => setTimeout(resolve, 250)); // 250ms between requests
};

const getLocationDetails = async (lat: number, lon: number): Promise<string> => {
  const cacheKey = `${lat},${lon}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    await rateLimiter();
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=8`,
      {
        headers: {
          'Accept-Language': 'en-US',
          'User-Agent': 'TreePlantingApp/1.0', // Add a user agent to be more respectful
        },
      }
    );
    const data = await response.json();
    const province = data.address?.state || 'Unknown';
    cache[cacheKey] = standardizeProvinceName(province);
    return cache[cacheKey];
  } catch (error) {
    console.error('Error fetching location:', error);
    return 'Unknown';
  }
};

const standardizeProvinceName = (province: string): string => {
  switch (province) {
    case 'Northern Cape Province': return 'Northern Cape';
    case 'Western Cape Province': return 'Western Cape';
    case 'Eastern Cape Province': return 'Eastern Cape';
    default:
      if (['Limpopo', 'Mpumalanga', 'Gauteng', 'North West', 'Free State', 
           'Northern Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Western Cape']
           .includes(province)) {
        return province;
      }
      return 'Others';
  }
};

const processBatchWithConcurrency = async (
  batch: TreeData[], 
  concurrency: number,
  onProgress: (count: number) => void
) => {
  const results: string[] = [];
  let completed = 0;

  for (let i = 0; i < batch.length; i += concurrency) {
    const chunk = batch.slice(i, i + concurrency);
    const chunkPromises = chunk.map(tree => 
      getLocationDetails(tree.latitude, tree.longitude)
    );

    const chunkResults = await Promise.all(chunkPromises);
    results.push(...chunkResults);
    
    completed += chunk.length;
    onProgress(completed);
  }

  return results;
};

const SouthAfricaTreePlantingGraph: React.FC = () => {
  const [plantingData, setPlantingData] = useState<ProvinceData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    fetchTreeData();
  }, []);

  const fetchTreeData = async () => {
    try {
      setIsLoading(true);
      setProgress(0);
      
      const { data, error } = await supabase
        .from('trees')
        .select('latitude, longitude');

      if (error) throw new Error(error.message);

      const batchSize = 25; // Increased batch size
      const concurrency = 4; // Number of concurrent requests
      const totalItems = data.length;
      const provinceCounts: Record<string, number> = {};

      for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        
        const provinces = await processBatchWithConcurrency(
          batch,
          concurrency,
          (completedCount) => {
            const totalCompleted = Math.min(i + completedCount, totalItems);
            setProgress(Math.round((totalCompleted / totalItems) * 100));
          }
        );

        provinces.forEach(province => {
          provinceCounts[province] = (provinceCounts[province] || 0) + 1;
        });
      }

      const provinceData: ProvinceData[] = Object.entries(provinceCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      setPlantingData(provinceData);
    } catch (error) {
      console.error('Error fetching tree data:', error);
      setError('Failed to fetch tree data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return (
    <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center">
      <div className="mb-4">Loading tree data...</div>
      <div className="w-64 h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">{progress}% complete</div>
    </div>
  );
  if (error) return <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white p-3 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-green-700">Trees Planted by Province</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={plantingData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fill: '#4a5568', fontSize: '0.75rem' }} angle={-45} textAnchor="end" height={60} />
          <YAxis tick={{ fill: '#4a5568', fontSize: '0.75rem' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '0.75rem' }} />
          <Bar dataKey="count" fill="#4CAF50" name="Trees Planted" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SouthAfricaTreePlantingGraph;
