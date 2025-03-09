"use client";
import React, { useState, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast'; 
import { toast } from '@/hooks/use-toast';// Updated import for toast
import { X, Loader2, Camera, MapPin, Trees} from 'lucide-react'; // Added Loader2 for loading state
import { supabase } from '@/lib/supabaseClient';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // Assuming a Card component exists
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuidv4 } from 'uuid'; // Add this import
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaTree, FaMapMarkerAlt, FaUser, FaBuilding } from 'react-icons/fa';
import { MdCloudUpload } from 'react-icons/md';


interface TreePlantingFormProps {
  onSubmit: (data: any) => Promise<void>; // Add this line
  onCancel: () => void; // Add this line
}

const treeSpecies = [
  "Oak", "Maple", "Pine", "Birch", "Elm", "Ash", "Beech", "Cedar", "Fir", "Spruce"
];

const TreePlantingForm: React.FC<TreePlantingFormProps> = ({ onCancel, onSubmit }) => {
  const [formState, setFormState] = useState({
    latitude: '',
    longitude: '',
    species: '',
    planterName: '', // Added planterName
    organization: '', // Added organization
    email: '', // Added email field
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ 
    latitude?: string; 
    longitude?: string; 
    species?: string; 
    planterName?: string; 
    organization?: string; 
    image?: string; // Add image validation
    email?: string; // Added email error field
  }>({}); // Specify the type for errors
  const [image, setImage] = useState<File | null>(null); // Added state for image
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Memoize the validateForm function
  const validateForm = useMemo(() => {
    return () => {
      const { latitude, longitude, species, planterName, organization, email } = formState;
      const newErrors: { [key: string]: string } = {};

      if (!latitude.trim()) newErrors.latitude = "Latitude is required";
      if (!longitude.trim()) newErrors.longitude = "Longitude is required";
      if (!species.trim()) newErrors.species = "Species is required";
      if (!planterName.trim()) newErrors.planterName = "Planter name is required";
      if (!organization.trim()) newErrors.organization = "Organization is required";
      if (!image) newErrors.image = "Image is required";
      if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email format";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  }, [formState, image]);

  // Memoize the handleChange function
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      confirmPlanting();
    }
  };

  const confirmPlanting = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const { latitude, longitude, species, planterName, organization, email } = formState;
      const parsedLatitude = parseFloat(latitude);
      const parsedLongitude = parseFloat(longitude);

      let imagePath = null;
      let imageType = null;
      if (image) {
        const fileExt = image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;

        // Simplified upload without progress tracking
        const { data, error } = await supabase.storage
          .from('tree-images')
          .upload(fileName, image);
        
        if (error) {
          throw error;
        } else {
          imagePath = data.path;
          imageType = fileExt;
        }
      }

      const newTree = {
        species,
        latitude: parsedLatitude,
        longitude: parsedLongitude,
        date_planted: new Date().toISOString(),
        image_path: imagePath,
        image_type: imageType,
        planter_name: planterName,
        organization,
        email,
      };

      // Insert the new tree into Supabase
      const { data: insertedTree, error: insertError } = await supabase
        .from('trees')
        .insert(newTree)
        .select()
        .single();

      // Only send certificate if email is provided
      if (formState.email.trim()) {
        try {
          const response = await fetch('/api/sendCertificate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formState.planterName,
              email: formState.email,
              species: formState.species,
              latitude: formState.latitude,
              longitude: formState.longitude,
              organization: formState.organization
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to send certificate');
          }

          console.log('Certificate sent successfully');
        } catch (error) {
          console.error('Error sending certificate:', error);
        }
      }

      toast({
        title: "Success",
        description: formState.email.trim() 
          ? "You just planted a tree! 🌳 The certificate will be sent to your email."
          : "You just planted a tree! 🌳",
      });

      setFormState({ latitude: '', longitude: '', species: '', planterName: '', organization: '', email: '' });
      setImage(null);
      onCancel();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setIsAlertOpen(false);
    }
  }, [formState, onCancel, image]);

  const resetForm = useCallback(() => {
    setFormState({ latitude: '', longitude: '', species: '', planterName: '', organization: '', email: '' });
    setErrors({});
  }, []);

  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      setIsGettingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormState((prevState) => ({
            ...prevState,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          }));
          setIsGettingLocation(false);
          toast({
            title: "Location Updated",
            description: "Your current location has been set.",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsGettingLocation(false);
          toast({
            title: "Location Error",
            description: `Unable to get your current location: ${error.message}. Please enter coordinates manually.`,
            variant: "destructive",
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      toast({
        title: "Geolocation Not Supported",
        description: "Your browser doesn't support geolocation. Please enter coordinates manually.",
        variant: "destructive",
      });
    }
  }, []);

  const mapSupabaseError = (code: string) => {
    switch (code) {
      case '23503':
        return "Invalid species. Please select a species from the provided list.";
      case '23502':
        return "Server received null values. Please ensure all fields are filled correctly.";
      case '42P01':
        return "Database table not found. Please contact support.";
      default:
        return "Failed to add tree. Please try again later.";
    }
  };

  // Memoize the tree species options
  const treeSpeciesOptions = useMemo(() => 
    treeSpecies.map((species, index) => (
      <option key={index} value={species} />
    )),
  []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold flex items-center">
            <Trees className="mr-2" /> Register your  Tree
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onCancel} type="button" className="text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload Section */}
          <div className="space-y-2">
            <Label className="text-base font-semibold flex items-center gap-2">
              <MdCloudUpload className="text-green-600" />
              Tree Image
            </Label>
            <div 
              className={`
                border-2 border-dashed rounded-lg p-6
                ${isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'}
                ${errors.image ? 'border-red-300' : ''}
                transition-colors duration-200
                hover:border-green-400 hover:bg-green-50
                cursor-pointer
              `}
              onDragOver={handleDragOver}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="flex flex-col items-center space-y-3">
                {image ? (
                  <div className="relative w-full max-w-xs">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImage(null);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg"
                    >
                      ×
                    </motion.button>
                  </div>
                ) : (
                  <>
                    <MdCloudUpload className="w-12 h-12 text-green-500" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Drag and drop your image here, or click to select
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image}</p>
            )}
          </div>

          {/* Location Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" />
                Location Details
              </h3>
              <Button
                type="button"
                variant="outline"
                onClick={getCurrentLocation}
                className="flex items-center gap-2 text-sm hover:bg-green-50 border-green-600 text-green-600 hover:text-green-700"
              >
                <MapPin className="h-4 w-4" />
                Get Current Location
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="latitude">Latitude</Label>
                <div className="relative">
                  <Input
                    id="latitude"
                    value={formState.latitude}
                    onChange={handleChange}
                    className={`mt-1 pl-8 ${errors.latitude ? "border-red-300 focus:ring-red-500" : ""}`}
                    placeholder="e.g., -33.9249"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-[60%] -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
                {errors.latitude && (
                  <p className="text-red-500 text-xs mt-1">{errors.latitude}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="longitude">Longitude</Label>
                <div className="relative">
                  <Input
                    id="longitude"
                    value={formState.longitude}
                    onChange={handleChange}
                    className={`mt-1 pl-8 ${errors.longitude ? "border-red-300 focus:ring-red-500" : ""}`}
                    placeholder="e.g., 18.4241"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-[60%] -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
                {errors.longitude && (
                  <p className="text-red-500 text-xs mt-1">{errors.longitude}</p>
                )}
              </div>
            </div>

            {/* Optional: Add a helper text */}
            <p className="text-xs text-gray-500 mt-1">
              Click "Get Current Location" or manually enter the coordinates where you planted the tree
            </p>
          </div>

          {/* Tree Details Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <FaTree className="text-green-600" />
              Tree Details
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="species">Species</Label>
                <Input
                  id="species"
                  value={formState.species}
                  onChange={handleChange}
                  className={`mt-1 ${errors.species ? "border-red-300 focus:ring-red-500" : ""}`}
                  placeholder="e.g., Oak"
                />
                {errors.species && <p className="text-red-500 text-xs mt-1">{errors.species}</p>}
              </div>
            </div>
          </div>

          {/* Planter Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <FaUser className="text-green-600" />
              Planter Information
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="planterName">Name</Label>
                <Input
                  id="planterName"
                  value={formState.planterName}
                  onChange={handleChange}
                  className={`mt-1 ${errors.planterName ? "border-red-300 focus:ring-red-500" : ""}`}
                  placeholder="Your full name"
                />
                {errors.planterName && <p className="text-red-500 text-xs mt-1">{errors.planterName}</p>}
              </div>

              <div>
                <Label htmlFor="organization" className="flex items-center gap-2">
                  <FaBuilding className="text-green-600" />
                  Organization
                </Label>
                <Input
                  id="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  className={`mt-1 ${errors.organization ? "border-red-300 focus:ring-red-500" : ""}`}
                  placeholder="Your organization name"
                />
                {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <HiOutlineMail className="text-green-600" />
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`mt-1 ${errors.email ? "border-red-300 focus:ring-red-500" : ""}`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  Enter your email to receive a planting certificate
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default React.memo(TreePlantingForm);
