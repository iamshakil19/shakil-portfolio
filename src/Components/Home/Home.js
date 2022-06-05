import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

import bodyBg from '../../Assets/body-bg.png'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div
            style={{
                background: `url(${bodyBg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "screen"
            }}
        >
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;