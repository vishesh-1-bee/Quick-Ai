import React from 'react'
import Headers from '../components/Headers'
import Testdata from '../components/Testdata'
import Plans from '../components/Plans'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


const Home = () => {
  return (
    <div className=''>
       <Nav />
      <Headers/>
     <Testdata/>
     <Plans/>
     <Footer/>
    </div>
  )
}

export default Home
