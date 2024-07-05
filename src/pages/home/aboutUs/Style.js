import styled from "styled-components";


export const AboutContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 1rem;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    font-family: 'Gilroy Bold';
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
  }

  @media (max-width: 1024px) {
    width: 60%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.6rem;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    justify-content: center;
  }
`;

