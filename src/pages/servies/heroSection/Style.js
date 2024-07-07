import styled from "styled-components";
import HeroBG from "../../../assets/sampleImg/ProductBG.png";

export const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${HeroBG});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 57.7%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 10rem;
    font-family: "Gilroy Bold";
    margin-left: 7rem;
    line-height: 12rem;
  }

  span {
    width: 70%;
    font-size: 7rem;
    display: block;
    line-height: 1rem;
    font-family: "Gilroy Light";
  }

  .products-span {
    text-align: end;
    font-size: 5rem;
  }

  p {
    width: 40%;
    padding-top: 3rem;
  }

  @media (max-width: 1200px) {
    left: 50%;

    h1 {
      font-size: 8rem;
      margin-left: 5rem;
      line-height: 10rem;
    }

    span {
      font-size: 5rem;
    }

    .products-span {
      font-size: 4rem;
    }

    p {
      width: 50%;
      padding-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 6rem;
      margin-left: 0;
      line-height: 7rem;
    }

    span {
      width: 100%;
      font-size: 4rem;
      line-height: normal;
    }

    .products-span {
      font-size: 3rem;
      text-align: center;
    }

    p {
      width: 100%;
      padding-top: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 4rem;
      line-height: 5rem;
    }

    span {
      font-size: 3rem;
    }

    .products-span {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;