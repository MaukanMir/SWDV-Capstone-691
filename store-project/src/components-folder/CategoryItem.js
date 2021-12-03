
import React from 'react'
import styled from 'styled-components'
// import { categories } from '../data'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex:1;
margin:3px;
height: 70vh;
position:relative;
`;
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
 ${mobile({ height: "20vh" })}
 border-radius:10px;

`;
const Title = styled.h1`
color:#6a5acd;
color:rebeccapurple;
margin-bottom: 20px;
&:hover{
    color:#fff;
}
`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Button = styled.button`
border: none;
color:white;
background-color: #6a5acd;
border-radius: 5px;
padding: 10px;
cursor:pointer;
font-weight: 600px;
&:hover{
    background-color:black;
}
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
        <Link to ={`/products/${item.category}`}> 
        <Image src ={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
        </Container>
    )
}

export default CategoryItem
