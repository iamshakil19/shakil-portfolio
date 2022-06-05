import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
        </div>
    );
};

export default Home;