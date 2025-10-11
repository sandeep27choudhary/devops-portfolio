"use client"

import { useState, useEffect } from "react"
import { X, Youtube } from "lucide-react"
import Link from "next/link"

export default function YoutubePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubscribe = () => {
    handleClose()
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-in zoom-in-95 fade-in duration-300">
        <div className="relative bg-gradient-to-br from-primary/95 via-primary/90 to-purple-600/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Close popup"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Content */}
          <div className="relative p-8 text-center">
            {/* YouTube Icon with animation */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-white rounded-full p-4">
                  <Youtube className="h-12 w-12 text-red-600" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Main message */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
              🚀 Wanna stay ahead in DevOps & Tech?
            </h2>
            
            <p className="text-white/90 text-lg mb-6 drop-shadow">
              Join the <span className="font-bold text-yellow-300">DuhOps squad</span> for exclusive tutorials, tips, and tech insights!
            </p>

            {/* Subscribe button */}
            <Link
              href="https://www.youtube.com/@Duhops?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSubscribe}
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-4"
            >
              <Youtube className="h-6 w-6" fill="currentColor" />
              Subscribe Now
            </Link>

            {/* Additional CTA */}
            <p className="text-white/70 text-sm">
              Don't miss out on the latest content! 👇
            </p>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600" />
        </div>
      </div>
    </>
  )
}

