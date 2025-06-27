import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => (
    <section className="section" id="contact">
        <div className="container text-center">
            <Fade direction="up" triggerOnce>
                <h2>Contact</h2>
                <p>Email: johndoe@example.com</p>
                <p>GitHub: github.com/johndoe</p>
                <p>LinkedIn: linkedin.com/in/johndoe</p>
            </Fade>
        </div>
    </section>
);

export default Contact;
