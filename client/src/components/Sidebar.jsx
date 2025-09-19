import { Protect, useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Eraser, Hash, House, Image, LogOut, Scissors, SquarePen, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/ai', label: 'Dashboard', Icon: House },
    { to: '/ai/writeartice', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blogTitle', label: 'Blog Title', Icon: Hash },
    { to: '/ai/gennerate-image', label: 'Image Generation', Icon: Image },
    { to: '/ai/background-remove', label: 'Background Removal', Icon: Eraser },
    { to: '/ai/RemoveObject', label: 'Object Removal', Icon: Scissors },
    { to: '/ai/community', label: 'Community', Icon: User },
]

const Sidebar = ({ mobile, setmobile }) => {
    const { user } = useUser()
    const { signOut, openUserProfile } = useClerk()
    const handlecilck = (e) => {
        e.preventDefault

    }
    return (
        <div
            className={`w-60 flex flex-col justify-center items-center max-sm:absolute border-r border-yellow-400 top-14 bottom-0 bg-gradient-to-r from-[#d1d5db]
via-[#6b7280]
to-[#374151] text-white
      ${mobile ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out top-0`}
        >
            {/* User Info */}
            <div className="w-full my-4">
                <img src={user.imageUrl} className="w-1/3 rounded-full mx-auto" alt="" />
                <h1 className="text-center">{user.fullName}</h1>
            </div>

            {/* Nav Items */}
            <div onClick={() => setmobile(false)} // close on mobile
                className="flex flex-col gap-5 mt-10 w-full px-4">
                {navItems.map(({ to, label, Icon }, index) => (
                    <NavLink
                        key={index}
                        to={to}

                        onSubmit={handlecilck}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded-xl 
              ${isActive ? 'bg-yellow-500 text-black font-semibold' : 'bg-black text-white'}`
                        }
                    >
                        <Icon className="size-4" />
                        <span className="text-sm">{label}</span>
                    </NavLink>
                ))}
            </div>
            <div className=' mt-18 w-full p-4 border border-t-2 border-gray-400 px-7 flex justify-between items-center'>
                <div className='flex justify-center gap-2 items-center  cursor-pointer' onClick={openUserProfile}>
                    <img src={user.imageUrl} className='w-7 rounded-full' alt="" />
                    <div className='text-xs'>
                        <h2>{user.fullName}</h2>
                        <Protect plan='premium' fallback='free'>Premium</Protect>Plan
                    </div>
                </div>
                <LogOut onClick={signOut} className='w-5  cursor-pointer' />
            </div>
        </div>
    )
}

export default Sidebar
