import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
    return (
        <StyledSection>
            <Container>
                <MapContainer>
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    />
                    <InfoBox>
                        <InfoColumn>
                            <InfoTitle>ADDRESS</InfoTitle>
                            <p>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </InfoColumn>
                        <InfoColumn>
                            <InfoTitle>EMAIL</InfoTitle>
                            <a href="mailto:example@email.com">example@email.com</a>
                            <InfoTitle style={{ marginTop: '1rem' }}>PHONE</InfoTitle>
                            <p>123-456-7890</p>
                        </InfoColumn>
                    </InfoBox>
                </MapContainer>
                <FormContainer>
                    <FormTitle>Feedback</FormTitle>
                    <FormDescription>Post-ironic portland shabby chic echo park, banjo fashion axe</FormDescription>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" />
                    </FormField>
                    <FormField>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" />
                    </FormField>
                    <FormField>
                        <Label htmlFor="message">Message</Label>
                        <TextArea id="message" name="message" />
                    </FormField>
                    <SubmitButton>Button</SubmitButton>
                </FormContainer>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    position: relative;
    color: #F5F4EB;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5rem 1.25rem;
    margin: 0 auto;
    @media (min-width: 640px) {
        flex-wrap: nowrap;
    }
`;

const MapContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 2.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    @media (min-width: 768px) {
        width: 50%;
        margin-right: 2.5rem;
    }
    @media (min-width: 1024px) {
        width: 66.666667%;
    }
`;

const InfoBox = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    background-color: #100e09;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const InfoColumn = styled.div`
    padding: 0 1.5rem;
    @media (min-width: 1024px) {
        width: 50%;
    }
`;

const InfoTitle = styled.h2`
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #476fff;
    text-transform: uppercase;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    @media (min-width: 768px) {
        width: 50%;
        margin-left: auto;
        padding: 2rem 0;
        margin-top: 0;
    }
    @media (min-width: 1024px) {
        width: 33.333333%;
    }
`;

const FormTitle = styled.h2`
    margin-bottom: 0.25rem;
    font-size: 1.125rem;
    font-weight: 500;
    color: #476fff;
    font-family: 'Gilroy Bold';
`;

const FormDescription = styled.p`
    margin-bottom: 1.25rem;
    color: #F5F4EB;
`;

const FormField = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    font-size: 0.875rem;
    color: #F5F4EB;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 2;
    color: #4a5568;
    background-color: #F5F4EB;
    border: 1px solid #F5F4EB;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
        border-color:#476fff;
        box-shadow: 0 0 0 3px #476fff;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 8rem;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #4a5568;
    background-color: #F5F4EB;
    border: 1px solid #F5F4EB;
    border-radius: 0.25rem;
    resize: none;
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
        border-color:#476fff;
        box-shadow: 0 0 0 3px #476fff;
    }
`;

const SubmitButton = styled.button`
    padding: 0.5rem 1.5rem;
    font-size: 1.125rem;
    color: white;
    background-color: #476fff;
    border: 1px solid #100e09;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: transparent;
        border: 1px solid #F5F4EB;
    }
    &:focus {
        outline: none;
    }
`;

export default ContactSection;