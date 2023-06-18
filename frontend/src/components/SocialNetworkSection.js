import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";


const SocialNetworkSection = () => {
  return (
    <Network>
      <Social href="https://github.com/josielsouza" target="_blank">
        <GitHubIcon fontSize="large" />
        <h3>Github</h3>
      </Social>
      <Social href="https://www.linkedin.com/in/josiel-souza/" target="_blank">
        <LinkedInIcon fontSize="large" />
        <h3>Linkdin</h3>
      </Social>
      <Social href="https://twitter.com/josielsouzadej1" target="_blank">
        <TwitterIcon fontSize="large" />
        <h3>twitter</h3>
      </Social>
      <Social href="https://www.instagram.com/josiel_sdj/" target="_blank">
        <InstagramIcon fontSize="large" />
        <h3>Instagram</h3>
      </Social>
    </Network>
  );
};

const Network = styled.div`
  padding: 1rem 5rem;
`;

const Social = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;
  background-color: solid gray;
  &:hover {
    background: white;
    cursor: pointer;
  }
  h3 {
    // color:  solid gray;
    margin: 1rem;
    padding-bottom: 20px;
  }
`;

export default SocialNetworkSection;
