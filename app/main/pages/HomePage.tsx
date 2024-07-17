'use client'
import Timer from "../components/Timer"
import History from "../components/History"

const HomePage = () => {
  return <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Timer />
    <History />
  </div>
}

export default HomePage