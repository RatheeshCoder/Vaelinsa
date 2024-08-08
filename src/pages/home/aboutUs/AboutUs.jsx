import React from 'react';
import * as Style from './Style';
import Button from '../../../components/button/button';
import { useRive } from '@rive-app/react-canvas';
import riveFile from '/animation.riv';

const AboutUs = () => {
    const { RiveComponent } = useRive({
        src: riveFile,
        autoplay: true,
    });

    return (
        <Style.AboutContainer>
            <Style.LeftContainer>
                <h1>Fasilitas Mewah yang memanusiakan manusia</h1>
                <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <Button 
                    title="Know More" 
                    textStyle={{ fontSize: '1.2rem' }}
                />
            </Style.LeftContainer>

            <Style.RightContainer>
                <RiveComponent />
            </Style.RightContainer>
        </Style.AboutContainer>
    );
};

export default AboutUs;