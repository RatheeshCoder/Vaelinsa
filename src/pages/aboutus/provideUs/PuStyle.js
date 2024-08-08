import styled from 'styled-components';

export const VideoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.25rem; /* 20px */

  padding: 1.25rem; /* 20px */

  @media (max-width: 75rem) { /* 1200px */
    gap: 0.9375rem; /* 15px */
    padding: 0.9375rem; /* 15px */
  }

  @media (max-width: 62rem) { /* 992px */
    gap: 0.625rem; /* 10px */
    padding: 0.625rem; /* 10px */
  }

  @media (max-width: 48rem) { /* 768px */
    grid-template-columns: 1fr;
    gap: 0.625rem; /* 10px */
    padding: 0.625rem; /* 10px */
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 177.78%; /* 9:16 Aspect Ratio */
  overflow: hidden;
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem; /* 8px */
  display: block;

  /* &:hover {
    pause;
  } */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  position: absolute;
  top: 0.625rem; /* 10px */
  right: 0.625rem; /* 10px */
  font-size: 1.2rem;
  color: white;
  margin: 0;

  @media (max-width: 62rem) { /* 992px */
    font-size: 1rem;
  }

  @media (max-width: 48rem) { /* 768px */
    font-size: 0.9rem;
  }
`;

export const CenterText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: white;
  margin: 0;

  @media (max-width: 62rem) { /* 992px */
    font-size: 0.9rem;
  }

  @media (max-width: 48rem) { /* 768px */
    font-size: 0.8rem;
  }
`;
