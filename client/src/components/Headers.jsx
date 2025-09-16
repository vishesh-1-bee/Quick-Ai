import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiToolsData, assets } from '../assets/assets'
import { useUser } from '@clerk/clerk-react'
import Logoscroll from './Logoscroll'
const Headers = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    return (
        <div className='flex flex-col justify-center items-center py-12 md:py-20 text-center  '>

            <div className='text-center max-w-7xl tracking-tight md:pt-12 lg:pt-0 '>
                <h1 className=' text-[47px] tracking-tight sm:text-5xl md:text-6xl lg:text-[109px] font-semibold'>
                    <span className='bg-gradient-to-r from-black to-yellow-500 text-transparent bg-clip-text'>O</span>
                    ne stop solution
                </h1>
                <h2 className='text-4xl sm:text-4xl md:text-6xl lg:text-[80px] font-semibold mt-1 md:mt-3 text-transparent'>
                    <span className='text-black'>with </span> {"  "}
                    <span className='bg-gradient-to-r from-yellow-300 to-slate-900 text-transparent bg-clip-text'>AI tools</span>
                </h2>
            </div>

            <div className='max-w-xl mt-4 md:mt-6 flex justify-center items-center tracking-tight'>
                <p className='text-sm sm:text-sm md:text-lg w-[75%] max-sm:text-xs sm:max-w-lg md:w-full font-light text-slate-700 text-center leading-none'>Transform your content creation with our suite of premium AI tools.
                    Write articles, generate images, and enhance your workflow</p>
            </div>


            <div className='mt-7 md:mt-9 flex flex-col md:flex-row gap-7 space-x-3 justify-center items-center'>
                <button onClick={() => navigate("/ai")}
                    className='bg-yellow-400/70 rounded-xl duration-300 transition-all px-5 py-3 md:py-2 text-sm font-semibold border-yellow-200
        hover:bg-black hover:border hover:duration-300 cursor-pointer hover:text-white hover:scale-105'>Start creating now</button>
                <button className='border duration-300 transition-all border-slate-400 rounded-xl px-5 md:px-6 py-2 md:py-1 bg-slate-100
       hover:bg-black hover:border hover:duration-300 cursor-pointer hover:text-white hover:scale-105 '>Watch demo</button>
            </div>
            <div className='mt-6 md:mt-8 md:mb-12 mx-auto  text-slate-500 flex justify-center items-center gap-6'>
                <img className='h-8 ' src={assets.user_group} alt="" />
                <span className='text-lg font-semibold'>Trusted by 10k+ people</span>
            </div>
             <Logoscroll/>
            {/* card */}
            <div className=' w-full bg-neutral-800 mt-24 px-4 sm:px-20 lg:px-40 '>
                <div className=' mt-9 text-center'>
                    <h2 className=' text-[42px] font-semibold text-white md:text-7xl'>Powerful AI{" "} 
                        <span className='bg-gradient-to-r from-yellow-400 to-slate-500 text-transparent bg-clip-text'>Tools</span></h2>
                    <p className='text-xs sm:text-sm text-slate-400 mt-3 max-w-lg mx-auto'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
                </div>
                <div className='flex justify-center  flex-wrap  mt-10'>
                    {AiToolsData.map((tools, i) => {
                        return <div key={i} className='p-8 text-start md:max-w-lg lg:max-w-xs text-white m-7 bg-black max-w-xs rounded-lg shadow-lg 
                        border border-gray-900 hover:shadow-2xl hover:shadow-amber-400 hover:translate-y-1 transition-all duration-300 cursor-pointer'
                            onClick={() => user && navigate(tools.path)}
                        >
                         <tools.Icon className='size-10 rounded-xl p-3 ' style={{background:`linear-gradient(to bottom, ${tools.bg.from},${tools.bg.to})`}}/>
                         <h3 className='mt-6 text-lg mb-3 font-semibold'>{tools.title}</h3>
                         <p className='text-xs sm:text-sm font-light text-gray-400  md:text-lg '>{tools.description}</p>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Headers
Logoscroll