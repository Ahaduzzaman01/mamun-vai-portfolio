import React from 'react';
import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="section-title">
                <h1 className="m-0">ABOUT</h1>
            </div>

            <div className="container">
                <div className="about-headline my-5">
                    <h3 className="ms-3">Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.</h3>
                </div>

                <div className="about-description">
                    <p>
                    I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others and solve problems.
                    </p>
                    <p>
                    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.
                    </p>
                </div>
                <p id="focus-link" className="fs-3 py-3"><strong>Current Focus: </strong><a href="#" className="a-tag-style">Accessibility</a> // <a href="#" className="a-tag-style">React</a> // <a href="#" className="a-tag-style">Design Systems</a></p>
            </div>
        </section>
    );
};

export default About;