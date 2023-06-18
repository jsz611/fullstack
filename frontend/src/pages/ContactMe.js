import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

import SocialNetworkSection from "../components/SocialNetworkSection";

const ContactMe = () => {
  return (
    <ContactStyled>
      <Title>
        <h2>Get in touch</h2>
      </Title>
      <Areas id="areas">
        <ContactForm />
        <SocialNetworkSection />
      </Areas>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  padding: 1rem 10rem;
  min-height: 90vh;
  background-color: #a5b5ab;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  h2 {
    color: white;
  }
`;
const Areas = styled.div`
  display: flex;
  align-items: center;
`;

export default ContactMe;
