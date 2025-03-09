import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from 'lucide-react';

interface GeolocationInputProps {
  onLocationChange: (location: { latitude: number; longitude: number }) => void;
}

export function GeolocationInput({ onLocationChange }: GeolocationInputProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);

  const getCurrentLocation = () => {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
          onLocationChange({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label>Location</Label>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          type="number"
          placeholder="Latitude"
          step="any"
          value={currentLatitude}
          onChange={(e) => {
            const newLatitude = Number(e.target.value);
            setCurrentLatitude(newLatitude);
            onLocationChange({ latitude: newLatitude, longitude: currentLongitude });
          }}
          className="w-full sm:w-auto"
        />
        <Input
          type="number"
          placeholder="Longitude"
          step="any"
          value={currentLongitude}
          onChange={(e) => {
            const newLongitude = Number(e.target.value);
            setCurrentLongitude(newLongitude);
            onLocationChange({ latitude: currentLatitude, longitude: newLongitude });
          }}
          className="w-full sm:w-auto"
        />
        <Button 
          onClick={getCurrentLocation} 
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading ? "Loading..." : (
            <>
              <MapPin className="h-4 w-4 mr-2" />
              <span>Get Location</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
