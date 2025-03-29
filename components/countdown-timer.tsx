"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Sale has ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      <div className="flex flex-col items-center">
        <div className="bg-white text-black font-bold text-xl md:text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white">Days</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white text-black font-bold text-xl md:text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white">Hrs</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white text-black font-bold text-xl md:text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white">Min</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white text-black font-bold text-xl md:text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white">Sec</span>
      </div>
    </div>
  )
}

