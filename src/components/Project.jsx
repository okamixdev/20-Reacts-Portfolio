import React from "react";

const Project = (props) => {
  return (
    <a className="project-link" href={`${props.link}`}>
      <div className="project-holder">
        <div className="info">
          <h1>{props.name}</h1>
          <h3>{props.skill}</h3>
        </div>
        <div
          style={{
            backgroundImage: `url(${require(`./img/${props.img}`)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            height: "200px",
            borderRadius: "20px",
            filter: "blur(2px)",
          }}
        ></div>
      </div>
    </a>
  );
};

export default Project;
