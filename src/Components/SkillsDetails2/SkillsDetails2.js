import React from 'react';

const SkillsDetails2 = ({skill2}) => {
    const { skillName, img1, img2, img3, name1, name2, name3 } = skill2;

    return (
            <div data-aos="zoom-in" className="skills-container m-5 shadow">
                <div className="skill-name mx-4 py-3">
                    <h2>{skillName}</h2>
                </div>
                <div className="skill-item-container px-5 py-4">
                    <div className="me-5 skill-item text-center">
                        <img className="skill-logo" src={img1} alt="" />
                        <p className="fs-5 my-3">{name1}</p>
                    </div>
                    <div className="me-5 skill-item text-center">
                        <img className="skill-logo" src={img2} alt="" />
                        <p className="fs-5 my-3">{name2}</p>
                    </div>
                    <div className="me-5 skill-item text-center">
                        <img className="skill-logo" src={img3} alt="" />
                        <p className="fs-5 my-3">{name3}</p>
                    </div>
                </div>
            </div>
    );
};

export default SkillsDetails2;