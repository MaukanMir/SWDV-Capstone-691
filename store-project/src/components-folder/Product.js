import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PageviewIcon from '@material-ui/icons/Pageview';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Link } from "react-router-dom";

const Image = styled.img`
height:75%;
z-index:2;
border-radius:10px;
`;
const Info = styled.div`
opacity:0;
width: 100%;
height:100%;
position: absolute;
top:0;
left:0;
z-index:3;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width:280px;
height:350px;
display:flex;
justify-content: center;
align-items: center;
background-color: black;
position: relative;

&:hover ${Info}{
    opacity: 100%;
}
&:hover ${Image}{
z-index:3;
}

`;

const Icon = styled.div`
 background-color: white;
color:black;
cursor:pointer;
width: 40px;
height: 40px;
border-radius: 50%;
background: white;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all 0.5s ease-in;
&:hover{
background-color: #6a5acd;
color:white;
transform: scale(1.1);
}
`;

const Product = ({item}) => {
    

    return (
        <Container>
           
            <Image src ={item.img} />
            <Info>
            <Icon >
            <Link style ={{color:"black"}} to = {`/product/${item._id}`} >   <AddShoppingCartIcon /> </Link>
            </Icon>
            <Icon>
                <Link style ={{textDecoration: "none", color:"white"}} to = {`/product/${item._id}`}>
                 <PageviewIcon style ={{color:"black"}} />
                 </Link>
            </Icon>
            <Icon>
                <Link style ={{color:"black"}}  to = {`/product/${item._id}`} > <ThumbUpAltIcon /> </Link>
            </Icon>
            </Info>

        </Container>
    )
}

export default Product
