import React, { useRef } from 'react';
import Heading from '../../../components/heading/Heading';
import video from "../../../assets/videos/sample1.mp4";
import { VideoSection, VideoContainer, StyledVideo, Overlay, Title, CenterText } from './PuStyle.js';

const VideoComponent = ({ src, title, centerText }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <VideoContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledVideo
        ref={videoRef}
        src={src}
        loop
        autoPlay
        muted
      />
      <Overlay>
        <Title>{title}</Title>
        <CenterText>{centerText}</CenterText>
      </Overlay>
    </VideoContainer>
  );
};

const ProvideUs = () => {
  return (
    <div style={{margin:"3rem 3rem 0 3rem" }}>
      <Heading title="Provide us"  fontSize="3rem"/>
      <VideoSection style={{marginTop:"1.5rem" }}>
        <VideoComponent src={video} title="Video 1" centerText="Center Text 1" />
        <VideoComponent src={video} title="Video 2" centerText="Center Text 2" />
        <VideoComponent src={video} title="Video 3" centerText="Center Text 3" />
        <VideoComponent src={video} title="Video 4" centerText="Center Text 4" />
      </VideoSection>
    </div>
  );
};

export default ProvideUs;
