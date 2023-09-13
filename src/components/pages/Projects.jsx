import React from "react";
import Project from "../Project"

export const Projects = (props) => {
    return (
        <div className="projects">
            <h1 className="titulo">Projects</h1>

            <Project name = {"Social Media REST Backend"} skill = {'JavaScript / CSS'} img = {'social.jpg'} link = {'https://github.com/OkamiXX/Social-Media-API-REST'}/>
            <Project name = {"Book Finder"} skill = {'JavaScript / CSS'} img = {'2.png'} link = {'https://github.com/jeffrpar/book-review'}/>
            <Project name = {"Tech Blog APP"} skill = {'JavaScript / CSS'} img = {'book.jpg'} link = {'https://github.com/OkamiXX/14-Tech-Blog-APP'}/>



        </div>
    );
};