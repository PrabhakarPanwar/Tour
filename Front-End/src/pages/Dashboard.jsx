import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Dashboard() {
    const { assets } = useContext(UserContext)
    return (
        <div>
            <form className='flex gap-2' action="">
                <section className='border-r-2 p-2 border-black'>
                    <p><strong>Add +</strong></p>
                    <p><strong>Update {"><"}</strong></p>
                </section>
                <section className='w-[70%]'>
                    <div className='flex gap-3 flex-col'>
                        <label className='h-20 w-20' htmlFor="image">
                            <img className='rounded-full' src={assets.upload} alt="Upload" />
                            <input className='hidden' type="file" id="image" accept='image/*' />
                        </label>
                        <input className='p-2' type="text" placeholder='title' />
                        <input className='p-2' type="text" placeholder='description' />
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Dashboard