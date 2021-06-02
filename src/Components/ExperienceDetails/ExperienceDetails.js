import React from 'react';
import Aos from 'aos';
import './ExperienceDetails.css'
import 'aos/dist/aos.css';
import wespireLogo from '../../images/logo/wespire-logo.jpg';
import siLogo from '../../images/logo/si-logo.png';
import { useEffect } from 'react';

const ExperienceDetails = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="">
            <div data-aos="zoom-in" className="shadow experience-card mb-5 p-0">
                <div className="d-flex align-items-center justify-content-between container py-3 px-5 top-part flex-wrap">
                    <div className="d-flex align-items-center img-box">
                        <a href="#"><img src={wespireLogo} alt="" /></a>
                        <p className="m-0 ms-3 fs-4"><a href="#" className="a-tag-style">WESPIRE</a></p>
                    </div>
                    <div><h5 className="m-0">Full-Stack Software Developer</h5></div>
                </div>
                <div className="px-4 pb-3">
                    <p className="fst-italic py-4 m-0">SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</p>

                    <p className="fw-bold">DEVELOP PRODUCT</p>

                    <ul>
                        <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                        <li>Lead front-end development, creating and documenting app-wide design system</li>
                        <li>Oversee transition from page-based styles to modular component styles</li>
                        <li>Guide best practices around accessible, semantic UI/UX</li>
                        <li>Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml</li>
                    </ul>

                    <p className="fw-bold">ACCOMPLISHMENTS</p>

                    <ul>
                        <li>Dramatically increased speed of UI development using atomic, scalable CSS</li>
                        <li>Built tool to convert HRIS data into user accounts to simplify onboarding</li>
                        <li>Implemented inline @tagging feature to increase app share-ability</li>
                    </ul>
                </div>
                <div className="bg-warning px-4 py-3">
                    <p className="mb-0 text-white">Jan 2016 - Present | Boston, MA</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="shadow experience-card mb-5 p-0">
                <div className="d-flex align-items-center justify-content-between container py-3 px-5 top-part flex-wrap">
                    <div className="d-flex align-items-center img-box">
                        <a href="#"><img src={wespireLogo} alt="" /></a>
                        <p className="m-0 ms-3 fs-4"><a href="#" className="a-tag-style">WESPIRE</a></p>
                    </div>
                    <div><h5 className="m-0">QA Developer</h5></div>
                </div>
                <div className="px-4 px-4 pb-3">
                    <p className="fst-italic py-4 m-0">SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</p>
                    <ul>
                        <li>Improved accuracy, coverage, and speed of automated tests</li>
                        <li>Created an automated ‘smoke test’ using Ruby and the CrossBrowserTesting API</li>
                        <li>Streamlined CLI and deployment, saving 10/hrs week and increasing releases 5x</li>
                    </ul>
                </div>
                <div className="bg-warning px-4 py-3">
                    <p className="mb-0 text-white">May 2015 - Dec 2015 | Boston, MA</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="shadow experience-card mb-5 p-0">
                <div className="d-flex align-items-center justify-content-between container py-3 px-5 top-part flex-wrap">
                    <div className="d-flex align-items-center img-box">
                        <a href="#"><img src={siLogo} alt="" /></a>
                        <p className="m-0 ms-3 fs-4"><a href="#" className="a-tag-style">INTRO COURSE</a></p>
                    </div>
                    <div>
                        <h5 className="m-0">Instructor & Curriculum Designer</h5>
                    </div>
                </div>
                <div className="px-4 pb-3">
                    <p className="fst-italic py-4 m-0">8-week course for students enrolled in the Fundamentals Classes Intro to Web Design</p>

                    <ul>
                        <li>Teaching the basics of HTML, CSS, and the principles of responsive design.</li>
                        <li>Currently redesigning and building a new, improved Web Design curriculum to be implemented across all SI channels in 2018</li>
                    </ul>

                    <p className="fw-bold">ACCOMPLISHMENTS</p>

                    <ul>
                        <li>Increased the average student retention rate from less than 40% to more than 95%</li>
                        <li>Doubled the average amount of students that move from Funamdentals Classes to the Full-Time program</li>
                    </ul>
                </div>
                <div className="bg-warning px-4 py-3">
                    <p className="mb-0 text-white">Jan 2016 - Present | Boston, MA</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="shadow experience-card mb-5 p-0">
                <div className="d-flex align-items-center justify-content-between container py-3 px-5 top-part flex-wrap">
                    <div className="d-flex align-items-center img-box">
                        <a href="#"><img src={siLogo} alt="" /></a>
                        <p className="m-0 ms-3 fs-4"><a href="#" className="a-tag-style">INTRO COURSE</a></p>
                    </div>
                    <div>
                        <h5 className="m-0">Instructor</h5>
                    </div>
                </div>
                <div className="px-4 pb-3">
                    <p className="fst-italic py-4 m-0">One-off community class open to the public and sponsored by Resilient Coders</p>

                    <ul>
                        <li>Taught an introductory seminar covering HTML, CSS, and primarily Bootstrap, with a one-page website deliverable</li>
                    </ul>
                </div>
                <div className="bg-warning px-4 py-3">
                    <p className="mb-0 text-white">Nov 2016 | Boston, MA</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="shadow experience-card mb-5 p-0">
                <div className="d-flex align-items-center justify-content-between container py-3 px-5 top-part flex-wrap">
                    <div className="d-flex align-items-center img-box">
                        <a href="#"><img src={wespireLogo} alt="" /></a>
                        <p className="m-0 ms-3 fs-4"><a href="#" className="a-tag-style">FULL-TIME PROGRAM</a></p>
                    </div>
                    <div><h5 className="m-0">Instructor</h5></div>
                </div>
                <div className="px-4 pb-3">
                    <p className="fst-italic py-4 m-0">2-day intensive and interactive courses and lab work with students in the Full Time program.</p>

                    <p className="fw-bold">WEB DESIGN TOPICS</p>

                    <ul>
                        <li>Intro to HTML/CSS</li>
                        <li>Fonts, Images</li>
                        <li>Responsive Design</li>
                        <li>CSS Frameworks</li>
                    </ul>

                    <p className="fw-bold">WEB DEVELOPMENT TOPICS</p>

                    <ul>
                        <li>Intro to MVC Rails App</li>
                        <li>Rails Associations</li>
                        <li>Basic Layout and CSS Best Practices</li>
                    </ul>
                </div>
                <div className="bg-warning px-4 py-3">
                    <p className="mb-0 text-white">Jun 2015 - Present | Boston, MA</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetails;