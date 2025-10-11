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
        <div className="relative bg-gradient-to-br from-[#001f3f]/95 via-[#6b21a8]/90 to-[#1e3a8a]/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
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
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-white rounded-full p-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640"
                    className="h-12 w-12 text-red-600"
                    fill="currentColor"
                  >
                    <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/>
                  </svg>
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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 640"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/>
              </svg>
              Subscribe Now
            </Link>

            {/* Additional CTA */}
            <p className="text-white/70 text-sm">
              Don't miss out on the latest content! 👇
            </p>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-red-600" />
        </div>
      </div>
    </>
  )
}

