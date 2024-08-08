import styled from "styled-components";

export const Heading = styled.div`
  width: 100%;
  background-color: ${props => props.background || 'transparent'};
  display: flex;
  align-items: start;

`;

export const HeadingText = styled.h1`
  color: #FFFFFF;
  font-size: ${props => props.fontSize || '5.5rem'};
  line-height: ${props => props.lineHeight || '1.7rem'};
  font-style: ${props => props.fontStyle || 'Gilroy Bold'};
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 4.5rem;
    line-height: ${props => props.lineHeight || '1.5rem'};
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    line-height: ${props => props.lineHeight || '1.3rem'};
  }
  
  @media (max-width: 360px) {
    font-size: 3rem;
    line-height: ${props => props.lineHeight || '1.1rem'};
  }
`;
