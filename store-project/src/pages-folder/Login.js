import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)), url("https://images.pexels.com/photos/5956/gift-brown-shopping-market.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
 ${mobile({ width: "75%" })}
`;

const Form = styled.form`
display: flex;
flex-direction: column;

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #6a5acd;
color:white;
margin: 15px;
border-radius: 10px;
cursor: pointer;
&:disabled{
    cursor:not-allowed;
    background-color: black;
}
&:hover{
    background-color: black;
}
`;

const Error = styled.span`
  color: maroon;
`;

const RedoneLink = styled.a`
cursor: pointer;
margin: 5px 0px;
font-size: 14px;
text-decoration: underline;
`;



const Login = () => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, { username,password });
    }
    return (
        <Container>

        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input
                 placeholder ="username" onChange ={(e)=> setUsername(e.target.value)} />
                <Input
                type="password"
                 placeholder ="password" onChange ={(e)=> setPassword(e.target.value)} />
                <Link to ="/"> <Button onClick ={handleClick} disabled={isFetching}>Login</Button> </Link>
                {error && <Error>You do not have the correct Information...</Error>}
                <RedoneLink> Forgot Password?</RedoneLink>
                <RedoneLink>Create a new account</RedoneLink>
            </Form>
        </Wrapper>

        </Container>
    )
}

export default Login;