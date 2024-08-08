import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center !important;;
  padding: 0.5rem;
  margin-bottom:3rem;
  gap: 2rem;
  

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;
