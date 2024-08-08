// File: OurServices.js
import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import SplitType from 'split-type';
import './Style.css';
import carouselData from './carouselData.json';

export default function OurProducts() {
  const carouselList = useMemo(() => carouselData, []);
  const [displayed, setDisplayed] = useState(0);
  const [displayedElements, setDisplayedElements] = useState([]);
  const textRef = useRef(null);
  const splitInstance = useRef(null);

  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: -500,
        scale: 0.8
      },
      initialRight: {
        x: 500,
        scale: 1
      },
      firstPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5
        }
      },
      hover: {
        scale: 0.85
      },
      hoverMiddle: {
        scale: 1.3
      },
      secondPosition: {
        scale: 1.2,
        x: 0
      },
      thirdPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5
        }
      }
    }),
    []
  );

  useEffect(() => {
    const getPositionVariant = (index, displayed) => {
      const normalizedIndex = (index + carouselList.length) % carouselList.length;
      const normalizedDisplayed = (displayed + carouselList.length) % carouselList.length;

      if (normalizedIndex === (normalizedDisplayed - 1 + carouselList.length) % carouselList.length) {
        return {
          position: 0,
          variant: "firstPosition",
          initial: "initialLeft",
          hover: "hover",
          gridArea: "A0",
          onClick: () => setDisplayed(normalizedIndex)
        };
      } else if (normalizedIndex === normalizedDisplayed) {
        return {
          position: 1,
          variant: "secondPosition",
          initial: null,
          hover: "hoverMiddle",
          gridArea: "A1",
          onClick: null
        };
      } else if (normalizedIndex === (normalizedDisplayed + 1) % carouselList.length) {
        return {
          position: 2,
          variant: "thirdPosition",
          initial: "initialRight",
          hover: "hover",
          gridArea: "A2",
          onClick: () => setDisplayed(normalizedIndex)
        };
      }
      return null;
    };

    const carouselListElements = carouselList.map((item, index) => {
      const positionVariant = getPositionVariant(index, displayed);
      if (!positionVariant) return null;

      const { variant, initial, hover, gridArea, onClick } = positionVariant;

      return {
        position: positionVariant.position,
        element: (
          <motion.div
            variants={PositionVariants}
            initial={initial}
            animate={variant}
            exit={initial}
            whileHover={hover}
            layout
            key={item.id}
            className="cardWrapper"
            onClick={onClick}
            style={{ gridArea }}
          >
            <motion.div layout className="card">
              <img src={item.image} alt={item.title} />
            </motion.div>
          </motion.div>
        )
      };
    }).filter(el => el !== null);

    setDisplayedElements(carouselListElements);
  }, [displayed, carouselList, PositionVariants]);

  useEffect(() => {
    if (textRef.current) {
      // Clean up previous SplitType instance if it exists
      if (splitInstance.current) {
        splitInstance.current.revert();
      }

      // Create new SplitType instance
      splitInstance.current = new SplitType(textRef.current, { types: 'chars' });
      const chars = splitInstance.current.chars;

      // GSAP animation
      gsap.fromTo(
        chars,
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
        }
      );
    }
  }, [displayed]);  // Ensure animation runs on `displayed` change

  const currentItem = carouselList[displayed];

  return (
    <div className="carousel">
      <AnimatePresence initial={false}>
        {displayedElements.map(el => el.element)}
      </AnimatePresence>

      <div className="comingSoon">
        <h1 ref={textRef} key={currentItem.id}>{currentItem.title}</h1>
      </div>
    </div>
  );
}
