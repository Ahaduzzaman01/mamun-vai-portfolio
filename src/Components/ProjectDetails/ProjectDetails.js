import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './ProjectDetails.css';
import interpol8r from '../../images/interpol8r.jpg';
import blogspire from '../../images/blogspire.jpg';
import codeIsland from '../../images/code-island.jpg';
import savedByTheText from '../../images/saved-by-the-text.jpg';
import skateSomething from '../../images/skate-something.jpg';
import riWifi from '../../images/ri-wifi.jpg';

const ProjectDetails = () => {

    return (
        <>
            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={interpol8r} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>Interpol8r</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>Interpol8r</h3>
                        <p className="card-text fs-5">Experimental web app with homemade recursive string interpolation.</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={blogspire} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>BlogSpire</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>BlogSpire</h3>
                        <p className="card-text fs-5">Blogging web app created for the Engineering team at WeSpire.</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={codeIsland} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>Code Island</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>Code Island</h3>
                        <p className="card-text fs-5">Online headquarters for the local Code for America brigade in Rhode Island.</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={savedByTheText} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>Saved By the Text</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>Saved By the Text</h3>
                        <p className="card-text fs-5">Fun, TV nostalgia-themed app that sends an MMS to a user's phone number.</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={skateSomething} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>Skate Something</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>Skate Something</h3>
                        <p className="card-text fs-5">Mobile-focused web app where users can explore, collect, and share skate spots.</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
                <div className="card overlay-container">
                    <img src={riWifi} className="card-img-top project-image" alt="..." />
                    <div className="overlay">
                        <div className="text w-100 p-2">
                            <h3>RI WiFi</h3>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Visit Live Site"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            <a className="h5 text-white me-3 fs-3" href="#" target="_blank" title="Github Code Link"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                    <div classNameName="text-center">
                        <h3 className="card-title mt-3" style={{ color: "rgb(250 130 79)" }}>RI WiFi</h3>
                        <p className="card-text fs-5">Sortable database of WiFi-enabled spots with details for laptop users..</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;