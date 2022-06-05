import React from 'react';
import shakil from '../../Assets/shakil-with-bg.jpg'
import bg from '../../Assets/background-spot.png'
const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "screen"
            }}
            className='py-10 lg:py-20 px-5 lg:px-24'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:mx-10'>
                        <img className='w-48 md:w-64 lg:w-80 shadow-2xl rounded-lg' src={shakil} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:mx-10'>
                        <div className='flex items-center'>
                            <h2 className='text-2xl lg:text-4xl font-bold mr-8 text-slate-700'>HELLO</h2>
                            <div className='border-b-2 w-36 lg:w-60 mt-1 border-black'></div>
                        </div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-5 text-slate-700">I AM TM SAKIL</h1>
                        <p class="py-6 text-xl font-bold text-slate-700">FRONT END DEVELOPER</p>
                        <button className='hover:bg-gradient-to-r from-blue-500 to-violet-500 font-bold hover:text-white h-11 border-blue-400 hover:border-0 w-32 border-2 rounded-md text-sm hover:duration-500 hover:shadow-xl'>HIRE ME</button>

                        <button className='hover:bg-gradient-to-r from-blue-500 to-violet-500 font-bold hover:text-white h-11 border-blue-400 hover:border-0 w-32 border-2 rounded-md text-sm hover:duration-500 mx-3 hover:shadow-xl'>GET CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;