import React from 'react';
import './AwardDetails.css';

const AwardDetails = ({awards}) => {
    console.log(awards);
    const {award, awardFrom, detail} = awards;

    return (
        <div className="mx-3 p-4 award-details shadow">
            <div className="award-header-part">
                <a href="#"><h4>{award}</h4></a>
                <p id="award-from" className="m-0 mb-2">{awardFrom}</p>
            </div>
            <div>
                <ul>
                    <li id="award-detail" className="mt-3">{detail}</li>
                </ul>
            </div>
        </div>
    );
};

export default AwardDetails;