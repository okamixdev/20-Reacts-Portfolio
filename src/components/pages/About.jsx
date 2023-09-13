import React from "react";
import me from '../img/me.jpg';


export const About = () => {
    return (
        <div className="about">
            <div className="about">
                <div className="info">
                    <img src={me} alt="me" />
                    <h1>About Me<span> :</span></h1>
                    <h4>Full Stack Web Developer</h4>
                    <p>Hello everyone, my name is Carlos Osuna and I am a Full Stack developer with proficiencies in HTML, CSS, and JS.
                        I know how to use/implement different technologies such as <span>React, Bootstrap, SASS</span> for
                        the Front End and <span>Node.js, Express.js, JWT, MySQL, MongoDB</span> for the Back End. I enjoy working on the
                        Front End as much as the Back End, each of them offer a different aproach to what i like the most: <span>Problem Solving</span> and
                        <span> Coding</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};