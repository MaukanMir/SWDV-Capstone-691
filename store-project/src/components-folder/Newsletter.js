import React from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import { mobile } from '../responsive';

const Container = styled.div`
height: 60vh;
background-color: #F7DBD7;
background-color: #FE9B0A;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Desc = styled.div`
font-size: 24;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color:white;
display: flex;
justify-content: space-between;
border: 1px solid black;
${mobile({ width: "80%" })};

`;
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
background-color: black;
border:white;
color:#FE9B0A;
flex:1;
border:none;

`;

const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc> Stay in sync with all our latest deals! </Desc>
            <InputContainer> 
            <Input placeholder ="Your Email here." />
            <Button>
                <SendIcon />
            </Button>
            </InputContainer>
    
        </Container>
    )
}

export default Newsletter
