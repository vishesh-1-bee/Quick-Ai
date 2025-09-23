
import { Edit, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const WriteArtice = () => {
  const articleLength = [
    { lenght: 800, text: 'Short (500-800 words)' },
    { lenght: 1200, text: 'Medium (800-1200 words)' },
    { lenght: 1600, text: 'Long (1200+ words)' },
  ]

  const [selectedLength, setselectedLength] = useState(articleLength[0])
  const [input, setinput] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

  }
  return (
    <div className='p-6 h-full   flex overflow-y-scroll items-start flex-wrap gap-9 text-slate-800 '>
      {/* left col */}
      <form onSubmit={handleSubmit}
        className='p-6 rounded-lg border w-full md:max-w-lg bg-white'>
        <span className='flex items-center gap-3 w-full'>
          <Sparkles className='w-6 text-blue-500' />
          <h1 className='text-xl font-semibold '>Article Configration</h1>
        </span>

        {/* input box */}
        <div className='mt-5'>
          <h2 className='text-sm font-semibold tracking-tight'>Article Topic</h2>
          <input onChange={(e) => setinput(e.target.value)} value={input}
            type="text" className='border border-slate-500 w-full p-2 rounded-lg mt-2 outline-none' placeholder='Enter Text' required />
        </div>
        {/* article lenght box */}
        <div className='mt-5'>
          <h2 className='text-sm font-semibold tracking-tight'>Article Length</h2>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
            {articleLength.map((item, index) => {
              return <span onClick={() => setselectedLength(item)}
                className={`border border-slate-300 p-1 ${selectedLength.text === item.text ? 'bg-blue-50 text-blue-700 '
                  : "text-gray-700 border-gray-600"
                  } px-3 rounded-full  text-xs cursor-pointer`}>{item.text}</span>
            })}
          </div>
          <br />

          <button className='flex bg-amber-200 w-full justify-center items-center gap-4
          text-sm rounded-lg cursor-pointer px-4 py-2 mt-4
          bg-gradient-to-r from-slate-400  to-yellow-500 text-white'>
            <Edit className='w-5' />
            <h3>Generate Articel</h3>
          </button>
        </div>
      </form>
      {/* right-col */}

      <div className='w-full max-w-lg p-6 rounded-lg flex flex-col min-h-96 max-h-[600px] border border-gray-300 bg-white'>
        <div className='flex items-center gap-3'>
          <Edit className='w-5 h-5 text-blue-500' />
          <h1 className='font-semibold text-xl'>Generate Article</h1>
        </div>

        <div className='flex flex-1 justify-center items-center gap-4'>
          <div className='flex gap-4 items-center flex-col text-sm'>
             <Edit className='w-9 h-9' />
          <h1 className='text-gray-500 text-xl text-center'>Write a topic to 'Generate Article'</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteArtice
