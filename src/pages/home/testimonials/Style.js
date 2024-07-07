import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  color: #a09da6;

  *::after,
  *::before {
    content: "";
    position: absolute;
  }
`;

export const TestimonialSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestimonialContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 600px;
  position: relative;
  /* overflow: hidden; */

  @media (max-width: 1280px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  width: 60px;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  background: none;
  outline: none;
  border: none;

  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
  }

  &.right {
    right: 0;
  }

  @media (max-width: 768px) {
    width: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const ContentList = styled.ul`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  height: 400px;

  @media (max-width: 1280px) {
    max-width: 400px;
    height: 350px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    height: 100%;
  }
`;

export const ContentItem = styled.li`
  width: 100%;
  height: 100%;
  color: #2e293c;
  display: flex;
  align-items: center;
  position: absolute;
  opacity: ${props => props.active ? 1 : 0};
  padding: 0 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const ContentInner = styled.div`
  width: 100%;
`;

export const Quote = styled.p`
  font-size: 2rem;
  letter-spacing: 0.88px;
  line-height: 1.4;
  font-weight: 900;
  margin-bottom: 16px;
  color: #3f56da;

  @media (max-width: 1280px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Name = styled.h3`
  letter-spacing: 0.88px;
  font-size: 18px;
  line-height: 1.5;
  color: #a09da6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Title = styled.h4`
  letter-spacing: 0.88px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  color: #a09da6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 340px;
  height: 460px;
  position: relative;

  &::after {
    width: 170px;
    height: 170px;
    background: #3f56da;
    border-radius: 100%;
    z-index: -1;
    position: absolute;
    top: -15%;
    left: -20%;
  }

  @media (max-width: 1280px) {
    width: 300px;
    height: 400px;

    &::after {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 350px;

    &::after {
      width: 130px;
      height: 130px;
    }
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 300px;

    &::after {
      width: 110px;
      height: 110px;
    }
  }
`;

export const ImageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageItem = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;