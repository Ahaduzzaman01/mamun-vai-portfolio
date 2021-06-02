import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-title mb-5">
                <h1 className="m-0">PROJECTS</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-auto container pb-5">
                <ProjectDetails />
            </div>
        </section>
    );
};

export default Projects;