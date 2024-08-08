import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(to bottom, #f3f3f3 33.33%, black 33.33%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1200px) {
    height: 90vh;
  }

  @media (max-width: 992px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 576px) {
    height: 60vh;
  }
`;

export const HeroContainer = styled.div`
  background-color: white;
  display: flex;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 80%;

  @media (max-width: 1200px) {
    padding: 35px;
    max-width: 85%;
  }

  @media (max-width: 992px) {
    padding: 30px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
    max-width: 95%;
  }

  @media (max-width: 576px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const HeroHeadline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
    margin-bottom: 18px;
  }

  @media (max-width: 992px) {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 14px;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

export const HeroText = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
  color: black;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
    margin-bottom: 18px;
  }

  @media (max-width: 992px) {
    font-size: 0.8rem;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 14px;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    margin-bottom: 12px;
  }
`;

export const HeroIframe = styled.iframe`
  flex: 1;
  border-radius: 8px;
  align-items: center;

  border: none;

  @media (max-width: 1200px) {
    height: 50vh;
  }

  @media (max-width: 992px) {
    height: 40vh;
  }

  @media (max-width: 768px) {
    height: 30vh;
  }

  @media (max-width: 576px) {
    height: 20vh;
  }
`;
