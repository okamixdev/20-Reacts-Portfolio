import React from "react";
import { About } from "./About";
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <div className="info">
                <h4><span>Hi</span> everyone, my name is</h4> <h1>Carlos <span>Osuna</span></h1>
                <h3><span>Full Stack</span> Web Developer</h3>
                <Link className = 'boton' to = "/about">Keep reading...</Link>
            </div>
        </div>
    );
};