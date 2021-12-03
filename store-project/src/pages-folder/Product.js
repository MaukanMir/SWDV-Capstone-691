import React from 'react'
import Navbar from '../components-folder/Navbar';
import Annoumcement from '../components-folder/Annoumcement';
import styled from 'styled-components'
import Newsletter from '../components-folder/Newsletter';
import Footer from '../components-folder/Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../responsive';
import { infoRequests } from '../CleanMethods';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import {useDispatch} from 'react-redux';
import { popularProducts } from '../data';
import { addWish } from '../redux/wishRedux';

const Container = styled.div``;
const Wrapper = styled.div`
display:flex;
padding:50px;
${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
flex:1;

`;
const InfoContainer = styled.div`
flex:1;
padding:  0px 50px;
 ${mobile({ padding: "10px" })};
`;
const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
border-radius: 15px;
 ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
font-weight:200px;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer = styled.div`
margin: 30px 0px;
width:50%;
display: flex;
justify-content: space-between;
 ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size:20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 10px;
cursor: pointer;
 &:hover{
     transform: scale(1.3);;
 }
`;

const FilterSize = styled.select`
cursor: pointer;
margin-left:10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
 ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 200px;
cursor: pointer;

`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius: 10px;
border: 1px solid #6a5acd;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
background-color:#6a5acd;
color:white;
padding:15px;
border-radius: 5px;
border: none;
cursor: pointer;
font-weight: 500px;
height:70px;
width:75px;
margin: 0px 20px;
&:hover{
    background-color:black;
}
`;

const BTN = styled.button`
cursor:pointer;
background-color:#6a5acd ;
color:white;
`;

const Product = () => {
    
    const spot = useLocation();
    const key = spot.pathname.split("/")[2];
    const [stateProduct, setStateProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const findProduct = async ()=>{

            try{
                const res = await infoRequests.get("/products/find/" + key);
                setStateProduct(res.data);
            }catch{console.log("err")}

        }
         findProduct()
    }, [key]);

    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1);
            
        }else{
            setQuantity(quantity+1);
        }
    };
    
    const handleClick = () =>{

        dispatch(
            addProduct({...stateProduct, quantity, color, size })
            );

    };

    const handleWish =() =>{
        dispatch(
            addWish({...stateProduct, quantity, color, size })
            );
    }




    return (
        <Container>
            <Annoumcement />
            <Navbar />
        
        
            <Wrapper>
            
            <ImgContainer>
                <Image src ={stateProduct.img} />
            </ImgContainer>
            <InfoContainer>
            
            <Title>{stateProduct.title}</Title>
            <Desc>{stateProduct.desc}</Desc>
            <Price> {stateProduct.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>color</FilterTitle>
                     
                    <FilterColor onClick = {()=>setColor(color)} /> 
                </Filter>
                 <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange ={(e)=>setSize(e.target.value)}>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    
                    </FilterSize>
                   
                </Filter>
            </FilterContainer>
            <AddContainer>

            <AmountContainer>

                <RemoveIcon onClick = {()=>handleQuantity("dec")} />
                <Amount> {quantity} </Amount>
                <AddIcon onClick = {()=>handleQuantity("inc")} />
            </AmountContainer>

                <Button onClick = {()=>handleClick()}> Add to Cart</Button>
                <Button onClick = {()=>handleWish()}> Add to Wish </Button>
               
            </AddContainer>
            </InfoContainer>
             </Wrapper>
            
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product
