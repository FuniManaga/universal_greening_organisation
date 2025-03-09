"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Privacy Preference Center</h3>

          <p className="text-sm text-gray-600 max-w-3xl">
            We value your privacy and want to be transparent about how we use cookies to improve your site experience.
          </p>

          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="text-sm text-gray-600 space-y-4 max-w-3xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                  <p>These cookies are necessary for the website to function and cannot be switched off.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our website.</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {showDetails ? 'Hide Preferences' : 'Cookie Settings'}
            </button>
          </div>

          <p className="text-xs text-gray-500 max-w-3xl">
            By clicking "Accept All", you consent to the use of cookies to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our Privacy Policy for more information.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
