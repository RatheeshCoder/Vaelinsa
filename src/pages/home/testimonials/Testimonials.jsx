
import React, { useRef, useEffect, useState } from "react";
import * as Style from './Style';
import leftArrow from "../../../assets/image/arrow-left.svg";
import rightArrow from "../../../assets/image/arrow-right.svg";
import gsap from "gsap";
import pic1 from '../../../assets/sampleImg/pic1.png';
import pic2 from '../../../assets/sampleImg/pic2.png';
import pic3 from '../../../assets/sampleImg/pic3.png'

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: pic1,
    quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "John Doe",
    title: "Creative Director, VISA",
    image: pic2,
    quote: "The team's creative vision and passion have transformed our brand.",
  },
  {
    name: "Jane Smith",
    title: "Creative Director, VISA",
    image: pic3,
    quote: "We've seen a significant increase in our client engagement.",
  },
];

const Testimonials = () => {
  const imageList = useRef(null);
  const quotesList = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    gsap.to(quotesList.current.children, {
      duration: 0,
      opacity: 0,
      y: 20,
    });
    gsap.to(quotesList.current.children[activeSlide], {
      duration: 0.5,
      opacity: 1,
      y: 0,
      delay: 0.2,
    });
  }, [activeSlide]);

  const changeSlide = (direction) => {
    if (disabled) return;
    setDisabled(true);

    const newSlide = direction === 'next' 
      ? (activeSlide + 1) % testimonials.length 
      : (activeSlide - 1 + testimonials.length) % testimonials.length;

    const timeline = gsap.timeline({
      onComplete: () => {
        setActiveSlide(newSlide);
        setDisabled(false);
      }
    });

    timeline
      .to(quotesList.current.children[activeSlide], {
        duration: 0.5,
        opacity: 0,
        y: -20,
      })
      .to(imageList.current.children[activeSlide], {
        duration: 0.5,
        opacity: 0,
      }, "-=0.5")
      .set(imageList.current.children[newSlide], { opacity: 0 })
      .to(imageList.current.children[newSlide], {
        duration: 0.5,
        opacity: 1,
        scale: 1,
      })
      .from(quotesList.current.children[newSlide], {
        duration: 0.5,
        opacity: 0,
        y: 20,
      }, "-=0.5");
  };

  return (
    <Style.MainContainer>
    <Style.TestimonialSection>
      <Style.TestimonialContainer>
        <Style.ArrowButton disabled={disabled} onClick={() => changeSlide('prev')} className="left">
          <span><img src={leftArrow} alt="left arrow" /></span>
        </Style.ArrowButton>

        <Style.Inner>
          <Style.ImageContainer>
            <Style.ImageList ref={imageList}>
              {testimonials.map(({ name, image }, i) => (
                <Style.ImageItem 
                  key={`${name}-${i}`} 
                  active={activeSlide === i}
                >
                  <img src={image} alt={name} />
                </Style.ImageItem>
              ))}
            </Style.ImageList>
          </Style.ImageContainer>

          <Style.ContentContainer>
            <Style.ContentList ref={quotesList}>
              {testimonials.map(({ name, quote, title }, i) => (
                <Style.ContentItem key={`${name}-${i}`} active={activeSlide === i}>
                  <Style.ContentInner>
                    <Style.Quote>{quote}</Style.Quote>
                    <Style.Name>{name}</Style.Name>
                    <Style.Title>{title}</Style.Title>
                  </Style.ContentInner>
                </Style.ContentItem>
              ))}
            </Style.ContentList>
          </Style.ContentContainer>
        </Style.Inner>

        <Style.ArrowButton disabled={disabled} onClick={() => changeSlide('next')} className="right">
          <span><img src={rightArrow} alt="right arrow" /></span>
        </Style.ArrowButton>
      </Style.TestimonialContainer>
    </Style.TestimonialSection>
  </Style.MainContainer>
  );
};

export default Testimonials;