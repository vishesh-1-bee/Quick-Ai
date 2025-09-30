import { Eraser, File, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
const ReviewResume = () => {
  const [input, setinput] = useState()
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
      }
  return (
      <div className='p-6 h-full   flex overflow-y-scroll items-start flex-wrap gap-9 text-slate-800 '>
      {/* left col */}
      <form onSubmit={handleSubmit}
        className='p-6 rounded-lg border border-slate-300 w-full md:max-w-lg bg-white'>
        <span className='flex items-center gap-3 w-full'>
          <Sparkles className='w-6 text-cyan-600' />
          <h1 className='text-xl font-semibold '>Resume Review</h1>
        </span>

        {/* input box */}
        <div className='mt-5'>
          <h2 className='text-xs font-semibold tracking-tight'>Upload resume</h2>
          <input type='file' onChange={(e) => setinput(e.target.files[0])} accept='application/pdf'
            className='border border-slate-500 w-full p-2 rounded-lg mt-2 outline-none' placeholder='select yoy resume' required />
        </div>
         <p className='text-xs text-start text-slate-500 mt-1'>Upload pdf only*</p>
        {/* article lenght box */}
        <div className='mt-5'>
         
         
         


          <button className='flex bg-amber-200 w-full justify-center items-center gap-4
          text-sm rounded-lg cursor-pointer px-4 py-2 mt-4
          bg-gradient-to-r from-cyan-400  to-cyan-700 text-white'>
            <File className='w-5' />
            <h3>Review Resume</h3>
          </button>
        </div>
       
      </form>
      {/* right-col */}

      <div className='w-full max-w-lg p-6 rounded-lg flex flex-col min-h-90 max-h-[500px] border border-gray-300 bg-white'>
        <div className='flex items-center gap-3'>
          <File className='w-5 h-5 text-purple-600' />
          <h1 className='font-semibold text-xl'>Review Resume</h1>
        </div>

        <div className='flex flex-1 justify-center items-center gap-4'>
          <div className='flex gap-4 items-center flex-col text-sm'>
            <File className='w-9 h-9  ' />
            <h1 className='text-gray-500 text-sm text-center'>Upload a resume and click "Review Resume" to get started</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume
