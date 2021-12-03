import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)), url("https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
 ${mobile({ width: "75%" })}
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
cursor: pointer;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Aggrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 30px;
background-color: #6a5acd;
color:white;
margin: 15px;
border-radius: 10px;
display: flex;
justify-content: center;
cursor: pointer;
&:hover{
    background-color: black;
}
`;

const Register = () => {
    return (
        <Container>

        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder ="First Name" />
                <Input placeholder ="Last Name" />
                <Input placeholder ="Username" />
                 <Input placeholder ="Email" />
                <Input placeholder ="Password" />
                <Input placeholder ="Confrim Password" />
                <Aggrement>
                    I hearby agree to the terms and conditions of the site.
                </Aggrement>
                <Link to ="/"> <Button>Create</Button> </Link>
            </Form>
        </Wrapper>

        </Container>
    )
}

export default Register
