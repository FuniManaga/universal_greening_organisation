'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export default function SuccessPage() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-8 flex items-center justify-center"
        >
          <svg 
            className="w-10 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-bold text-[#00703C] mb-4">
          Application Submitted Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Thank you for applying to join the UGO Network. We are processing your application and will contact you via email with next steps.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Next Steps:</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✓ Review of your application (1-2 business days)</li>
            <li>✓ Email notification of decision</li>
            <li>✓ Instructions for completing membership if approved</li>
          </ul>
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-3 bg-[#00703C] text-white rounded hover:bg-[#005c32] transition-colors"
          >
            Return to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
