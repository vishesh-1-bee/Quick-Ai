import React, { useState } from 'react'
import Markdown from 'react-markdown'
const Creationitem = ({ item }) => {
    const [expand, setexpand] = useState(false)
    return (
        <div onClick={() => setexpand(!expand)}
            className='p-4 max-w-5xl bg-white text-sm border rounded-lg cursor-pointer'>
            <div className=' flex justify-between items-center gap-4'>
                {/* div for the prompy and date */}
                <div>
                    <h2>
                        {item.prompt}
                    </h2>
                    <p>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
                </div>
                {/* div for the loke button */}
                <button className='px-4 py-1 bg-white rounded-full border text-black border-gray-200 '>{item.type}</button>
            </div>

            {
                expand && (
                    <div>
                        {item.type === 'image' ? (
                            <div>
                                <img src={item.content} className='mt-4 w-full max-w-md' alt="" />
                            </div>
                        ) :
                            (
                                <div className='overflow-y-scroll mt-4 h-full text-sm text-slate-600'>
                                    <div className='reset-tw'>
                                        <Markdown>
                                            {item.content}
                                        </Markdown>

                                    </div>
                                </div>
                            )}
                    </div>
                )
            }
        </div>

    )
}

export default Creationitem
