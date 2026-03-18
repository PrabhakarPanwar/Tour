import React from 'react'
import GoogleMap from '../components/GoogleMap'
import background from "../assets/img/background.jpg"

function Contact() {
  return (
    <main className='flex flex-col'>
      <h1 style={{ backgroundImage: `url(${background})`, backgroundPositionY: "55%", backgroundSize: "cover" }} className='flex pt-[140px] justify-center h-[50vh] w-full'>Contact</h1>
      <div className='flex justify-center py-20'>
        <div className='w-[40%]'>
          <h2 className='underline'>Contact Us</h2>
          <p className='w-[80%]'>We’d love to hear from you! Whether you have a question, an idea, or just want to say hello, we’re always excited to connect. Fill out the form or drop us an email, and let’s start the conversation today.
          </p>
          <p className='mt-4 font-bold'>🕒 Available: Mon-Sat, 9 AM - 6 PM </p>
          <a href={"tel:+91234567890"} className='font-bold'>📞 Phone: +91 234 567 89 </a>
        </div>
        <form className='w-[40%] flex flex-col gap-3 bg-slate-100 p-3 rounded-md' action="" >
          <input className='bg-transparent border-b-2' type="text" placeholder='Full Name' required />
          <input className='bg-transparent border-b-2' type="email" name="" id="" placeholder='Email' required />
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