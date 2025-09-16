import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='border-2 w-2/12 h-full border-slate-400'>
      <h1>layout</h1>
      <Outlet/>
    </div>
  )
}

export default Layout
