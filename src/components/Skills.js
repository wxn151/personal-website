import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Skills = () => (
    <section className="section bg-light" id="skills">
        <div className="container">
            <Fade direction="up" triggerOnce>
                <h2>Skills</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li>React, Redux, TypeScript</li>
                            <li>HTML, CSS, Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Node.js, Express</li>
                            <li>MongoDB, PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
);

export default Skills;
