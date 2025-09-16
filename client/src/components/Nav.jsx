import React from 'react'
import logo from '../assets/logo.svg'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { UserButton, useUser, useClerk } from '@clerk/clerk-react'
const Nav = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
    return (
        <div className='w-full sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-300 py-4 md:px-20 '>
            <div className='relative md:p-2 p-2  px-8 bg-gradient-to-l from-yellow-400 to-slate-950  text-white text-sm rounded-full'>
                <div className='flex justify-between items-center'>
                    <div className='items-center flex' >
                        <img onClick={() => navigate("/")} className='size-2/3 md:size-[75%] md:px-5 lg:px-8 hover:cursor-pointer ' src={logo} alt="" />
                    </div>


                    {user ? <UserButton /> : (
                        <div onClick={openSignIn} className='flex justify-between items-center '>
                            <div className=' px-3 md:px-9 gap-5 flex py-2 rounded-full bg-black font-semibold text-xs text-white
                                   hover:scale-105 hover:cursor-pointer hover:bg-white/60 hover:text-black duration-300'>
                                Get Started
                                <div className='flex '>
                                    <img className='bg-clip-text bg-red-300' src={assets.arrow_icon} alt="" />
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Nav


