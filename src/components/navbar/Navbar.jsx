import React, { useState, useEffect } from 'react';
import * as Style from './Style';
import logo from '../../assets/image/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <Style.Header>
        <Style.LeftMenu>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutus'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </Style.LeftMenu>

        <Style.MidLogo>
          <img src={logo} alt="logo" />
        </Style.MidLogo>

        <Style.RightMenu>
          <ul>
            <li><button>Get Started</button></li>
            <li><button>Get Connected</button></li>
          </ul>
        </Style.RightMenu>
      </Style.Header>

      <Style.PhoneHeader>
        <Style.PhoneLeftMenu isMenuOpen={isMenuOpen}>
          <ul>
            <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
            <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
            <li><Link to='/gallery' onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to='/why-us' onClick={toggleMenu}>Why Us</Link></li>
            <li><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </Style.PhoneLeftMenu>

        <Style.MidLogo>
          <img src={logo} alt="logo" />
        </Style.MidLogo>

        <Style.MenuIcon>
          <button onClick={toggleMenu}>Menu</button>
        </Style.MenuIcon>
      </Style.PhoneHeader>
    </>
  );
};

export default Navbar;