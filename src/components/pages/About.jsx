import React from "react";
import me from "../img/me.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1, zIndex: -1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <div className="about">
        <div className="info">
          <div className="info-about">
            <img src={me} alt="me" />
            <h1>
              About Me<span> :</span>
            </h1>
            <h4>Full Stack Dev / CS Student at UTSA</h4>
            <p>
              Hello everyone, my name is Carlos Osuna and I am a Full Stack
              developer and proficience in{" "}
              <span>JavaScript, React/Native, C#, Java. </span>I have experience
              using <span>Bootstrap, Tailwind</span> for the Front End and{" "}
              <span>Node.js, Express.js, JWT, MySQL, MongoDB, GraphQL</span> for
              the Back End.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
