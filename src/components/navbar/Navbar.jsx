import React, { useState } from 'react';
import * as Style from './Style';
import logo from '../../assets/image/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Style.Header>
        <Style.LeftMenu>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Why Us</li>
            <li>Contact</li>
          </ul>
        </Style.LeftMenu>

        <Style.MidLogo>
          <img src={logo} alt="logo" />
        </Style.MidLogo>

        <Style.RightMenu>
          <ul>
            <li><button>Get Start</button></li>
            <li><button>Get Connect</button></li>
          </ul>
        </Style.RightMenu>
      </Style.Header>

      <Style.PhoneHeader>
        <Style.PhoneLeftMenu isMenuOpen={isMenuOpen}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Why Us</li>
            <li>Contact</li>
          </ul>
        </Style.PhoneLeftMenu>

        <Style.MidLogo>
          <img src={logo} alt="logo" />
        </Style.MidLogo>

        <Style.MenuIcon>
          <button onClick={toggleMenu}>menu</button>
        </Style.MenuIcon>
      </Style.PhoneHeader>
    </>
  );
};

export default Navbar;