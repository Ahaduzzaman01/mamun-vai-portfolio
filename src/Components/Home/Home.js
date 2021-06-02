import React from 'react';
import {Link} from "react-router-dom";
import About from '../About/About';
import Awards from '../Awards/Awards';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css';
import resume from '../../images/Fakrul_Bhuiyan_cv.pdf';

const Home = () => {
    return (
        <main id="home">
            <div className="home-container d-flex align-items-center justify-content-center">
                <Navbar />
                <div className="text-white text-center home-banner-container">
                    <h1 className="m-0">I want to make things <br />that make a difference.</h1>
                    <div className="mt-5">
                    <Link to={resume} className="download-btn" target="_blank" download>Download Resume</Link>
                    </div>
                </div>
            </div>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Awards />
            <Education />
            <Contact />
        </main>
    );
};

export default Home;