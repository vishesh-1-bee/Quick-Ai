import React from 'react'
import Nav from './components/Nav'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/layout'
import Dashboard from './pages/dashboard'
import WriteArtice from './pages/writeArtice'
import BlogTitle from './pages/blogTitle'
import Backgroundremove from './pages/Backgroundremove'
import Community from './pages/Community'
import GenerateImage from './pages/GenerateImage'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import { AnimatePresence, motion } from 'framer-motion';


const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};
const App = () => {
  const location = useLocation();
  return (
    <div className=" relative  min-h-screen w-full  ">
      <div className="">
        {/* Noise Texture (Darker Dots) Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "white",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Your Content/Components */}
        <div className=' relative z-10 text-black'>
          
            <Nav />
         

 <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<Layout />} >
              <Route index element={<Dashboard />} />
              <Route path='writeartice' element={<WriteArtice />} />
              <Route path='blogTitle' element={<BlogTitle />} />
              <Route path='background-remove' element={<Backgroundremove />} />
              <Route path='community' element={<Community />} />
              <Route path='gennerate-image' element={<GenerateImage />} />
              <Route path='RemoveObject' element={<RemoveObject />} />
              <Route path='ReviewResume' element={<ReviewResume />} />

            </Route>
          </Routes>
          </AnimatePresence>
        </div>
      </div>


    </div>
  )
}

export default App
