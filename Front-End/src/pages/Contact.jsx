import React from 'react'
import GoogleMap from '../components/GoogleMap'
import background from "../assets/img/background.jpg"

function Contact() {
  return (
    <main className='flex flex-col'>
      <div style={{ backgroundImage: `url(${background})`, backgroundPositionY: "55%", backgroundSize: "cover" }} className='relative flex items-center justify-center h-[50vh] w-full '>
        <h1 className=' text-4xl '>Contact</h1>
        <div className='flex gap-10 absolute bottom-[-45px] '>
          <section className='bg-gray-300 font-bold backdrop-blur-md px-20 py-5 rounded-lg '>
            <p>Call Us On</p>
            <p>56789</p>
          </section>
          <section className='bg-gray-300 font-bold backdrop-blur-md px-20 py-5 rounded-lg'>
            <p>E-mail Us</p>
            <p>23456@gmail</p>
          </section>
        </div>
      </div>
      <div className='flex justify-center py-20'>
        <div className='w-[40%]'>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, maxime?</p>
        </div>
        <form className='w-[40%] flex flex-col gap-3 bg-slate-100 p-3' action="" >
          <input className='bg-transparent border-b-2' type="text" placeholder='Full Name' />
          <input className='bg-transparent border-b-2' type="email" name="" id="" placeholder='Email' />
          <textarea className='bg-transparent border-b-2' name="" id="" placeholder='Your Message'></textarea>
          <button className='bg-black text-cyan-50'>Send Now ---</button>
        </form>
      </div>
      <div >
        <GoogleMap />
      </div>
    </main>
  )
}

export default Contact