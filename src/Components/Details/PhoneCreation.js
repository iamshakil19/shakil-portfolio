import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import phone1 from '../../Assets/phoneCreation/phone1.png'
import phone2 from '../../Assets/phoneCreation/phone2.png'
import phone3 from '../../Assets/phoneCreation/phone3.png'

const PhoneCreation = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-24 px-5 my-10'>
                <h2 className='text-center text-xl font-bold text-slate-600 mb-10'>Phone Creation Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={phone1} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={phone2} alt="" />
                    <img className='w-64 md:w-96 lg:w-[500px] mx-auto shadow-xl rounded-md' src={phone3} alt="" />
                </div>
                <h3 className='font-bold my-5'>Website Feature</h3>
                <p><li>This is a phone manufacturer's website</li></p>
                <p><li>Here users can place orders and pay by card.</li></p>
                <p><li>And the user will be able to give reviews to share his experience.</li></p>
                <p><li>When the user logs in, he will see a route called dashboard and if he goes to that route, he will see 3 routes named my profile, my orders, add review.</li></p>
                <p><li>If the user goes to My profile, the user will be able to see his profile and will be able to update.</li></p>
                <p><li>If he goes to my orders, he will be able to see all his orders and will be able to cancel the un-paid orders if he wants.</li></p>
                <p><li>And in the last route you will get add review. If he goes there, he will be able to give reviews.</li></p>
                <p><li>Then when an admin logs in, he will go to the dashboard and see my profile, add products, manage order, manage products, make admin route.</li></p>
                <p><li>If you go to Add products, you will be able to add products, if you go to manage order, you will be able to see who has ordered them and if you want, you can change their status.</li></p>
                <p><li>If you go to manage products, you can see all the products and if you want, you can delete them.</li></p>
                <p><li>And in the last route there is make admin, there if an admin wants a user can make admin. You can also delete.</li></p>

                <h3 className='font-bold my-5'>Technology Used</h3>
                <p><li>React, Firebase, Express js, MongoDB, Stripe, Tailwind CSS, Swiper, React Query, Taiwind [daisyUi], React Hot Toast</li></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PhoneCreation;