import { Suspense } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaMapMarkerAlt, FaCalendar, FaUser, FaBuilding } from 'react-icons/fa';
import BackButton from '@/components/BackButton';


// Add these constants at the top of your file
const SUPABASE_PROJECT_ID = 'twogbejuofvguqxwcbrh'; // Replace with your actual Supabase project ID
const SUPABASE_STORAGE_BUCKET = 'tree-images'; // Replace with your actual storage bucket name

async function getTreeDetails(id: string) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from('trees')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching tree details:', error);
    return null;
  }

  return data;
}

// Helper function to construct the full image URL
function getImageUrl(imagePath: string) {
  if (!imagePath) return null;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}/${imagePath}`;
}

async function getLocationName(latitude: number, longitude: number) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
      {
        headers: {
          'User-Agent': 'TreePlanting/1.0' // It's good practice to identify your application
        }
      }
    );
    const data = await response.json();
    return data.display_name || `${latitude}, ${longitude}`;
  } catch (error) {
    console.error('Error fetching location name:', error);
    return `${latitude}, ${longitude}`;
  }
}

export default async function TreeDetails({ params }: { params: { id: string } }) {
  const tree = await getTreeDetails(params.id);

  if (!tree) {
    return <div>Tree not found or error occurred.</div>;
  }

  const imageUrl = getImageUrl(tree.image_path);
  const locationName = await getLocationName(tree.latitude, tree.longitude);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4 md:p-8 relative">
      <BackButton />
      
      <Card className="max-w-4xl mx-auto mt-16 overflow-hidden shadow-2xl">
        <CardHeader className="bg-green-600 text-white p-6">
          <CardTitle className="text-3xl md:text-4xl font-bold">Tree Details</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">{tree.species}</h2>
              <div className="space-y-3">
                <p className="flex items-center text-gray-700"><FaUser className="mr-3 text-green-600" /> <span className="font-medium">Planted by:</span> <span className="ml-2">{tree.planter_name || 'Anonymous'}</span></p>
                <p className="flex items-center text-gray-700"><FaBuilding className="mr-3 text-green-600" /> <span className="font-medium">Organization:</span> <span className="ml-2">{tree.organization || 'Unknown'}</span></p>
                <p className="flex items-center text-gray-700"><FaCalendar className="mr-3 text-green-600" /> <span className="font-medium">Planted on:</span> <span className="ml-2">{new Date(tree.created_at).toLocaleDateString()}</span></p>
                <p className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-green-600" /> 
                  <span className="font-medium">Location:</span> 
                  <span className="ml-2 break-words">{locationName}</span>
                </p>
              </div>
              <div className="mt-6">
                <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">{tree.species}</Badge>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`${tree.species} tree`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
