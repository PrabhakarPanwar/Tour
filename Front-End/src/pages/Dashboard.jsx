import React, { useState } from 'react'
import Adding from '../components/Adding';
import Deleting from '../components/Deleting';

function Dashboard() {
    const [tab, setTab] = useState("add")
    return (
        <>
            <button className='bg-black text-white rounded-none' onClick={() => setTab("add")}>Upload Image</button>
            <button className='bg-black text-white rounded-none' onClick={() => setTab("del")}>Delete Image</button>
            <div className='flex flex-col gap-3 justify-center h-[100vh] w-[50%] mx-auto'>

                {tab == "add" && <Adding />}
                {tab == "del" && <Deleting />}
            </div>
        </>
    );
}

export default Dashboard