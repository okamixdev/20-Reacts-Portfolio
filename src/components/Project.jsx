import React from "react";

const Project = (props) => {

    return (

        <a className='project-link' href={`${props.link}`}>
            <div>
                <div className="info">
                    <h1>{props.name}</h1>
                    <h3>{props.skill}</h3>
                </div>
                <div className="project"

                // style={
                //     {
                //         backgroundImage: `url(${require(`./img/${props.img}`)})`,
                //         backgroundSize: 'cover',
                //         backgroundPosition: 'center',
                //         cursor: 'pointer'
                //     }}
                >
                    <div
                        style={
                            {
                                backgroundImage: `url(${require(`./img/${props.img}`)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                cursor: 'pointer',
                                height: '300px'
                            }}></div>

                </div>
            </div>
        </a>

    );
};

export default Project;