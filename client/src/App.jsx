import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/layout'
import Dashboard from './pages/dashboard'
import WriteArtice from './pages/writeArtice'
import BlogTitle from './pages/blogTitle'
import Backgroundremove from './pages/backgroundremove'
import Community from './pages/Community'
import GenerateImage from './pages/generateImage'
import RemoveObject from './pages/removeObject'
import ReviewResume from './pages/reviewResume'
import { AnimatePresence } from 'framer-motion'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
}

const App = () => {
  const location = useLocation()

  return (
    <div className="relative min-h-screen w-full">
      {/* Layer 1: Noise Texture Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'white',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Layer 2: Purple Gradient Grid Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
          `,
          backgroundSize: '96px 64px, 96px 64px, 100% 100%',
        }}
      />

      {/* Page Content */}
      <div className="relative z-10 text-black">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="writeartice" element={<WriteArtice />} />
              <Route path="blogTitle" element={<BlogTitle />} />
              <Route path="background-remove" element={<Backgroundremove />} />
              <Route path="community" element={<Community />} />
              <Route path="gennerate-image" element={<GenerateImage />} />
              <Route path="RemoveObject" element={<RemoveObject />} />
              <Route path="ReviewResume" element={<ReviewResume />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
