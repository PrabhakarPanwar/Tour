import React from 'react'
import GoogleMap from '../components/GoogleMap'
import background from "../assets/img/background.jpg"

function Contact() {
  return (
    <main className='flex flex-col'>
      <h1 style={{ backgroundImage: `url(${background})`, backgroundPositionY: "55%", backgroundSize: "cover" }} className='flex pt-[140px] justify-center h-[50vh] w-full'>Contact</h1>
      <div className='flex flex-col md:flex-row justify-center py-20'>
        <div className='md:w-[40%] text-center'>
          <h2 className='underline'>Contact Us</h2>
          <p className='w-[80%] mx-auto'>We’d love to hear from you! Whether you have a question, an idea, or just want to say hello, we’re always excited to connect. Fill out the form or drop us an email, and let’s start the conversation today.
          </p>
          <p className='py-2 font-bold '>🕒 Available: Mon-Sat, 9 AM - 6 PM </p>
          <a href={"tel:+91234567890"} className=' font-bold '>📞 Phone:+<span className='underline'>91 234 567 89</span></a>
        </div>
        <form className='md:w-[40%] my-4 flex flex-col gap-3 bg-slate-100 p-3 rounded-md' action="" >
          <input className='bg-transparent border-b-2' type="text" placeholder='Full Name' required />
          <input className='bg-transparent border-b-2' type="email" name="" id="" placeholder='Email' required />
          <textarea className='bg-transparent border-b-2' name="" id="" placeholder='Your Message'></textarea>
          <button className='bg-black text-cyan-50'>Send Now </button>
        </form>
      </div>
      <div className='h-96 w-full'>
        {/* <GoogleMap /> */}
        <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.582294574498!2d78.32129499999999!3d30.419646000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908e0f426a82697%3A0xe00c1539ebddd88f!2sThe%20Kanatal%20Orchids!5e1!3m2!1sen!2sin!4v1774496460014!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </main>
  )
}

export default Contact