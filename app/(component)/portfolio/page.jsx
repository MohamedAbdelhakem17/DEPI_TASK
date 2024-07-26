import React from 'react'

export default function Portfolio() {
  return (
    <>
      <section className='w-full h-dvh bg-white'>
        <div className="container flex items-center justify-around px-5 h-100">

          <div className="w-6/12">
            <h2 className='text-7xl text-center text-blue-300 font-bold'>Brandon Johnson</h2>
            <p className='text-center font-serif font-bold text-xl'>Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <div className="flex justify-center gap-x-3">
              <a href="h" className='icon main-transition'><img className=' backdrop-grayscale hover:backdrop-grayscale-0  ' src="facebook.svg" /></a>
              <a href="h" className='icon main-transition'><img className=' backdrop-grayscale hover:backdrop-grayscale-0 ' src="instagram.svg" /></a>
              <a href="h" className='icon main-transition'><img className=' backdrop-grayscale hover:backdrop-grayscale-0 ' src="twitterx.svg" /></a>
              <a href="h" className='icon main-transition'><img className=' backdrop-grayscale hover:backdrop-grayscale-0 ' src="inked-in.svg" /></a>
            </div>
          </div>

          <div className='w-[500px] h-[500px] border-5 border-blue-700 rounded-full overflow-hidden p-2 drop-shadow-lg'>
            <img src="img1.jpg" alt="My" className='w-100 h-100 rounded-full' />
          </div>

        </div>

      </section>
    </>
  )
}
