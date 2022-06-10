import React from 'react';
import phoneCreation from '../../Assets/phone-creation.png'
import cycleWorld from '../../Assets/cycle-world.png'
import strength from '../../Assets/strength.png'
import github from '../../Assets/github.png'
import i from '../../Assets/i.png'
import live from '../../Assets/live.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='pt-20 pb-14 px-4 lg:px-24' id='projects'>
            <h2 className='text-2xl lg:text-4xl font-bold text-slate-700 text-center pb-10'>My Top 3 Projects</h2>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div class="card bg-base-100 shadow-xl image-full mx-auto" data-aos="fade-up">
                    <figure><img src={phoneCreation} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title px-10">Phone Creation</h2>
                        <p className='px-10 '><li>This is a phone manufacturer's website</li></p>
                        <p className='px-10 '><li>This is a medium-level full-stack project. There are some separate routes for
                            admins, such as adding products, managing products, managing orders, and
                            making admin.</li></p>
                        <p className='px-10 mb-7'><li>Here a wholesaler can buy the product as well as go to the order page and see all the details of his order.</li></p>
                        <div class="card-actions justify-start px-2 mx-auto">
                            <a href="https://assignment-12-50cc2.web.app/" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={live} alt="" />Live</button>
                            </a>
                            <a href="https://github.com/tmsakil/phone-creation-client" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" />Client</button>
                            </a>
                            <a href="https://github.com/tmsakil/phone-creation-server" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" /> Server</button>
                            </a>
                            <Link to={"/phoneCreation"}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={i} alt="" />Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl image-full mx-auto" data-aos="fade-up">
                    <figure><img src={cycleWorld} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title px-10">Cycle World</h2>
                        <p className='px-10'><li>Its a bicycle website</li></p>
                        <p className='px-10'><li>The website uses Express js for BackEnd and MongoDB for the database and JWT, Firebase are used for security and authentication.</li></p>
                        <p className='px-10 mb-7'><li>If you want you can increase the quantity of products, as well as delivery,
                            delete and add</li></p>
                        <div class="card-actions justify-start px-2 mx-auto">
                            <a href="https://assignment11-a3660.web.app/" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={live} alt="" />Live</button>
                            </a>
                            <a href="https://github.com/tmsakil/cycle-world" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" />Client</button>
                            </a>
                            <a href="https://github.com/tmsakil/cycle-world-server" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" /> Server</button>
                            </a>
                            <Link to={"/BiCycle"}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={i} alt="" />Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl image-full mx-auto" data-aos="fade-up">
                    <figure><img src={strength} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title px-10">Center Of Strength</h2>
                        <p className='px-10'><li>This is a gym website</li></p>
                        <p className='px-10'><li>React Router has been used for a better user experience</li></p>
                        <p className='px-10 mb-7'><li>Clicking on the purchase button of the package on the home page will take
                            you to the checkout page and the checkout page has been protected.</li></p>
                        <div class="card-actions justify-start px-2 mx-auto">
                            <a href="https://assignment10-e4ffa.web.app/" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={live} alt="" />Live</button>
                            </a>
                            <a href="https://github.com/tmsakil/center-of-strength" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" />Github</button>
                            </a>
                            <Link to={"/strength"}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={i} alt="" />Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;