import React from 'react';
import EducationDetail from '../EducationDetail/EducationDetail';


const educationData = [
    {
        institute: "UNIVERSITY OF PENNSYLVANIA",
        location: "Philadelphia, PA",
        degree: "B.A. in Psychology",
    },
    {
        institute: "GEORGE WASHINGTON UNIVERSITY",
        location: "Washington, D.C.",
        degree: "B.A. candidate",
    }
]


const Education = () => {
    return (
        <section id="education" className="py-5 mt-3">
            <div className="section-title mb-5">
                <h1 className="m-0">EDUCATION</h1>
            </div>
            <div className="row container row-cols-1 row-cols-md-3 g-4 justify-content-center m-auto">
                {
                    educationData.map(education => <EducationDetail education={education}></EducationDetail>)
                }
            </div>
        </section>
    );
};

export default Education;