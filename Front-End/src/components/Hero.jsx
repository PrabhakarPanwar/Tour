import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Hero() {

    const { assets } = useContext(UserContext)
    return (
        <div style={{ backgroundImage: `url(${assets.village})` }} className='bg-cover bg-center scroll-smooth h-[60vh] md:h-[80vh] flex justify-center '>
            <div className='text-center flex flex-col items-center mt-12 md:mt-40 lg:mt-32 gap-5'>
                <h2 className='text-lg lg:!text-3xl'>Kanatal Orchids</h2>
                <h1 className='font-fredericka !text-3xl lg:!text-5xl border-y-2 p-2 border-black'>The Place of your dreams</h1>
                <h2 className='text-lg lg:!text-3xl'>Discover Kanatal</h2>
            </div>
        </div>
    )
}

export default Hero