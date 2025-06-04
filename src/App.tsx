import { useEffect, useState } from 'react'
import Home from './pages/home'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // 5 seconds, not 50000 (which is 50 seconds)
    return () => clearTimeout(timer)
  }, []) // ✅ Only run on initial mount

  return (
    <section className="">
      <div className="">
        <Home />
      </div>

      {loading && (
        <div className="fixed !overflow-hidden top-0 left-0 w-screen h-full !pt-60 bg-black flex items-start justify-center z-750">
          <h1 className="text-9xl text-white">Loading...</h1>
        </div>
      )}
    </section>
  )
}

export default App
