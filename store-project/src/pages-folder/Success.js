import React from 'react'
import { useLocation } from 'react-router'
import styled from "styled-components";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Navbar from '../components-folder/Navbar';
import { useState, useEffect } from 'react';
import {userRequest } from "../CleanMethods"
import {clearCart} from '../redux/cartRedux';
import {useDispatch} from 'react-redux';



const Container = styled.div `
display:flex;
position:relative;

`;

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom:0;
left:0;
right:0;
color:black;

`;

const Image = styled.img`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.7)), url("https://images.pexels.com/photos/5956/gift-brown-shopping-market.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Return = styled.h1`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left:0;
right:0;
color:black;
`;

const OrderInfo = styled.div`
align-items: center;
position: absolute;
left:500px;
right:0px;
bottom: 200px;
`;

const Holder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const OrderTitle = styled.h1`
`;
const Success = () => {


    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() =>{

        const final = ()=>{
            dispatch(clearCart())
        }

        final()
    },[]);


    console.log(cart.products)
    console.log(user.currentUser)


    return (
        <div> 
        <Navbar />
        <Container>
            <Image/> 
            <Title> Your Transaction Was Successful!</Title>
            {cart.products.map((product,idx) =>
            <OrderInfo >
        
                <Holder key = {idx*50}> 
            
                    <OrderTitle> Thank you</OrderTitle>
                    </Holder> 
            
    
            </OrderInfo>
             )};
        </Container>
        </div>

        

    


        // >
        // <Navbar/>
        // <OrderTitle> Thank you for your order, {user.currentUser.username}! </OrderTitle>
        // <OrderTitle> </OrderTitle>
        
        
    )
}

export default Success
