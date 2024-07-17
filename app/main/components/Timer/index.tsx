"use client"

import { useState, useEffect } from "react"
import { Button, Input } from "antd"
import useProjectStore from "../../stores"

export default function Component() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const addProject = useProjectStore((state) => state.addProject)

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
      setTime(0);
    }
    return () => clearInterval(timer)
  }, [isRunning, time])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`
  }

  const handleBtnClick = (isRunning: boolean) => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      addProject({
        id: String(Date.now()),
        name: 'Project Name',
        items: []
      })
    }
  }

  return (

    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Input ></Input>
        <div className="p-4 text-2xl font-bold bg-gray-200 rounded-md">{formatTime(time)}</div>
        <Button onClick={() => handleBtnClick(isRunning)}>{isRunning ? '暂停' : '开始'}</Button>
      </div>
    </div>
  )
}