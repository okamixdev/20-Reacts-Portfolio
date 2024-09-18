import React from "react";
import { About } from "./About";
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <div className="home">
            <motion.div
                initial={{ scale: 0}}
                animate={{ scale: 1.2, zIndex: -1 }}
                transition={{ duration: 0.5 }}
                className="info">
                <h4><span>Hi</span> everyone, my name is</h4> <h1>Carlos <span>Osuna</span></h1>
                <h3><span>Full Stack</span> Web Developer</h3>
            </motion.div>
            
            <NavLink className='boton' to="/about">Keep reading...</NavLink>
        </div>
    );
};