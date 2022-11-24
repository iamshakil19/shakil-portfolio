import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import payra1 from "../../Assets/payra/payra-1.png"
import payra2 from "../../Assets/payra/payra-2.png"
import payra3 from "../../Assets/payra/payra-3.png"

const Payra = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-24 px-5 my-10'>
                <h2 className='text-center text-xl font-bold text-slate-600 mb-10'>Payra Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={payra1} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={payra2} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={payra3} alt="" />
                </div>
                <h3 className='font-bold my-5'>Website Feature</h3>
                <p><li>This is a blood donation website</li></p>
                <p><li>Here a user can register as a donor.</li></p>
                <p><li>And those who need blood can make a direct phone call or submit a form</li></p>
                <p><li>There is a leaderboard system, where a leaderboard is displayed with the donation numbers of donors.</li></p>
                <p><li>Only admins have access to the dashboard and everything is controlled from there.</li></p>
                <p><li>Inside the dashboard, the analytics page contains charts and some activities that can be viewed and analyzed very easily.</li></p>
                <p><li>And donors are divided into 3 pages like donor request, available donor, unavailable donor. Those whose last donation is less than 90 days will be on the unavailable donor page.</li></p>
                <p><li>There is a system to add, update, delete contacts.</li></p>
                <p><li>There are more features and we are trying to bring more in the future.</li></p>

                <h3 className='font-bold my-5'>Technology Used</h3>
                <p><li>React, Firebase, Express js, MongoDB, Tailwind CSS, Swiper, React Query, Taiwind [daisyUi], React Hot Toast, AOS, Chart JS, Image bb</li></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Payra;