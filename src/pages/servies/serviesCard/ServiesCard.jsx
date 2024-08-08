import React, { useRef, useEffect } from 'react';
import * as Style from './Style';
import ArrowImg from '../../../assets/image/arrow.png';
import { useNavigate } from 'react-router-dom';
import cardData from './cardData.json';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const ServicesCard = () => {
  const navigate = useNavigate();
  const cardContainerRef = useRef(null);

  const handleNavigation = (path, cardElement) => {
    const state = Flip.getState(cardElement);

    gsap.to(cardElement, {
      scale: 5,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        navigate(path);
      }
    });

    const otherCards = Array.from(cardContainerRef.current.children).filter(card => card !== cardElement);
    gsap.to(otherCards, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    });

    Flip.from(state, {
      duration: 1    ,
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {
    const cards = Array.from(cardContainerRef.current.children);

    gsap.set(cards, { autoAlpha: 0, y: 50 });

    const tl = gsap.timeline();

    tl.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    });

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.02, duration: 0.3 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', null);
        card.removeEventListener('mouseleave', null);
      });
    };
  }, []);

  return (
    <Style.CardContainer ref={cardContainerRef}>
      {cardData.map(card => (
        <Style.Cards 
          key={card.id} 
          onClick={(e) => handleNavigation(card.navigateTo, e.currentTarget)}
        >
          <Style.Title>{card.title}</Style.Title>
          <Style.Heading>
            <h1>{card.heading}</h1>
            <button><img src={ArrowImg} alt="arrow icon" /></button>
          </Style.Heading>
          <Style.Text>{card.text}</Style.Text>
        </Style.Cards>
      ))}
    </Style.CardContainer>
  );
};

export default ServicesCard;