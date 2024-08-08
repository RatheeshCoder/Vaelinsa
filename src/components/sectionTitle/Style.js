import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  background-color: ${props => props.background || 'transparent'};
  display: flex;
  align-items: start;
  flex-direction: column;
  color:${props => props.color || '#fff'};
`;

export const TitleText = styled.p`

  font-size: 0.8rem;
  font-style: ${props => props.fontStyle || 'Gilroy light'};
  font-weight: 500;
  text-transform: uppercase;

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

export const TitleHeading = styled.h3`

  font-size: 3rem;
  font-style: ${props => props.fontStyle || 'Gilroy Bold'};
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;  
