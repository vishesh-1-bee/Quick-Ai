import { Edit, Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const BlogTitle = () => {

    const blogCategory = [
      "General" , 'Technology', 'Business' , 'Health' , 'Lifestyle' , 'Education' , 'Travel' , 'Food'
    ]
  
    const [selectedCategory, setselectedCategory] = useState('General')
    const [input, setinput] = useState()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    }


  return (
    <div className='p-6 h-full   flex overflow-y-scroll items-start flex-wrap gap-9 text-slate-800 '>
      {/* left col */}
      <form onSubmit={handleSubmit}
        className='p-6 rounded-lg border w-full md:max-w-lg bg-white border-slate-300'>
        <span className='flex items-center gap-3 w-full'>
          <Sparkles className='w-6 text-purple-600' />
          <h1 className='text-xl font-semibold '>Ai Title Generator</h1>
        </span>

        {/* input box */}
        <div className='mt-5'>
          <h2 className='text-sm font-semibold tracking-tight'>Keyword</h2>
          <input onChange={(e) => setinput(e.target.value)} value={input}
            type="text" className='border border-slate-500 w-full p-2 rounded-lg mt-2 outline-none' placeholder='Enter Text' required />
        </div>
        {/* article lenght box */}
        <div className='mt-5'>
          <h2 className='text-sm font-semibold tracking-tight'>Category</h2>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
            {blogCategory.map((item, index) => {
              return <span onClick={() => setselectedCategory(item)}
                className={`border border-slate-300 p-1 ${selectedCategory === item ? 'bg-purple-200 text-purple-700 '
                  : "text-gray-700 border-gray-600"
                  } px-3 rounded-full  text-xs cursor-pointer`}>{item}</span>
            })}
          </div>
          <br />

          <button className='flex bg-amber-200 w-full justify-center items-center gap-4
          text-sm rounded-lg cursor-pointer px-4 py-2 mt-4
          bg-gradient-to-r from-purple-500  to-slate-900 text-white'>
            <Hash className='w-5' />
            <h3>Generate Title</h3>
          </button>
        </div>
      </form>
      {/* right-col */}

      <div className='w-full max-w-lg p-6 rounded-lg flex flex-col min-h-96 max-h-[600px] border border-gray-300 bg-white'>
        <div className='flex items-center gap-3'>
          <Hash className='w-5 h-5 text-purple-600' />
          <h1 className='font-semibold text-xl'>Generate Title</h1>
        </div>

        <div className='flex flex-1 justify-center items-center gap-4'>
          <div className='flex gap-4 items-center flex-col text-sm'>
             <Hash className='w-9 h-9  ' />
          <h1 className='text-gray-500 text-xl text-center'>Write a topic to 'Generate Article'</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitle
