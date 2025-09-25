import { Hash, Home, Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'


const GenerateImage = () => {

  const imageStyle = [
    "Realistic", 'Ghibli style', 'Anime style', 'Cartoon style', 'Realistic style', 'Fantasy style', '3D style', 'Portrait style'
  ]

  const [selectedStyle, setselectedStyle] = useState('Realistic')
  const [input, setinput] = useState()
  const [publis, setpublish] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <div className='p-6 h-full   flex overflow-y-scroll items-start flex-wrap gap-9 text-slate-800 '>
      {/* left col */}
      <form onSubmit={handleSubmit}
        className='p-6 rounded-lg border border-slate-300 w-full md:max-w-lg bg-white'>
        <span className='flex items-center gap-3 w-full'>
          <Sparkles className='w-6 text-green-600' />
          <h1 className='text-xl font-semibold '>Ai Image Generator</h1>
        </span>

        {/* input box */}
        <div className='mt-5'>
          <h2 className='text-xs font-semibold tracking-tight'>Describe your image</h2>
          <textarea rows={4} onChange={(e) => setinput(e.target.value)} value={input}
            className='border border-slate-500 w-full p-2 rounded-lg mt-2 outline-none' placeholder='Enter Text' required />
        </div>
        {/* article lenght box */}
        <div className='mt-5'>
          <h2 className='text-sm font-semibold tracking-tight'>Style</h2>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
            {imageStyle.map((item, index) => {
              return <span onClick={() => setselectedStyle(item)}
                className={`border border-slate-300 p-1 ${selectedStyle === item ? 'bg-green-200 text-green-700 '
                  : "text-gray-700 border-gray-600"
                  } px-3 rounded-full  text-xs cursor-pointer`}>{item}</span>
            })}

          </div>
          <div className='flex items-center gap-3 py-6'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onChange={(e) => setpublish(e.target.checked)} checked={publis}
                className='sr-only peer' />
              <div className='w-9 h-5 bg-slate-300 rounded-full transition peer-checked:bg-green-500'></div>
              <span className='absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make image public</p>

          </div>


          <button className='flex bg-amber-200 w-full justify-center items-center gap-4
          text-sm rounded-lg cursor-pointer px-4 py-2 mt-4
          bg-gradient-to-r from-green-800  to-green-400 text-white'>
            <Image className='w-5' />
            <h3>Generate Image</h3>
          </button>
        </div>
      </form>
      {/* right-col */}

      <div className='w-full max-w-lg p-6 rounded-lg flex flex-col min-h-96 max-h-[600px] border border-gray-300 bg-white'>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-purple-600' />
          <h1 className='font-semibold text-xl'>Generate Image</h1>
        </div>

        <div className='flex flex-1 justify-center items-center gap-4'>
          <div className='flex gap-4 items-center flex-col text-sm'>
            <Image className='w-9 h-9  ' />
            <h1 className='text-gray-500 text-xl text-center'>Write a topic to 'Generate Image'</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImage
