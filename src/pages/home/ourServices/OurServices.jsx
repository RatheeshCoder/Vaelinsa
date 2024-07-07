// OurServices.js
import React from 'react';
import * as Style from './Style';
import Button from '../../../components/button/button';
import Card from '../../../components/card/Card';
import CardImg1 from '../../../assets/image/card1.svg';

const OurServices = () => {
  return (
    <Style.Container>
      <Style.LeftContainer>
        <h1>Create Better Videos</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
        <Button title='Get Started Now' />
      </Style.LeftContainer>

      <Style.RightContainer>
        <Card
          background='transparent'
          style={{ border: '1px solid #fff', borderRadius: '.5rem' }}
          headStyle={{ color: '#F5F4EB' }}
          image={CardImg1}
          headline='Video Editing'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        />
        <Card
          background='transparent'
          style={{ border: '1px solid #fff', borderRadius: '.5rem' }}
          headStyle={{ color: '#F5F4EB' }}
          image={CardImg1}
          headline='Video Editing'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        />
        <Card
          background='transparent'
          style={{ border: '1px solid #fff', borderRadius: '.5rem' }}
          headStyle={{ color: '#F5F4EB' }}
          image={CardImg1}
          headline='Video Editing'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        />
        <Card
          background='transparent'
          style={{ border: '1px solid #fff', borderRadius: '.5rem' }}
          headStyle={{ color: '#F5F4EB' }}
          image={CardImg1}
          headline='Video Editing'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        />
      </Style.RightContainer>
    </Style.Container>
  );
};

export default OurServices;
