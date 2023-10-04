import React from "react";

const Project = (props) => {

    return (

        <div className="project card" style={
            {
                backgroundImage: `url(${require(`./img/${props.img}`)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }>
            <a className='project-link' href= {`${props.link}`}>
                <div className="info">
                    <h1>{props.name}</h1>
                    <h3>{props.skill}</h3>
                </div>
            </a>

        </div>

    );
};

export default Project;