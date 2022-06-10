import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import cycle1 from '../../Assets/cycleWorld/cycle1.png'
import cycle2 from '../../Assets/cycleWorld/cycle2.png'
import cycle3 from '../../Assets/cycleWorld/cycle3.png'
const bicycle = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-24 px-5 my-10'>
                <h2 className='text-center text-xl font-bold text-slate-600 mb-10'>Phone Creation Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={cycle1} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={cycle2} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={cycle3} alt="" />
                </div>
                <h3 className='font-bold my-5'>Website Feature</h3>
                <p><li>Its a bicycle website</li></p>
                <p><li>You can add, update, and delete products if you want.</li></p>
                <p><li>The system of delivery has also been kept.</li></p>
                <p><li>Firebase has been used for authentication.</li></p>
                <p><li>Rating progress bar has been added.</li></p>
                <p><li>MongoDB has been used as website database.</li></p>
                <p><li>When you go to my items page, you will see your own added products.</li></p>
                <p><li>And when you go to the manage section, you will see all the items.</li></p>
                <p><li>If you go to other information section, you will see the number of products dynamically.</li></p>

                <h3 className='font-bold my-5'>Technology Used</h3>
                <p><li>React Router, Tailwind, JWT, Firebase Hooks, React Hot Toast, Plugins: daisyui, Plugins: flobite, Plugins: Swiper</li></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default bicycle;