import styled from "styled-components";

export const CtaSectionWrapper = styled.section`
width: 100%;
height: 50vh;
padding: 2rem;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
background-color: #F5F4EB;
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
<<<<<<< Updated upstream
=======
position: relative;

.hide{
    width: 150px;
    height:50px;
    position: absolute;
    bottom: 3%;
    right: 2%;
    background-color: #F5F4EB;

}


>>>>>>> Stashed changes
`