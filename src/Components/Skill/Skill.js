import React from 'react';
import html from '../../Assets/Experties/html.png'
import css from '../../Assets/Experties/css.png'
import bootstrap from '../../Assets/Experties/bootstrap.png'
import tailwind from '../../Assets/Experties/tailwind.png'
import js from '../../Assets/Experties/js.png'
import react from '../../Assets/Experties/react.png'

import node from '../../Assets/Familiar/node.png'
import express from '../../Assets/Familiar/express.png'
import mongodb from '../../Assets/Familiar/mongodb.png'
import restapi from '../../Assets/Familiar/api.png'
import firebase from '../../Assets/Familiar/firebase.png'

import github from '../../Assets/Tools/github.png'
import heroku from '../../Assets/Tools/heroku.png'
import netlify from '../../Assets/Tools/netlify.png'
import postman from '../../Assets/Tools/postman.png'
import vscode from '../../Assets/Tools/vscode.png'

const Skill = () => {
    return (
        <div className='py-10 lg:pt-28 px-4 lg:px-24' id='skill'>
            <h2 className='text-2xl lg:text-4xl font-bold text-slate-700 text-center pb-5'>My Web Development Skills</h2>

            <div class="divider md:w-[500px] lg:w-[600px] mx-auto"><h3 className='text-xl lg:text-2xl font-bold text-slate-700 text-center mb-7 mt-5'>Expertise</h3></div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-6 rounded-xl mx-auto'>
                    <img className='w-20 mx-auto' src={html} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-6 rounded-xl mx-auto'>
                    <img className='w-20 mx-auto' src={css} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-8 rounded-xl mx-auto'>
                    <img className='w-20 mx-auto' src={bootstrap} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-20 mx-auto' src={tailwind} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-14 mx-auto' src={js} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-14 mx-auto' src={react} alt="" />
                </div>
            </div>

            <div class="divider md:w-[500px] lg:w-[600px] mx-auto"><h3 className='text-xl lg:text-2xl font-bold text-slate-700 text-center my-7'>Familiar</h3></div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-7 rounded-xl mx-auto'>
                    <img className='w-24 mx-auto' src={node} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-24 mx-auto' src={express} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-12 rounded-xl mx-auto'>
                    <img className='w-28 mx-auto' src={mongodb} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-16 mx-auto' src={restapi} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-8 rounded-xl mx-auto'>
                    <img className='w-12 mx-auto' src={firebase} alt="" />
                </div>
            </div>

            <div class="divider md:w-[500px] lg:w-[600px] mx-auto"><h3 className='text-xl lg:text-2xl font-bold text-slate-700 text-center my-7'>Tools</h3></div>
            

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-10 rounded-xl mx-auto'>
                    <img className='w-14 mx-auto' src={github} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-14 rounded-xl mx-auto'>
                    <img className='w-24 mx-auto' src={heroku} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-8 rounded-xl mx-auto'>
                    <img className='w-28 mx-auto' src={netlify} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-9 rounded-xl mx-auto'>
                    <img className='w-16 mx-auto' src={postman} alt="" />
                </div>

                <div className='hover:shadow-xl hover:shadow-blue-100 w-48 h-32 pt-12 rounded-xl mx-auto'>
                    <img className='w-12 mx-auto' src={vscode} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skill;