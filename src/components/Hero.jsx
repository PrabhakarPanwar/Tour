import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Hero() {

    const { assets } = useContext(UserContext)
    return (
        <div style={{ backgroundImage: `url(${assets.village})` }} className='bg-cover bg-center scroll-smooth h-[80vh] rounded-xl flex items-center'>
            <div className='text-center w-[35%] flex flex-col gap-5'>
                <h1 className='text-xl font-bold font-poiret'>Hotel Name</h1><hr className='bg-black mx-auto w-20 h-[3px]' />
                <p className='text-5xl font-fredericka'>The Place of your dreams</p>
                <p className='text-xl font-bold font-poiret'>Discover Kanatal</p><hr className='bg-black mx-auto w-20 h-[3px]' />
            </div>
        </div>
    )
}

export default Hero