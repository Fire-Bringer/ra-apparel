"use client"

import { useEffect, useState } from "react"

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let progressInterval: NodeJS.Timeout
    let progressTimeout: NodeJS.Timeout

    const handleStart = () => {
      setIsVisible(true)
      setProgress(0)

      // Simulate progress
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)
    }

    const handleComplete = () => {
      clearInterval(progressInterval)
      setProgress(100)

      // Hide after completion
      progressTimeout = setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 200)
    }

    document.addEventListener("navigationstart", handleStart)
    document.addEventListener("navigationcomplete", handleComplete)
    document.addEventListener("navigateerror", handleComplete)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(progressTimeout)
      document.removeEventListener("navigationstart", handleStart)
      document.removeEventListener("navigationcomplete", handleComplete)
      document.removeEventListener("navigateerror", handleComplete)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div className="h-full bg-black transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

