import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Diamond, Sparkle, Star } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import Creationitem from '../components/Creationitem'

const Dashboard = () => {
  const [creation, setcreation] = useState([])

  const dashboarddata = async () => {
    setcreation(dummyCreationData)
  }
  useEffect(()=>{
    dashboarddata()
  },[])
  return (
    <div className='h-full overflow-y-auto p-6'>
      <div className='flex  md:flex-row justify-start flex-wrap gap-8 flex-col'>
        <div className=' bg-white  rounded-2xl flex gap-18 text-start items-center  border px-9 py-3'> 
          <div className='text-start text-slate-700 text-lg  font-semibold'><h2>Total Creation</h2>
          <h2 className='text-lg font-semibold'>{creation.length}</h2></div>
          <div className='w-10 h-10 flex items-center justify-center text-white rounded-lg bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1]'
          ><Sparkle/></div>
        </div>

         <div className=' bg-white  rounded-2xl flex gap-18 text-start items-center border px-9 py-3'> 
          <div className='text-start text-slate-700 text-lg font-semibold tracking-tigh'><h2>Active Plan</h2>
          <h2 className='text-sm font-semibold'>
            
          <Protect plan='premium' fallback='free'>Premium</Protect>  
          </h2></div>
          <div className=' w-10 h-10 flex items-center justify-center text-white rounded-lg bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500'><Diamond/></div>
        </div>
      </div>

      <div className='space-y-6'>
        <p className='mt-8 text-xl mb-4'>Recent Creation</p>
        {
          creation.map(( item , index)=>{
             return <div key={index}>
              <Creationitem item={item}/>
             </div>
          })
        }
      </div>
    </div>
  )
}

export default Dashboard
