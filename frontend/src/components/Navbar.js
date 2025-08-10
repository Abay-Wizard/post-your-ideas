import React from 'react'

const Navbar = () => {
  return (
   <section className='w-full bg-slate-200 py-6 px-4 sticky top-0 z-50'>
  <div className='flex items-center gap-4 sm:gap-20 py-4'>
    <img 
      className='w-14 h-14 rounded-full' 
      src='https://logo.com/image-cdn/images/kts928pd/production/d12dfdbd6b7501faf694ac42775f19451aee8805-324x328.png?w=1080&q=72&fm=webp' 
      alt='blog icon' 
    />
    <h1 className='text-4xl sm:text-6xl text-purple-800'>Go Blog Your Ideas!</h1> 
  </div>
</section>
  )
}

export default Navbar