import React from "react";
import perfil from "../img/perfil.jpg"

import { About, Button, Description, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <h2> Josiel</h2>
        <h2>Developer Fullstack Trainee</h2>

        <p>
          Graduated in systems analysis and development. Full Stack Jr Developer
          by Recode Pro, Class of 2020. Currently I work with nodeJs,
          javascript, typescript, git, sql, linux, NoSql and relational
          databases.
        </p>
        <Button>
          <button class="styleButtonContact">Contact Me</button>
        </Button>
      </Description>
      <Image>
     
        <img   
          style={{ width: 400}} 
          src={perfil} 
          alt="Josiel Souza"
         />
      </Image>
    </About>
  );
};

export default AboutSection;
