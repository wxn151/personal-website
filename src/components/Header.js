import React from 'react';
import profile from '../assets/profile.jpg';
import { Fade } from 'react-awesome-reveal';

const Header = () => (
    <header className="header text-center text-white py-5">
        <Fade direction="down" triggerOnce>
            <img src={profile} alt="Profile" className="rounded-circle profile-img" />
            <h1 className="mt-3">John Doe</h1>
            <p className="lead">Full-Stack Developer | React | Node.js</p>
        </Fade>
    </header>
);

export default Header;
