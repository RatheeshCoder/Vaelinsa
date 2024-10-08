import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin: 1r   em 0; */
  background: rgba(16, 14, 9, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.1px);
  -webkit-backdrop-filter: blur(14.1px);
  z-index: 99999999;
  position: fixed;
  top: 0;
  @media (max-width: 780px) {
    display: none;
  }
`;

export const LeftMenu = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;

    li {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;

      &::after {
        content: "";
        height: 0.2rem;
        width: 0;
        border-radius: 1rem;
        background: #f5f4eb;
        display: block;
        margin-bottom: 0.5rem;
        transition: width 0.3s linear;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const MidLogo = styled.div`
  img {
    max-width: 100px;
  }
`;

export const RightMenu = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;

    li {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;

      button {
        padding: 0.5rem 1.5rem;
        background: transparent;
        border: 1px solid #f5f4eb;
        outline: none;
        cursor: pointer;
        transition: color 0.3s linear;
      }

      &:last-child button {
        background: #f5f4eb;
        color: #000 !important;
      }
    }
  }

  @media (max-width: 780px) {
    ul {
      display: none;
    }
  }
`;

export const PhoneHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;
  position: relative;

  @media (max-width: 780px) {
    display: flex;
  }
`;

export const PhoneLeftMenu = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  background-color: #f5f4eb;
  color: #100e09;
  justify-content: start;
  align-items: start;
  position: fixed;
  padding: 2rem;
  top: 0;
  right: 0;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  ul {
    height: 100%;
    display: flex;
    list-style: none;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-around;

    li {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;

      &::after {
        content: "";
        height: 0.2rem;
        width: 0;
        border-radius: 1rem;
        background: #100e09;
        display: block;
        margin-bottom: 0.5rem;
        transition: width 0.3s linear;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const MenuIcon = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 99;
  }
`;
