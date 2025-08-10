import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const BackButton = () => {
  return (
    <Link to='/'>
  <button className='bg-gray-900 text-white rounded-lg py-2 px-4 flex items-center gap-2 hover:bg-gray-700 transition duration-200'>
    <FaArrowLeft />
    Back to Home
  </button>
</Link>
  )
}

export default BackButton