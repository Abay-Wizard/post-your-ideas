import React from 'react'
import {Link} from 'react-router-dom'
import BackButton from '../components/BackButton'

const Dashboard = () => {
    const name= localStorage.getItem('userName')
  return (
    <section className='bg-red-100 mx-auto py-20 px-4 w-full'>
      <div className='relative py-12'>
        <div className='absolute top-10 left-10'><BackButton/></div>
        <div className='flex flex-col items-center gap-8 px-5 py-8'>
          <h1 className='text-3xl text-green-600 font-semibold'>Welcome to dashboard, {name}!</h1>
          <div><Link to='/show'><button className='rounded-lg bg-red-500 text-white py-2 px-1'>Show posts by other visitors</button></Link></div>
          <p className='text-xl text-gray-800'>This is a place where you put your ideas in texts 💟💟 </p>
          <Link to='/create'>
            <button className='bg-gray-800 rounded-lg text-white text-xl py-2 px-2'>Start post here ׂ╰┈➤</button>
          </Link>
        </div>
       </div>
    </section>
  )
}

export default Dashboard