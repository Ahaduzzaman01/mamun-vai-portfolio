import React from 'react';
import './SkillsDetails.css';

const SkillsDetails = ({ skill }) => {
    const { skillName, img1, img2, img3, img4, img5, name1, name2, name3, name4, name5 } = skill;

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
                    <div className="me-5 skill-item text-center">
                        <img className="skill-logo" src={img4} alt="" />
                        <p className="fs-5 my-3">{name4}</p>
                    </div>
                    <div className="me-5 skill-item text-center">
                        <img className="skill-logo" src={img5} alt="" />
                        <p className="fs-5 my-3">{name5}</p>
                    </div>
                </div>
            </div>
    );
};

export default SkillsDetails;








// import React from 'react';

// const SkillsDetails = ({skill}) => {
//     const { skillName, img1, img2, img3, img4, img5, name1, name2, name3, name4, name5 } = skill;

//     return (
//         <div className="d-flex justify-content-around skills-item-container">
//             <div className="skills-item">
//                 <div>
//                     <h1>{skillName}</h1>
//                 </div>
//                 {

//                 }
//             </div>
//         </div>
//     );
// };

// export default SkillsDetails;