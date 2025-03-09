'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react';

type SerializedUser = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
};

type Profile = {
  id: string;
  clerk_id: string;
  email: string;
  first_name: string;
  last_name: string;
  student_id: string;
  department: string;
  year_level: string;
  membership_status: string;
  created_at: string;
  updated_at: string;
};

type ProfileSectionProps = {
  user: SerializedUser;
  initialProfile: Profile | null;
};

export function ProfileSection({ user, initialProfile }: ProfileSectionProps) {
  const supabase = createClientComponentClient();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    student_id: initialProfile?.student_id || '',
    department: initialProfile?.department || '',
    year_level: initialProfile?.year_level || '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!profileData.student_id.trim()) {
      newErrors.student_id = 'Student ID is required';
    } else if (!/^\d{7,}$/.test(profileData.student_id.trim())) {
      newErrors.student_id = 'Please enter a valid student ID (at least 7 digits)';
    }
    
    if (!profileData.department.trim()) {
      newErrors.department = 'Department is required';
    } else if (profileData.department.length < 2) {
      newErrors.department = 'Department name is too short';
    }
    
    if (!profileData.year_level) {
      newErrors.year_level = 'Year Level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const profileToSave = initialProfile ? profileData : {
        clerk_id: user.id,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        ...profileData,
        membership_status: 'pending'
      };

      const { error } = await supabase
        .from('profiles')
        [initialProfile ? 'update' : 'insert']([profileToSave])
        .eq('clerk_id', user.id);

      if (error) throw error;

      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfileData({
      student_id: initialProfile?.student_id || '',
      department: initialProfile?.department || '',
      year_level: initialProfile?.year_level || '',
    });
    setErrors({});
  };

  return (
    <div className="w-[100vw] sm:w-full max-w-4xl bg-white rounded-none sm:rounded-xl shadow-sm border-x-0 sm:border border-gray-100 p-4 sm:p-6 transition-all -mx-4 sm:mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Profile Details
        </h2>
        <div className="space-x-2">
          {isEditing && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              className="transition-all hover:scale-105"
            >
              Cancel
            </Button>
          )}
          <Button
            variant={isEditing ? "default" : "outline"}
            size="sm"
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="transition-all hover:scale-105 bg-green-600 hover:bg-green-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              isEditing ? 'Save Changes' : 'Edit Profile'
            )}
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Basic Info Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-base font-semibold">
                {initialProfile?.first_name || ''} {initialProfile?.last_name || ''}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-base font-semibold break-all">{initialProfile?.email || ''}</p>
            </div>
          </div>
        </div>

        {/* Add Membership Status */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Membership Status</p>
            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              ${initialProfile?.membership_status === 'approved' ? 'bg-green-100 text-green-800' :
                initialProfile?.membership_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'}`}>
              {initialProfile?.membership_status ? 
                initialProfile.membership_status.charAt(0).toUpperCase() + 
                initialProfile.membership_status.slice(1) : 
                'Not Applied'}
            </div>
          </div>
        </div>

        {/* Modify Student Info inputs to show errors */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Student ID</p>
              {isEditing ? (
                <div className="space-y-1">
                  <Input
                    value={profileData.student_id}
                    onChange={(e) => setProfileData({ ...profileData, student_id: e.target.value })}
                    className={`w-full transition-all focus:ring-2 focus:ring-blue-500 ${
                      errors.student_id ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter Student ID"
                  />
                  {errors.student_id && (
                    <p className="text-xs text-red-500">{errors.student_id}</p>
                  )}
                </div>
              ) : (
                <p className="text-base font-semibold">{initialProfile?.student_id || 'Not set'}</p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Department</p>
              {isEditing ? (
                <div className="space-y-1">
                  <Input
                    value={profileData.department}
                    onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                    className={`w-full transition-all focus:ring-2 focus:ring-blue-500 ${
                      errors.department ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter Department"
                  />
                  {errors.department && (
                    <p className="text-xs text-red-500">{errors.department}</p>
                  )}
                </div>
              ) : (
                <p className="text-base font-semibold">{initialProfile?.department || 'Not set'}</p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Year Level</p>
              {isEditing ? (
                <div className="space-y-1">
                  <Select
                    value={profileData.year_level}
                    onValueChange={(value) => setProfileData({ ...profileData, year_level: value })}
                  >
                    <SelectTrigger 
                      className={`w-full transition-all focus:ring-2 focus:ring-blue-500 ${
                        errors.year_level ? 'border-red-500' : ''
                      }`}
                    >
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.year_level && (
                    <p className="text-xs text-red-500">{errors.year_level}</p>
                  )}
                </div>
              ) : (
                <p className="text-base font-semibold">
                  {initialProfile?.year_level ? `${initialProfile.year_level}th Year` : 'Not set'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
