import styled from "styled-components";

export const GalleryContainer = styled.div`
  padding: 1.5rem 0;
  @media (min-width: 640px) {
    padding: 2rem 0;
  }
  @media (min-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const InnerContainer = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1536px;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`;

export const Description = styled.p`
  display: none;
  max-width: 640px;
  color: ${props => props.theme.mode === 'dark' ? '#d1d5db' : '#6b7280'};
  @media (min-width: 768px) {
    display: block;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
  @media (min-width: 1280px) {
    gap: 2rem;
  }
`;

export const GalleryItem = styled.a`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 12rem;
  overflow: hidden;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 768px) {
    height: 20rem;
  }
  ${props => props.large && `
    @media (min-width: 768px) {
      grid-column: span 2;
    }
  `}
  &:hover {
    .overlay-buttons {
      opacity: 1;
    }
  }
`;

export const GalleryImage = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to top, rgba(31, 41, 55, 0.5), transparent, transparent);
`;

export const OverlayButtons = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
  button {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const ItemLabel = styled.span`
  position: relative;
  display: inline-block;
  margin-bottom: 0.75rem;
  margin-left: 1rem;
  color: white;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    margin-left: 1.25rem;
    font-size: 1.125rem;
  }
`;

export const Popup = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 0.5rem;

`;