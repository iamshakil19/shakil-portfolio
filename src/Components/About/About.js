import React from 'react';
import aboutImg from '../../Assets/about.png'
import resume from '../../Assets/resume.pdf'
const About = () => {
    return (
        <div className='pt-20 mb-10 px-4 lg:px-24' id='about'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:px-5' data-aos="fade-up">
                        <h1 class=" text-2xl lg:text-4xl font-bold text-slate-700">LET’S    <br />
                            INTRODUCE ABOUT
                            <br />
                            MYSELF</h1>
                        <p class="py-6 w-full md:w-96 lg:w-[500px] text-justify">My name is TM Sakil. I am 23years old. I am currently studying for a diploma in computer subject at a private college in Dhaka. My hobbies are traveling and playing cricket. My strength is I am a self-motivated and hard-working person. My weakness is I easily Trust anyone. <br /> That's all about me.</p>
                        <a href={resume} download={resume}>
                            <button
                                type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-32 rounded-md text-sm mx-3 border-0 shadow-xl'>GET RESUME</button>
                        </a>
                    </div>
                    <div className='lg:px-5' data-aos="fade-up">
                        <img src={aboutImg} class=" w-96 rounded-lg lg:w-[500px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;