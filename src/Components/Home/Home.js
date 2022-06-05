import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;