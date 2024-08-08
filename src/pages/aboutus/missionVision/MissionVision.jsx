import React from 'react';
import image1 from '../../../assets/image/mission.png';
import image2 from '../../../assets/image/vision.png';
import Card from '../../../components/card/Card';
import { Container } from './MvStyle';

const MissionVision = () => {
  return (
    <Container>
      <Card
        background='transparent'
        Style={{alignItems:"center",  }}
        headStyle={{ color: '#F5F4EB',fontSize:"2rem" }}
        image={image1}
        imageStyle = {{width:"5rem",}}
        headline='Mission'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      />
      <Card
        background='transparent'
        Style={{alignItems:"center"}}
        headStyle={{ color: '#F5F4EB',fontSize:"2rem"  }}
        image={image2}
        imageStyle = {{width:"5rem",}}
        fontStyle = {{fontSize:"2rem"}}
        headline='Vision'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      />
    </Container>
  );
}

export default MissionVision;
