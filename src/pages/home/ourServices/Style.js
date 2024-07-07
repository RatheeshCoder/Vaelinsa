// Style.js
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 576px) {
    padding: 0.25rem;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-family: 'Gilroy Bold';

    @media (max-width: 992px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-family: 'Gilroy Light';

    @media (max-width: 992px) {
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.875rem;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 576px) {
    grid-template-rows: 1fr;
  }
`;
