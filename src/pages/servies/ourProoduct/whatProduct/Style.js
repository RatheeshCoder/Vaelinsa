import styled from "styled-components";

export const FullContainer = styled.section`

width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;

`

export const LeftContainer = styled.div`
width: 50%;
height: 100%;
background-color: #F5F4EB;
display: flex;
justify-content: center;
align-items: center;
position: relative;
img{
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: auto;

}
p{
    font-size: 2rem;
    color: #100e09;
    margin-top: 1rem;
    z-index: 99;
    width: 50%;
}
`

export const RightContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: start;
flex-direction: column;
padding-left: 1rem;

h1{
    font-size: 3rem;
    color: #F5F4EB;
    font-family: 'Gilroy Bold';

}

p{
    font-size: 1rem;
}

`
