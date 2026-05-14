import React from 'react'
import { ElfsightWidget } from 'react-elfsight-widget';

function Feedback() {
    return (
        <main className='py-10'>
            <h2 className='text-4xl mb-5'><span className='border-black border-b-4'>What Our Customer Say</span></h2>
            <div className="h-[50vh] w-[90vw] overflow-scroll overflow-x-hidden mx-auto">
                <ElfsightWidget widgetID="68a2b847-d253-4ce8-8859-51a9d3ba4a0f" />
            </div>
        </main>
    )
}

export default Feedback