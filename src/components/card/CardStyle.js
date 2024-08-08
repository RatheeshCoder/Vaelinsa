import styled from "styled-components";

export const Card = styled.div`
  width: fit-content;
  max-height: 50vh;
  background-color: ${props => props.background || '#fff'};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: 5% 10%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    padding: 4% 8%;
  }

  @media (max-width: 480px) {
    padding: 3% 6%;
    
  }

  @media (max-width: 360px) {
    padding: 2% 4%;
  }
`;

export const CardImage = styled.img`
  width: 3rem;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    width: 2.5rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 2rem;
    margin-top: 1rem;
  }

  @media (max-width: 360px) {
    width: 1.5rem;
    margin-top: 0.8rem;
  }
`;

export const CardHeadline = styled.h3`
  color: #000;
  font-size: ${props => props.fontSize || '1.4rem'};
  font-style: ${props => props.fontStyle || 'Gilroy Bold'};
  font-weight: 900;
  margin: 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.8rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0.6rem 0;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

export const CardText = styled.p`
  color: #818181;
  font-size: 0.8rem;
  font-style: ${props => props.fontStyle || 'Gilroy Light'};
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`;
