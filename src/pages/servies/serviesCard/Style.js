import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  margin-top: 2rem;
`;

export const Cards = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
  border: 1px solid #F5F4EB;
  cursor: pointer;
  &:hover {
    button {
      transform: rotate(-45deg);
    }
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  padding: .5rem 1rem;
  background-color: #F5F4EB;
  color: #100e09;
  border-radius: .5rem;
  font-weight: 900;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  h1 {
    color: #F5F4EB;
    text-transform: uppercase;
    font-family: 'Gilroy Bold';
    font-size: 2rem;
    text-align: start;
  }
  button {
    background-color: #476FFF;
    color: #F5F4EB;
    border: none;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
    font-family: 'Gilroy Bold';
    font-size: 1rem;
    transition: transform .2s ease-in-out;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  width: 80%;
`;
