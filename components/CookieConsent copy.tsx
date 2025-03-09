"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { FaCookieBite } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and disabled
    analytics: true,
    marketing: false,
    preferences: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        setShowConsent(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
  };

  const handleReject = () => {
    const rejectedPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejectedPreferences));
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowPreferences(false);
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex h-12 w-12 rounded-full bg-green-100 items-center justify-center">
                  <FaCookieBite className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-base text-gray-700">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                  </p>
                  <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                    <DialogTrigger asChild>
                      <button className="text-xs text-green-600 hover:text-green-700 underline mt-1">
                        Customize preferences
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Cookie Preferences</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Necessary</p>
                            <p className="text-sm text-gray-500">Required for the website to function</p>
                          </div>
                          <Switch checked={preferences.necessary} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Analytics</p>
                            <p className="text-sm text-gray-500">Help us improve our website</p>
                          </div>
                          <Switch 
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, analytics: checked }))
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Marketing</p>
                            <p className="text-sm text-gray-500">Personalized advertisements</p>
                          </div>
                          <Switch 
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, marketing: checked }))
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Preferences</p>
                            <p className="text-sm text-gray-500">Remember your settings</p>
                          </div>
                          <Switch 
                            checked={preferences.preferences}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, preferences: checked }))
                            }
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button onClick={handleSavePreferences}>
                          Save Preferences
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={handleReject}
                  className="text-sm px-4 py-2 border-gray-300 hover:bg-gray-100"
                >
                  Reject All
                </Button>
                <Button
                  onClick={handleAccept}
                  className="text-sm px-4 py-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
