import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll';
import './Navbar.css'
import resume from '../../images/Fakrul_Bhuiyan_cv.pdf';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top w-100 custom-nav-bg">
            <div className="container-fluid container">
                <LinkScroll className="navbar-brand text-white logo-text navbar-link-style" to="home" smooth={true} duration={1000}>Fakrul Abedin</LinkScroll>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="about" activeClass="active" smooth={true} duration={1000}>About</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="experience" activeClass="active" smooth={true} duration={1000}>Experience</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="projects" activeClass="active" smooth={true} duration={1000}>Projects</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="skills" activeClass="active" smooth={true} duration={1000}>Skills</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="awards" activeClass="active" smooth={true} duration={1000}>Awards</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="education" activeClass="active" smooth={true} duration={1000}>Education</LinkScroll>
                        </li>
                        <li className="nav-item me-2">
                            <LinkScroll className="nav-link text-white navbar-link-style" to="contact" activeClass="active" smooth={true} duration={1000}>Contact</LinkScroll>
                        </li>
                        <li className="nav-item me-2 my-2">
                            <Link to={resume} className="resume-btn" target="_blank" download>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;