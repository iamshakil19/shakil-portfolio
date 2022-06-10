import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import strength1 from '../../Assets/strength/strength1.png'
import strength2 from '../../Assets/strength/strength2.png'
import strength3 from '../../Assets/strength/strength3.png'

const Strength = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-24 px-5 my-10'>
                <h2 className='text-center text-xl font-bold text-slate-600 mb-10'>Phone Creation Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={strength1} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={strength2} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={strength3} alt="" />
                </div>
                <h3 className='font-bold my-5'>Website Feature</h3>
                <p><li>This is a gym website.</li></p>
                <p><li>Here you will see our packages.</li></p>
                <p><li>You will also see some protein foods.</li></p>
                <p><li>If you want to take our newsletter, you can submit the email in the footer below.</li></p>
                <p><li>Checkout page is protected so if you want to go there you have to login.</li></p>
                <p><li>If you want you can also login with email password or you can also login with facebook / google/ github.</li></p>
                <p><li>There are also blog pages and about me pages.</li></p>

                <h3 className='font-bold my-5'>Technology Used</h3>
                <p><li>react firebase hooks, react router, tailwind, react toastify, daisyUI Tailwind css components</li></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Strength;