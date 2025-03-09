'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { submitMembershipApplication, type MembershipApplication } from '@/lib/supabaseClient'
import { Loader2 } from 'lucide-react'

export default function JoinPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<Omit<MembershipApplication, 'id' | 'created_at' | 'status'>>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    institution: '',
    qualifications: '',
    level: 'undergraduate',
    motivation_letter: '',
    membership_type: 'student'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!formData.name || !formData.surname || !formData.email || !formData.phone) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      const { data, error: submitError } = await submitMembershipApplication(formData)
      
      if (submitError) {
        throw new Error(submitError.message)
      }

      router.push('/network/membership/join/success')
    } catch (err: any) {
      setError(err?.message || 'Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#00703C] mb-4">Join UGO Network</h1>
            <p className="text-gray-600 text-lg">Complete the form below to submit your membership application</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">Surname</label>
                  <input
                    type="text"
                    id="surname"
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3">
                Academic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="institution" className="block text-gray-700 font-medium mb-2">Institution</label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="qualifications" className="block text-gray-700 font-medium mb-2">Qualifications</label>
                  <input
                    type="text"
                    id="qualifications"
                    value={formData.qualifications}
                    onChange={(e) => setFormData({...formData, qualifications: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all"
                    required
                    placeholder="e.g., BSc Environmental Science"
                  />
                </div>
                <div>
                  <label htmlFor="level" className="block text-gray-700 font-medium mb-2">Academic Level</label>
                  <select
                    id="level"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: e.target.value as MembershipApplication['level']})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all appearance-none bg-white"
                    required
                  >
                    <option value="undergraduate">Undergraduate</option>
                    <option value="honors">Honors</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>
            </div>

              <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3">
                Motivation
              </h2>
              <div>
                <label htmlFor="motivationLetter" className="block text-gray-700 font-medium mb-2">
                  Why do you want to join UGO Network?
                </label>
                <textarea
                  id="motivationLetter"
                  value={formData.motivation_letter}
                  onChange={(e) => setFormData({...formData, motivation_letter: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00703C]/20 focus:border-[#00703C] transition-all h-40 resize-none"
                  required
                  placeholder="Share your motivation for joining..."
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 border border-red-100 p-4 rounded-lg"
              >
                <p className="text-red-600 text-sm">{error}</p>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-[#00703C] text-white py-4 rounded-lg hover:bg-[#005c32] transition-all disabled:opacity-50 flex items-center justify-center space-x-2 text-lg font-medium shadow-lg shadow-[#00703C]/10"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}