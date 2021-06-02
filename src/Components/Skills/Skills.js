import React from 'react';
import html5 from '../../images/logo/html5.png';
import react from '../../images/logo/react.png';
import haml from '../../images/logo/haml.png';
import jade from '../../images/logo/jade.png';
import jekyll from '../../images/logo/jekyll.png';
import css3 from '../../images/logo/css3.png';
import sass from '../../images/logo/sass.png';
import bootstrap from '../../images/logo/bootstrap.png';
import foundation from '../../images/logo/foundation.png';
import materialize from '../../images/logo/materialize.png';
import javascript from '../../images/logo/javascript.png';
import jquery from '../../images/logo/jquery.png';
import angular from '../../images/logo/angular.png';
import node from '../../images/logo/nodejs.png';
import ruby from '../../images/logo/ruby.png';
import rails from '../../images/logo/rails.png';
import minitest from '../../images/logo/minitest.png';
import postgresql from '../../images/logo/postgresql.png';
import mongodb from '../../images/logo/mongodb.png';
import webpack from '../../images/logo/webpack.png';
import gulp from '../../images/logo/gulp.png';
import grunt from '../../images/logo/grunt.png';
import wordpress from '../../images/logo/wordpress.png';
import tumblr from '../../images/logo/tumblr.png';
import squarespace from '../../images/logo/squarespace.png';
import github from '../../images/icon/github.png';
import heroku from '../../images/logo/heroku.png';
import photoshop from '../../images/logo/photoshop.png';
import SkillsDetails from '../SkillsDetails/SkillsDetails';
import SkillsDetails2 from '../SkillsDetails2/SkillsDetails2';


const skillsData = [
    {
        skillName: "HTML",
        img1: html5,
        img2: react,
        img3: haml,
        img4: jade,
        img5: jekyll,
        name1: "HTML5",
        name2: "JSX",
        name3: "Haml",
        name4: "Jade",
        name5: "Jekyll",
    },
    {
        skillName: "CSS",
        img1: css3,
        img2: sass,
        img3: bootstrap,
        img4: foundation,
        img5: materialize,
        name1: "CSS3",
        name2: "SASS",
        name3: "Bootstrap",
        name4: "Foundation",
        name5: "Materialize",
    },
    {
        skillName: "Javascript",
        img1: react,
        img2: javascript,
        img3: jquery,
        img4: angular,
        img5: node,
        name1: "React",
        name2: "Javascript",
        name3: "jQuery",
        name4: "Angular",
        name5: "Node",
    },
    {
        skillName: "Back-End",
        img1: ruby,
        img2: rails,
        img3: minitest,
        img4: postgresql,
        img5: mongodb,
        name1: "Ruby",
        name2: "Rails",
        name3: "Minitest",
        name4: "PostgreSQL",
        name5: "MongoDB",
    },
];

const skillsData2 = [
    {
        skillName: "Build Tools",
        img1: webpack,
        img2: gulp,
        img3: grunt,
        name1: "Webpack",
        name2: "Gulp",
        name3: "Grunt",
    },
    {
        skillName: "CMS",
        img1: wordpress,
        img2: tumblr,
        img3: squarespace,
        name1: "Wordpress",
        name2: "Tumblr",
        name3: "Squarespace",
    },
    {
        skillName: "Other",
        img1: github,
        img2: heroku,
        img3: photoshop,
        name1: "Github",
        name2: "Heroku",
        name3: "Photoshop",
    },
]


const Skills = () => {
    return (
        <section id="skills">
            <div className="section-title mb-5 mt-4">
                <h1 className="m-0">SKILLS</h1>
            </div>

            <div className="container pt-2"> 
                {
                    skillsData.map(skill => <SkillsDetails skill={skill}></SkillsDetails>)
                }
                {
                    skillsData2.map(skill2 => <SkillsDetails2 skill2={skill2}></SkillsDetails2>)
                }
            </div>
        </section>
    );
};

export default Skills;