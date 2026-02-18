import React from 'react'

function Parallex() {
    return (
        <main className='py-5'>
            <div className='flex h-[30vh] relative flex-col md:flex-row border-y 
             border-black '>
                <section className='md:flex-1 my-auto text-center md:bg-transparent bg-white p-2 z-10'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ducimus sequi dolorem, reiciendis pariatur rerum quaerat doloremque est voluptatem. Officiis eligendi magnam ducimus veritatis nihil ipsum. Expedita, labore? Ut voluptas soluta officiis ad vero unde quo ex distinctio est! Laborum ad atque consequuntur et ipsam deleniti vitae quibusdam hic officia.</p>
                </section>
                <section className='md:flex-1 w-full h-full md:static absolute bg-fixed bg-cover md:[clip-path:polygon(15%_0%,100%_0,100%_100%,0_100%)] bg-right' style={{ backgroundImage: `url("https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Flocation%2FUttarakhand%2Fblogs%2Fbest-time-to-visit-kanatal-e7dd5095d9-rtrp99-webp-147d021ff4-1752057732534.webp&w=3840&q=75")` }}>
                </section>
            </div>
        </main>
    )
}

export default Parallex