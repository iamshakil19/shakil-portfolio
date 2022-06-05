import React from 'react';
import phoneCreation from '../../Assets/phone-creation.png'
import cycleWorld from '../../Assets/cycle-world.png'
import strength from '../../Assets/strength.png'
import github from '../../Assets/github.png'
import live from '../../Assets/live.png'
const Projects = () => {
    return (
        <div className='pt-20 pb-14 px-4 lg:px-24' id='projects'>
            <h2 className='text-2xl lg:text-4xl font-bold text-slate-700 text-center pb-10'>My Top 3 Projects</h2>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="card sm:max-w-sm md:max-w-md lg:max-w-lg bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={phoneCreation} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title pl-10">Phone Creation</h2>
                        <p className='pl-10'>This is a phone manufacturer's website</p>
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
                        </div>
                    </div>
                </div>

                <div class="card sm:max-w-sm md:max-w-md lg:max-w-lg  bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={cycleWorld} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title pl-10">Cycle World</h2>
                        <p className='pl-10'>Its a bicycle website</p>
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
                        </div>
                    </div>
                </div>

                <div class="card sm:max-w-sm md:max-w-md lg:max-w-lg  bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={strength} alt="Shoes" /></figure>
                    <div class="card-body px-0">
                        <h2 class="card-title pl-10">Center Of Strength</h2>
                        <p className='pl-10'>Its a bicycle website</p>
                        <div class="card-actions justify-start px-2 mx-auto">
                            <a href="https://assignment10-e4ffa.web.app/" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={live} alt="" />Live</button>
                            </a>
                            <a href="https://github.com/tmsakil/center-of-strength" target={'_blank'}>
                                <button
                                    type='submit' className='bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-white h-11 w-28 rounded-md text-sm mx-3 border-0 shadow-xl flex justify-center items-center'> <img className='w-6 inline mr-2' src={github} alt="" />Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;