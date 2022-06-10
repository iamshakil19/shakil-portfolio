import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-[500px]'>
                <h2 className='flex justify-center items-center mt-10 md:mt-24 lg:mt-40 font-extrabold text-2xl md:text-3xl lg:text-4xl font-serif text-slate-400'>COMING SOON...</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;