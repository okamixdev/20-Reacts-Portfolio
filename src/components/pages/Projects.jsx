import React from "react";
import Project from "../Project";

export const Projects = (props) => {
  return (
    <div className="projects">
      <h1 className="titulo">Projects</h1>
      <div className="project-div">
        <div className="project-div2">
          <Project
            name={"Jitzmate: Social Media"}
            skill={"MERN + GraphQL"}
            img={"image.png"}
            link={"https://github.com/okamixdev/Jitzmate"}
          />
          <Project
            name={"Bundle Spares"}
            skill={"React / MongoDB / GraphQL"}
            img={"1.png"}
            link={"https://github.com/jeffrpar/bundle-spares"}
          />
          <Project
            name={"Jurassic Park APP"}
            skill={"Android / Java"}
            img={"jur.jpg"}
            link={"https://github.com/okamixdev/JurassicParkAndroid"}
          />
          <Project
            name={"POP The Lock Game"}
            skill={"Unity, C#"}
            img={"pop.png"}
            link={
              "https://drive.google.com/drive/folders/1oZ1VLquWDeeECJZRtLMC0hu78bw-k1po?usp=drive_link"
            }
          />
          <Project
            name={"Social Media REST Backend"}
            skill={"JavaScript / CSS"}
            img={"social.jpg"}
            link={"https://github.com/OkamiXX/Social-Media-API-REST"}
          />
        </div>
      </div>
    </div>
  );
};
