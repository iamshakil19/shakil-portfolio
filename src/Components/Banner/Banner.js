import React from 'react';
import shakil from '../../Assets/shakil-with-bg.jpg'
import bg from '../../Assets/background-spot.png'
import resume from '../../Assets/resume.pdf'
const Banner = () => {
    return (
        <div id='home'
            style={{
                background: `url(${bg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "screen"
            }}
            className='py-14 lg:py-28 px-4 lg:px-24'>
            <div class="hero" data-aos="fade-up">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:mx-10 mb-7 lg:mb-0'>
                        <div className='flex items-center'>
                            <h2 className='text-2xl lg:text-4xl font-bold mr-8 text-slate-700'>HELLO</h2>
                            <div className='border-b-2 w-36 lg:w-80 mt-1 border-black'></div>
                        </div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-5 text-slate-700">I AM TM SAKIL</h1>
                        <p class="py-6 text-xl font-bold text-slate-700">FRONT END WEB DEVELOPER</p>
                        <a href="#contact">
                            <button className='hover:bg-gradient-to-r from-blue-500 to-violet-500 font-bold hover:text-white h-11 border-blue-400 hover:border-0 w-32 border-2 rounded-md text-sm hover:shadow-xl m-2'>HIRE ME</button>
                        </a>

                        <a href="https://drive.google.com/file/d/1Q9AwLROf1rmsgpCi1V4xolFr6AqzdfEN/view?usp=sharing" target={'_blank'}>
                            <button
                                type='submit' className='hover:bg-gradient-to-r from-blue-500 to-violet-500 font-bold hover:text-white h-11 border-blue-400 hover:border-0 w-32 border-2 rounded-md text-sm sm:mx-3 m-2 hover:shadow-xl'>RESUME</button>
                        </a>
                    </div>
                    <div className='lg:mx-10'>
                        <img className='w-48 md:w-64 lg:w-80 shadow-2xl rounded-lg' src={shakil} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;