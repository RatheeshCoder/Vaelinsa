import styled from "styled-components";

export const CtaSectionWrapper = styled.section`
width: 100%;
height: fit-content;
padding: 2rem;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
background-color: #ffffff;
color: #100e09;
overflow: hidden;
`

export const LeftSection = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: start;
align-items: start;
flex-direction: column;
gap: 1rem;


h1{
    font-size: 2.5rem;
    font-family: 'Gilroy Bold';
}
p{
    font-size: 1rem;
    line-height: 1.7rem;
}
`

export const RightSection = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`