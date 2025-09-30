import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {
  const [data, setdata] = useState([])
  const { user } = useUser()

  const fetchCreation = async () => {
    setdata(dummyPublishedCreationData)
  }

  useEffect(() => {
    if (user) {
      fetchCreation()
    }
  }, [user])
  return (
    <div className='flex flex-1 flex-col gap-2 h-full p-6'>
      <h3 className='text-xl font-semibold pl-4'>Creation</h3>
      <div className='bg-white h-fit w-full rounded-xl overflow-y-scroll'>
        {data.map((item, index) => {
        return  <div key={index}
            className='relative group inline-block pt-3 pl-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
            <img src={item.content} className='h-full w-full object-cover rounded-lg
             ' alt="" />

            <div className='flex gap-4 absolute bottom-0 top-0 right-0 left-3 justify-end group-hover:justify-between p-3 
            text-white rounded-lg  group-hover:bg-black/80 '>
              <p className='text-sm  hidden group-hover:block group-hover:transition-all duration-300 '>{item.prompt}</p>
              <div className='text-sm hidden group-hover:block '>
                {item.likes.length}
              </div>
              <div>
                <Heart className={`text-sm hidden group-hover:block cursor-pointer ${item.likes.includes(user.id) ? 'fill-red-500 text-red-400' : ''}`}/>
              </div>
            </div>
          </div>
          
        })}
      </div>
    </div>
  )
}

export default Community
