import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const [mobile, setmobile] = useState(false)

  const toglemenu = () => {
    setmobile(!mobile)
  }

  return user ? (
    <div className="min-h-screen w-full relative">
      {/* 🌌 Purple Gradient Grid Right Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px),
radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      {/* Page Content */}
      <div className="border-2 min-h-screen flex flex-col justify-start  relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center md:px-5 py-2 backdrop-blur-lg border border-slate-700">
          <img
            src={assets.logo}
            alt=""
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="mr-4 sm:hidden text-white" onClick={toglemenu}>
            {mobile ? <X /> : <Menu />}
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex  md:hidden">
          {mobile && <Sidebar  mobile={mobile} setmobile={setmobile} />}
          <div className="w-full ">
            <Outlet />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden flex-1 sm:flex w-full h-[calc(100vh-64px)]">
          <Sidebar />
          <div className="flex-1  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  )
}

export default Layout
