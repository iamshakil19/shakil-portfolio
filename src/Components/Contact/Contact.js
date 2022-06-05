import React from 'react';
import contactBg from '../../Assets/contact.png'
import fb from '../../Assets/facebook.png'
import github from '../../Assets/github-black.png'
import linkedin from '../../Assets/linkedin.png'
const Contact = () => {
    return (
        <div
            style={{
                background: `url(${contactBg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className=" py-10 px-4 md:mx-10 lg:mx-24 my-10"
        >
            <div className='p-5 grid grid-cols-1 lg:grid-cols-2 items-center'>

                <div className='lg:mx-auto'>
                    <h2 className='text-white text-2xl font-bold mb-5'>Get In Touch</h2>

                    <p className='text-white mb-1'><span className=' font-bold'>Address :</span> Mirpur 13, Dhaka 1216, Bangladesh</p>
                    <p className='text-white mb-1'><span className=' font-bold'>Email :</span> tmsakil19@gmail.com</p>
                    <p className='text-white mb-4'><span className=' font-bold'>Phone :</span> +880 1877018851</p>
                    <div className='flex'>
                        <a href="https://www.facebook.com/iamshakilahmed.09/" target={'_blank'}>
                            <img className='w-8 bg-slate-200 rounded-full mx-2' src={fb} alt="" />
                        </a>

                        <a href="https://github.com/tmsakil" target={'_blank'}>
                            <img className='w-8 bg-slate-200 rounded-full mx-2' src={github} alt="" />
                        </a>

                        <a href="https://www.linkedin.com/in/tmsakil/" target={'_blank'}>
                            <img className='w-8 bg-slate-200 rounded-full mx-2' src={linkedin} alt="" />
                        </a>
                    </div>
                </div>


                <div className='lg:mx-auto'>
                    <h2 className='text-white text-2xl font-bold mb-5 mt-10'>Say Something</h2>

                    <input type="text" placeholder="Your Name" class="input w-52 lg:w-80 bg-transparent focus:outline-none border text-white border-white" />
                    <br />
                    <br />
                    <input type="email" placeholder="Your Email" class="input w-52 lg:w-80 bg-transparent focus:outline-none border text-white border-white" />
                    <br />
                    <br />
                    <textarea type="text" placeholder="Your Message" class="input w-52 lg:w-80 bg-transparent focus:outline-none border text-white border-white h-24 pt-2" />
                    <br />
                    <br />
                    <input className='bg-white font-bold py-1 px-4 rounded-md text-blue-600 cursor-pointer float-right' type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;