import React from "react";
import me from '../img/me.jpg';


export const About = () => {
    return (
        <div className="about">
            <div className="about">
                <div className="info">
                    <div className="info-about">
                        <img src={me} alt="me" />
                        <h1>About Me<span> :</span></h1>
                        <h4>Full Stack Dev / CS Student at UTSA</h4>
                        <p>Hello everyone, my name is Carlos Osuna and I am a Full Stack developer and proficience in <span>JavaScript, React/Native, C#, Java. </span>
                            I have experience using <span>Bootstrap, Tailwind</span> for
                            the Front End and <span>Node.js, Express.js, JWT, MySQL, MongoDB, GraphQL</span> for the Back End.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};