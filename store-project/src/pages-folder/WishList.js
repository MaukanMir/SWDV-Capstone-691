import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components-folder/Navbar';
import { clearWish } from '../redux/wishRedux';
import { useDispatch } from 'react-redux';
import Footer from '../components-folder/Footer';
const Container = styled.div`
color: #FE9B0A;

`;
const Header = styled.h1`
display: flex;
justify-content: center;
align-items:center ;
margin-bottom: 20px;
font-size: 2.5rem;
`
const Double = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:black;
`
const Title = styled.h1`
margin: 10px 0px;
`
const Image= styled.img`
width: 200px;
border-radius: 10px;
margin-bottom:15px;
`;

const Desc = styled.p`
margin: 20px 0px;
color:white;
`;

const BTN = styled.button`
background-color: black;
color: #FE9B0A;
padding:10px;
margin-bottom: 20px;
margin-left: 10px;
border-radius: 10px;
border: none;
font-size:20px;
&:hover{
    background-color:#FE9B0A;
    color: black;
}
`;

const WishList = () => {
const cart = useSelector(state => state.cart);
const wish = useSelector(state => state.wish)
const dispatch = useDispatch();
console.log(wish)
console.log(cart)


    return (
        
        <Container>
        <Navbar />
        <Header> WishList Items: {wish.quantity} </Header>
        <Header> WishList Total: ${wish.total.toFixed(2)}</Header>
        <BTN onClick ={()=> dispatch(clearWish())}> Clear Wish List</BTN>
        {wish.products.map((product,idx) => 
        <Double key ={idx}> 
            <Title>{product.title}</Title>
            <Image src ={product.img} />
            <Desc> Product Description:  {product.desc} </Desc>
            <Desc>Product price: {product.price}</Desc>
            </Double>
        )}
        
        <Footer/>
        </Container>

    )
}

export default WishList
