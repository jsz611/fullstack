import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useApi } from "../hooks/useApi";//This guy will be responsible for the call

const Portfolio = () => {
  const {data} =  useApi('/portfolio')
  return (
    <PortfolioStyle>
      <CardList>
  
        {data?.data?.map(project =>{
                return(<Card key={project.slug} project={project} />)
        })}
        
    
      </CardList>
    </PortfolioStyle>
  );
};

export default Portfolio;

const PortfolioStyle = styled.div`
  background-color: #a5b5ab;
  min-height: 90vh;
  overflow: hidden;
  padding: 1rem 20rem;
`;
const CardList = styled.div`
 // background-color: #d3e0d1;
  width: 100%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column: 3rem;
  grid-row-gap: 5rem;
`;
