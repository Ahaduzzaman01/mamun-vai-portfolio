import React from 'react';
import './Contact.css';
import envelope from '../../images/icon/envelope.png';
import github from '../../images/icon/github.png';
import linkedin from '../../images/icon/linkedin.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className="section-title mb-5">
                <h1 className="m-0">CONTACT</h1>
            </div>

            <div className="container mb-5">
                <div className="d-flex align-items-center p-3">
                    <div className="contact-logos">
                        <a href="#" className="a-tag-style"><img src={envelope} alt="" /></a>
                    </div>
                    <div>
                        <a href="#" className="a-tag-style"><h5 className="contact-link m-0 ms-4">email@example.com</h5></a>
                    </div>
                </div>

                <div className="d-flex align-items-center p-3">
                    <div className="contact-logos">
                        <a href="#" className="a-tag-style"><img src={github} alt="" /></a>
                    </div>
                    <div>
                        <a href="#" className="a-tag-style"><h5 className="contact-link m-0 ms-4">github.com/example</h5></a>
                    </div>
                </div>

                <div className="d-flex align-items-center p-3">
                    <div className="contact-logos">
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                    <div>
                        <a href="#" className="a-tag-style"><h5 className="contact-link m-0 ms-4">linkedin.com/in/example</h5></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;