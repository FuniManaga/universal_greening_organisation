"use client"

import { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs"
import { Card } from "@/components/ui/card"
import { Button} from '@/components/ui/button'
import { SettingsForm } from "@/components/forms/SettingsForm"
import { getUserProfile, updateUserProfile } from '@/app/actions/user'
import { User, Mail, Phone, Building, GraduationCap, Shield, Bell } from "lucide-react"

export default function SettingsPage() {
  const { user } = useUser()
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    if (user?.id) {
      loadProfile()
    }
  }, [user?.id])

  const loadProfile = async () => {
    if (!user?.id) return
    const { data, error } = await getUserProfile(user.id)
    if (data) setProfile(data)
  }

  const handleSave = async (field: string, value: string) => {
    if (!user?.id) return
    const { error } = await updateUserProfile(user.id, { [field]: value })
    if (!error) {
      await loadProfile()
    }
  }

  if (!profile) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account preferences</p>
        </div>

        {/* Profile Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
          <Card className="divide-y divide-gray-200">
            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <User className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Name</h3>
                  <p className="text-sm text-gray-500">{profile.name}</p>
                </div>
              </div>
              <SettingsForm
                field="name"
                initialValue={profile.name}
                onSave={(value) => handleSave('name', value)}
              />
            </div>

            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-500">Your email address for communications</p>
                </div>
              </div>
              <Button variant="outline">Edit</Button>
            </div>

            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-500">Your contact number</p>
                </div>
              </div>
              <Button variant="outline">Edit</Button>
            </div>
          </Card>
        </div>

        {/* Academic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Academic Information</h2>
          <Card className="divide-y divide-gray-200">
            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <Building className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Institution</h3>
                  <p className="text-sm text-gray-500">Your academic institution</p>
                </div>
              </div>
              <Button variant="outline">Edit</Button>
            </div>

            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <GraduationCap className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Academic Level</h3>
                  <p className="text-sm text-gray-500">Your current level of study</p>
                </div>
              </div>
              <Button variant="outline">Edit</Button>
            </div>
          </Card>
        </div>

        {/* Preferences */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
          <Card className="divide-y divide-gray-200">
            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <Bell className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-500">Manage your notification preferences</p>
                </div>
              </div>
              <Button variant="outline">Configure</Button>
            </div>

            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <Shield className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Privacy</h3>
                  <p className="text-sm text-gray-500">Control your privacy settings</p>
                </div>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </Card>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
          <Card className="p-6 border-red-200">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Delete Account</h3>
                <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}