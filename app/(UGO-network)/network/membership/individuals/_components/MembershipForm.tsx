"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

const TITLES = ["Mr", "Mrs", "Miss", "Dr", "Prof"]
const GENDERS = ["F", "M", "Others"]
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

export function MembershipForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [mentorshipNeeded, setMentorshipNeeded] = useState<"yes" | "no">("no")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        full_names: formData.get('full_names'),
        id_number: formData.get('id_number'),
        title: formData.get('title'),
        gender: formData.get('gender'),
        age: formData.get('age'),
        country: formData.get('country'),
        province: formData.get('province'),
        qualification: formData.get('qualification'),
        institution: formData.get('institution'),
        year_obtained: formData.get('year_obtained'),
        mentorship_needed: mentorshipNeeded === 'yes',
        mentorship_area: formData.get('mentorship_area'),
        reason_for_joining: formData.get('reason_for_joining'),
        residential_address: formData.get('residential_address'),
        email_address: formData.get('email_address'),
        phone_number: formData.get('phone_number'),
        whatsapp_number: formData.get('whatsapp_number'),
      }

      const { error } = await supabase
        .from('professional_memberships')
        .insert([data])

      if (error) throw error

      toast.success('Application submitted successfully!')
      router.push('/network/membership/success')
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-neutral-900 dark:to-green-950/20 -m-6 h-[calc(100%+3rem)] rounded-t-xl" />
        
        <div className="relative">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">UGO</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                <span className="text-xs font-medium text-green-600 dark:text-green-400 tracking-wider">
                  MEMBERSHIP APPLICATION
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 dark:text-green-300 tracking-tight">
                Professional Membership Form
              </h2>
              <p className="text-xs text-green-600 dark:text-green-400">2024</p>
            </div>

            <div className="max-w-md mx-auto bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-green-100 dark:border-green-900/50 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3 text-left">
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium">Organization</p>
                    <p className="text-green-800 dark:text-green-300">Universal Greening Organization</p>
                    <p className="text-green-800 dark:text-green-300">Universal Greening Network</p>
                  </div>
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium">Contact</p>
                    <p className="text-green-800 dark:text-green-300">069 867 4639</p>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium">Address</p>
                    <p className="text-green-800 dark:text-green-300">3304 Berylium Road</p>
                    <p className="text-green-800 dark:text-green-300">Olifantsfontein</p>
                    <p className="text-green-800 dark:text-green-300">South Africa, 01666</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 border-b border-green-200 pb-2">
          Personal Information
        </h3>
        
        <div className="grid gap-4">
          <div>
            <Label htmlFor="full_names">Full Names</Label>
            <Input 
              id="full_names"
              name="full_names"
              placeholder="Enter your full names" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div>
            <Label htmlFor="id_number">ID Number</Label>
            <Input 
              id="id_number"
              name="id_number"
              placeholder="Enter your ID number" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Select name="title" required>
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select title" />
                </SelectTrigger>
                <SelectContent>
                  {TITLES.map((title) => (
                    <SelectItem key={title} value={title}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select name="gender" required>
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {GENDERS.map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age"
                name="age"
                type="number" 
                placeholder="Age" 
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country</Label>
              <Select name="country" required>
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <Select name="province" required>
                <SelectTrigger className="bg-white dark:bg-neutral-800">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((province) => (
                    <SelectItem key={province} value={province}>
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
              name="qualification"
              placeholder="Enter your qualification" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input 
              id="institution"
              name="institution"
              placeholder="Enter your institution" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div>
            <Label htmlFor="year_obtained">Year Obtained</Label>
            <Input 
              id="year_obtained"
              name="year_obtained"
              type="number"
              placeholder="Year qualification was obtained" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div className="space-y-3">
            <Label>Mentorship Needed</Label>
            <RadioGroup 
              defaultValue="no" 
              onValueChange={(value) => setMentorshipNeeded(value as "yes" | "no")}
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

          {mentorshipNeeded === "yes" && (
            <div>
              <Label htmlFor="mentorship_area">If yes, in which area?</Label>
              <Textarea 
                id="mentorship_area"
                name="mentorship_area"
                placeholder="Please specify the area where you need mentorship"
                className="min-h-[100px] bg-white dark:bg-neutral-800"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="reason_for_joining">Reason for Joining the Organization</Label>
            <Textarea 
              id="reason_for_joining"
              name="reason_for_joining"
              placeholder="Please explain why you want to join UGO"
              className="min-h-[100px] bg-white dark:bg-neutral-800"
              required
            />
          </div>
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
              name="residential_address"
              placeholder="Enter your residential address"
              className="min-h-[80px] bg-white dark:bg-neutral-800"
              required
            />
          </div>

          <div>
            <Label htmlFor="email_address">Email Address</Label>
            <Input 
              id="email_address"
              name="email_address"
              type="email"
              placeholder="Enter your email address" 
              required
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input 
                id="phone_number"
                name="phone_number"
                type="tel"
                placeholder="Enter your phone number" 
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>
            <div>
              <Label htmlFor="whatsapp_number">WhatsApp Number</Label>
              <Input 
                id="whatsapp_number"
                name="whatsapp_number"
                type="tel"
                placeholder="Enter your WhatsApp number" 
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>
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
