/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eeRYcMkPVaz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (!isRunning && time !== 0) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isRunning, time])
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <div className="p-4 text-2xl font-bold bg-gray-200 rounded-md">{formatTime(time)}</div>
          <Button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "\u6682\u505C" : "\u5F00\u59CB"}</Button>
        </div>
      </div>
    </div>
  )
}