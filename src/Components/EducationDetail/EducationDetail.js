import React from 'react';
import './EducationDetail.css';

const EducationDetail = ({ education }) => {
    return (
        <div className="mx-3 p-4 education-details shadow">
            <div className="institute-part">
                <h4>{education.institute}</h4>
                <p id="location" className="m-0 mb-2">{education.location}</p>
            </div>
            <div>
                <ul>
                    <li id="degree" className="mt-3">{education.degree}</li>
                </ul>
            </div>
        </div>
    );
};

export default EducationDetail;