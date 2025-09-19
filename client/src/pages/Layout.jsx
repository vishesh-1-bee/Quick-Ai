import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Cross, Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const [mobile, setmobile] = useState(true)
  const toglemenu = () => {
    setmobile(!mobile)
  }

  return user ? (
    <div className='border-2  min-h-screen flex flex-col justify-start'>
      <nav className=' flex justify-between items-center md:px-5 py-2 backdrop-blur-lg bg-slate-00   border border-slate-700 '>
        <img src={assets.logo} alt="" className='h-8 cursor-pointer  '
          onClick={() => navigate("/")} />
        <div className='mr-4 sm:hidden' onClick={toglemenu}>{mobile ? <X /> : <Menu />}</div>

      </nav>
      <div className='flex md:hidden '>
        {
          mobile && (
            <div>
              <Sidebar mobile={mobile} setmobile={setmobile} />

            </div>
          )
        }
        {/* formobile devices */}
        <div>
          <Outlet />
        </div>
      </div>
      <div className='hidden sm:flex w-full flex-1 h-[calc(100vh-64px)] '>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>


    </div>
  ) :
    (
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
    )
}

export default Layout
