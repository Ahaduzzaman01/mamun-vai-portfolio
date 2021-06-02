import React from 'react';
import AwardDetails from '../AwardDetails/AwardDetails';


const awardsData = [
    {
        award: "STUDENT CHOICE AWARD",
        awardFrom: "Startup Institute - Full Time Web Development | April 2017",
        detail: 'Awarded by students in the Full-Time Web Development track to one instructor as recognition for "outstanding teaching, listening, mentoring."',
    },
    {
        award: "INSPIRED BY YOU AWARD",
        awardFrom: "WeSpire | June 2016",
        detail: "Quarterly award given to a team member who exemplifies WeSpire's purpose, vision, and values, goes above and beyond in their role to make a particularly positive impact on the company.",
    },
    {
        award: "OWL AWARD",
        awardFrom: "Startup Institute | April 2016",
        detail: 'Given to an alumnus who "continually gives back to the Startup Institute community with true humility, despite everyone knowing how awesome he is."',
    },
    {
        award: "HONORABLE MENTION",
        awardFrom: "West Philly Homebrew Competition | May 2013",
        detail: "Neightborhood beer enthusiasts voted on their favorite local home-brewed beer. Goldilocks won in the People's Choice category.",
    },
]

const Awards = () => {
    return (
        <section id="awards" className="pt-5 mt-3">
            <div className="section-title mb-5">
                <h1 className="m-0">AWARDS</h1>
            </div>
            <div className="row container row-cols-1 row-cols-md-3 g-4 justify-content-center m-auto">
                {
                    awardsData.map(award => <AwardDetails awards={award}></AwardDetails>)
                }
            </div>
        </section>
    );
};

export default Awards;