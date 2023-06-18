import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";

import { About, Description, Image } from "../styles";

const ServicesSection = () => {
  return (
    <Services>
      <Image>
        <img
          style={{ width: 300 }} 
                // eslint-disable-next-line
          src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/05/Como-Fazer-Upload-de-icones-ao-WordPress.png" 
          alt="Josiel"
        />
      </Image>
      <ServicesDescription>
        <h2>Descrições</h2>
        <Cards>
          <Card>
            <div className="icon">
              Icone
              <h3>Portifólio</h3>
            </div>
            <p>ainda em desenvolvimento</p>
          </Card>

          <Card>
            <div className="icon">
              <SchoolIcon fontSize="large" />
              <h3>Graduação</h3>
            </div>
            <p>ainda em desenvolvimento</p>
          </Card>

          <Card>
            <div className="icon">
              <LinkedInIcon fontSize="large" />
              <h3>LinkedIn</h3>
            </div>
            <p>Perfil Profissional</p>
          </Card>

          <Card>
            <div className="icon">
              <GitHubIcon fontSize="large" />
              <h3>Github</h3>
            </div>
            <p>ainda em desenvolvimento</p>
          </Card>
        </Cards>
      </ServicesDescription>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-top: 5rem;
  }
  p {
    width: 100%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const ServicesDescription = styled(Description)`
  flex: 2;
  // margin-left: 220px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;
const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
