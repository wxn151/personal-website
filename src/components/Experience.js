import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Experience = () => (
    <section className="section bg-light" id="experience">
        <div className="container">
            <Slide direction="left" triggerOnce>
                <h2>Experience</h2>
                <div>
                    <h5>Frontend Developer - TechCorp</h5>
                    <p><em>2021 - Present</em></p>
                    <ul>
                        <li>Built modern UIs with React, Redux.</li>
                        <li>Optimized performance and SEO.</li>
                    </ul>
                </div>
            </Slide>
        </div>
    </section>
);

export default Experience;
