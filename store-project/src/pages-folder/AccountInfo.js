import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Navbar from '../components-folder/Navbar';
import Footer from '../components-folder/Footer';
const Double = styled.div`

`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FE9B0A;
padding: 40px;
height:50vh;
flex-direction: column;
`;

const Title = styled.h1`
margin-bottom: 20px;
`;

const Info = styled.h1`
margin-bottom: 20px;
`



const AccountInfo = () => {
    const user = useSelector(state => state.user);
    console.log(user)
    return (
<Double> 
<Navbar/>
        <Container>

            <Title> Hello, {user.currentUser.username} ! </Title>
            <Info>Your account was created on {user.currentUser.createdAt.slice(0,10)}</Info>
            <Title>Your Email Address: Is {user.currentUser.email}</Title>
        </Container>
        <Footer />
        </Double>
    )
}

export default AccountInfo
