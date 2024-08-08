import styled from "styled-components";

export const HeroSection = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    align-items: start;
    height: fit-content;
  }
`;

export const ContendSection = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  border: 5px solid rgba(255, 255, 255, 0.78);

  @media (max-width: 768px) {
    border-width: 3px;
  }

  @media (max-width: 480px) {
    border-width: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 10rem;
  font-family: "Gilroy Bold";
  text-transform: uppercase;
  padding: 1rem;

  @media (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 6rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    padding: 0.5rem;
  }
`;

export const BottomContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);

  @media (max-width: 768px) {
    height: fit-content;
  }

  @media (max-width: 480px) {
    /* height: 15vh; */
  }

  h1 {
    font-size: 3.5rem;
    font-family: "Gilroy Bold";
    color: transparent;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #100e09;

    @media (max-width: 1200px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 0.75rem;
      -webkit-text-stroke: 0.75px #100e09;
    }

    @media (max-width: 480px) {
      font-size: 1.45rem;
      padding: 0.5rem;
      -webkit-text-stroke: 0.5px #100e09;
    }
  }
`;

