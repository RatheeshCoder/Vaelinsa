import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    width: 100%;
    max-width: 1200px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;
    transition: all 1s ease;
  }

  .swiper-slide-active {
    width: 450px !important;
    height: 450px !important;
  }

  .swiper-slide-next, .swiper-slide-prev {
    width: 350px !important;
    height: 350px !important;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background-color: #000;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background-color: #007aff;
  }
`;
