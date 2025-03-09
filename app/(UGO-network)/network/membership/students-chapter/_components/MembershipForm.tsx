"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { StudentMembership } from '@/types'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

const GENDERS = ["Male", "Female", "Other", "Prefer not to say"]
const TITLES = ["Mr", "Mrs", "Miss", "Dr", "Prof"]
const COUNTRIES = ["South Africa", "Zimbabwe", "Botswana", "Namibia", "Mozambique", "Lesotho", "Eswatini"]
const PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape"
]
const STUDY_LEVELS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Honours",
  "Masters",
  "PhD"
]

export function MembershipForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<StudentMembership>>({
    mentorship_needed: false
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    field: keyof StudentMembership,
    value?: string
  ) => {
    if (typeof e === 'string') {
      setFormData(prev => ({ ...prev, [field]: e }))
    } else {
      const { value: eventValue } = e.target
      setFormData(prev => ({ ...prev, [field]: eventValue }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('student_memberships')
        .insert([formData])

      if (error) throw error

      toast.success('Application submitted successfully!')
      router.push('/network/membership/success') // Create this success page
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-lg border border-green-100 dark:border-green-900">
      {/* Header */}
      <div className="relative mb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-neutral-900 dark:to-green-950/20 -m-6 h-[calc(100%+3rem)] rounded-t-xl" />

        {/* Content */}
        <div className="relative">
          {/* Logo and Title Section */}
          <div className="text-center space-y-6">
            {/* Optional: Add Logo */}
            <div className="w-20 h-20 mx-auto bg-green-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">UGO</span>
            </div>

            {/* Title with decorative elements */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                <span className="text-xs font-medium text-green-600 dark:text-green-400 tracking-wider">
                  MEMBERSHIP APPLICATION
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 dark:text-green-300 tracking-tight">
                Undergraduate Student Form
              </h2>
              <p className="text-xs text-green-600 dark:text-green-400">2024 Academic Year</p>
            </div>

            {/* Organization Details in a Card */}
            <div className="max-w-md mx-auto bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-green-100 dark:border-green-900/50 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-2 text-left">
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-[11px]">Organization</p>
                    <p className="text-green-800 dark:text-green-300">Universal Greening Organization</p>
                    <p className="text-green-800 dark:text-green-300">Universal Greening Network</p>
                  </div>
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-[11px]">Contact</p>
                    <p className="text-green-800 dark:text-green-300">069 867 4639</p>
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-[11px]">Address</p>
                    <p className="text-green-800 dark:text-green-300">3304 Berylium Road</p>
                    <p className="text-green-800 dark:text-green-300">Olifantsfontein</p>
                    <p className="text-green-800 dark:text-green-300">South Africa, 01666</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Line */}
          <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
        </div>
      </div>

      {/* Section A - Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 border-b border-green-200 pb-2">
          SECTION A - Personal Information
        </h3>
        
        <div className="grid gap-4">
          <div>
            <Label htmlFor="full_names">Full Names</Label>
            <Input 
              id="full_names" 
              placeholder="Enter your full names" 
              required
              className="bg-white dark:bg-neutral-800"
              onChange={(e) => handleChange(e, 'full_names')}
              value={formData.full_names || ''}
            />
          </div>

          <div>
            <Label htmlFor="id_number">ID Number</Label>
            <Input 
              id="id_number" 
              placeholder="Enter your ID number" 
              required
              className="bg-white dark:bg-neutral-800"
              onChange={(e) => handleChange(e, 'id_number')}
              value={formData.id_number || ''}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select 
                required
                onValueChange={(value) => handleChange(value, 'gender')}
              >
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {GENDERS.map((gender) => (
                    <SelectItem key={gender} value={gender.toLowerCase()}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Select 
                required
                onValueChange={(value) => handleChange(value, 'title')}
              >
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select title" />
                </SelectTrigger>
                <SelectContent>
                  {TITLES.map((title) => (
                    <SelectItem key={title} value={title.toLowerCase()}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="Age" 
                required
                className="bg-white dark:bg-neutral-800"
                onChange={(e) => handleChange(e, 'age')}
                value={formData.age || ''}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country</Label>
              <Select 
                required
                onValueChange={(value) => handleChange(value, 'country')}
              >
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country.toLowerCase()}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <Select 
                required
                onValueChange={(value) => handleChange(value, 'province')}
              >
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((province) => (
                    <SelectItem key={province} value={province.toLowerCase()}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="qualification">Qualification</Label>
            <Input 
              id="qualification" 
              placeholder="Enter your qualification" 
              required
              className="bg-white dark:bg-neutral-800"
              onChange={(e) => handleChange(e, 'qualification')}
              value={formData.qualification || ''}
            />
          </div>

          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input 
              id="institution" 
              placeholder="Enter your institution" 
              required
              className="bg-white dark:bg-neutral-800"
              onChange={(e) => handleChange(e, 'institution')}
              value={formData.institution || ''}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="student_number">Student Number</Label>
              <Input 
                id="student_number" 
                placeholder="Enter student number" 
                required
                className="bg-white dark:bg-neutral-800"
                onChange={(e) => handleChange(e, 'student_number')}
                value={formData.student_number || ''}
              />
            </div>
            <div>
              <Label htmlFor="level_of_study">Level of Study</Label>
              <Select 
                required
                onValueChange={(value) => handleChange(value, 'level_of_study')}
              >
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select level of study" />
                </SelectTrigger>
                <SelectContent>
                  {STUDY_LEVELS.map((level) => (
                    <SelectItem key={level} value={level.toLowerCase()}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="reason_for_joining">Reason for Joining the Organization</Label>
            <Textarea 
              id="reason_for_joining" 
              placeholder="Please explain why you want to join UGO"
              className="min-h-[100px] bg-white dark:bg-neutral-800"
              required
              onChange={(e) => handleChange(e, 'reason_for_joining')}
              value={formData.reason_for_joining || ''}
            />
          </div>

          <div className="space-y-3">
            <Label>Mentorship Needed</Label>
            <RadioGroup 
              defaultValue="no" 
              onValueChange={(value) => handleChange(value, 'mentorship_needed')}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.mentorship_needed === true && (
            <div>
              <Label htmlFor="mentorship_area">If yes, in which area?</Label>
              <Textarea 
                id="mentorship_area" 
                placeholder="Please specify the area where you need mentorship"
                className="min-h-[100px] bg-white dark:bg-neutral-800"
                required
                onChange={(e) => handleChange(e, 'mentorship_area')}
                value={formData.mentorship_area || ''}
              />
            </div>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 border-b border-green-200 pb-2">
          Contact Information
        </h3>
        
        <div className="grid gap-4">
          <div>
            <Label htmlFor="residential_address">Residential Address</Label>
            <Textarea 
              id="residential_address" 
              placeholder="Enter your residential address"
              className="min-h-[80px] bg-white dark:bg-neutral-800"
              required
              onChange={(e) => handleChange(e, 'residential_address')}
              value={formData.residential_address || ''}
            />
          </div>

          <div>
            <Label htmlFor="email_address">Email Address</Label>
            <Input 
              id="email_address" 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="bg-white dark:bg-neutral-800"
              onChange={(e) => handleChange(e, 'email_address')}
              value={formData.email_address || ''}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
