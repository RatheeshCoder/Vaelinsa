import styled,{keyframes } from 'styled-components';

export const Buttonoutline = styled.button`
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.background || '#100e09'};
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  cursor: pointer;
  transition: all 1s linear;
border: 1px solid #fff;

`;

export const Buttontext = styled.div`
  color: #FFFFFF;
  height: fit-content;
  font-weight: 500;
  font-size: ${props => props.textSize || '1rem' };
  line-height: 1.5rem;
`;

