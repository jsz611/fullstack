import React from "react";
import styled from "styled-components";
import moment from "moment";

const Card = ({project}) => {
  return (

      <StyledCard>
         
        <Content>
          <Image src={project.image}/>
          <Info>
            <h3>{project.title}</h3>
            <h4>{moment(project.createdAt).format('MMM YYYY')}</h4>
            <p>{project.description}</p>
          </Info>
        </Content>
      </StyledCard>
  
  );
};

export default Card;

const StyledCard = styled.div`
 // background-color: #d3e0d1;
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
 // margin-top: 20px;
  //padding:10px ;
  cursor: pointer;
  overflow: hidden;
 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 70vh;
  //text-align: center;
`;
const Image = styled.img`
  width: 80%;
  height: 70%;
`;
const Info = styled.div`
  text-align: left;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //margin-bottom: 60px;

  h3 {
    padding-top: 2rem;
  }
`;
