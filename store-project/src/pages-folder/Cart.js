import React from 'react'
import styled from 'styled-components'
import Annoumcement from '../components-folder/Annoumcement';
import Navbar from '../components-folder/Navbar';
import Footer from '../components-folder/Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';
import { userRequest } from "../CleanMethods";
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux';
import { removeProduct } from '../redux/cartRedux';
import {clearCart} from '../redux/cartRedux';

const KEY = process.env.REACT_APP_STRIPE_KEY;
const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding:10px;
cursor: pointer;
background-color: #6a5acd;
 font-weight: 600;
  cursor: pointer;
border-radius: 10px;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black":"transparent"};
color: ${props => props.type === "filled" && "white"};

`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
flex:2;
display: flex;
`;

const Image = styled.img`
width: 200px;
border-radius: 10px;
margin-bottom:15px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;
const ProductDesc = styled.div`
font-size: 10px;
`;
const ProductSize = styled.span`
margin-top: -70px;`;

const PriceDetail = styled.div`
flex:1;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
`;

const ProductAmount = styled.div`
font-size:24px;
margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
 ${mobile({ marginBottom: "20px" })};
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`;

const SpanTag = styled.span`
font-size:16px;
font-weight:bold;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid #646464;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;


const Hr = styled.hr`
background-color: black;
border:none;
height: 1px;
`;

const SummaryTitle = styled.h1`
font-weight: 200;

`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props)=> props.type ==="total" && "500"};
font-size: ${(props)=> props.type ==="total" && "500"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding:10px;
background-color: #6a5acd;
color:white;
font-weight: 600;
&:hover{
    background-color: black;
}
`;

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const wish= useSelector(state => state.wish);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const onToken = (token) => {
    setStripeToken(token);
  };
  

  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log(
          "it worked"
        )
        const res = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total *100,
        });
        navigate("/success",{
          stripeData: res.data,
          products: cart, });
      } catch {console.log("Unable to authenticate user on payment page.")}
    };
    stripeToken && makeRequest();
    console.log(stripeToken)
  

  }, [stripeToken, cart.total, navigate]);


  // const handleClick = () =>{
  //     dispatch(
  //       removeProduct({})
  //     )
  // }

  console.log(cart)
  console.log(cart.total)
    return (
        <Container>
            <Annoumcement />
            <Navbar />
            
            <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <Link to="/" >  <TopButton>Conintue Shopping</TopButton> </Link>
                 <TopTexts>
                    <TopText>Shopping Bag ({cart.quantity}) </TopText>
                     <Link to ="/wishlist" > <TopText>Wishlist {wish.quantity}</TopText> </Link>
                </TopTexts>
              <TopButton onClick ={()=> dispatch(clearCart()) } type="filled">Clear Cart</TopButton>
            
            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product,idx) => 
                <Product key = {idx+50}>
                    <ProductDetail>
                        <Image src ={product.img} />
                        <Details>
                           <ProductName> <b>Product:</b> {product.title}</ProductName> 
                           <ProductId> <b>ID:</b> {product._id}  </ProductId> 
                           <ProductDesc> <SpanTag > Description: </SpanTag> <br/> {product.desc} </ProductDesc>
                           <ProductColor color = {product.color} />
                           <ProductSize> <b>Size:</b> {product.size ?  product.size:"small"} </ProductSize> 
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <AddIcon />
                            <ProductAmount> {product.quantity} </ProductAmount>
                            <RemoveIcon style ={{cursor: "pointer"}} onClick = {() => dispatch(removeProduct(product._id))} />
                        </ProductAmountContainer>
                        <ProductPrice> ${(product.price * product.quantity).toFixed(2)}</ProductPrice>
                    </PriceDetail>
                </Product>

                )}


                <Hr />
                 </Info>
                <Summary> 
                <SummaryTitle> Order Information</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {(cart.total).toFixed(2)} </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Costs</SummaryItemText>
                    <SummaryItemPrice>$ 9.99 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -9.99 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText type = "total">Total</SummaryItemText>
                    <SummaryItemPrice>{(cart.total).toFixed(2)} </SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout 
                name="Thrift IT"
                image="https://images.squarespace-cdn.com/content/v1/5d210a3c8ae83700013f313b/1563468167499-UMAV5PXWBLI3VD042R98/Screen+Shot+2019-07-18+at+12.41.57+PM.png?format=2500w"
                billingAddress
                shippingAddress
                description={`Your total is $${(cart.total).toFixed(2)}`}
                amount={(cart.total * 100)}
                token={onToken}
                stripeKey={KEY}> 
            
                </StripeCheckout>
                 </Summary>
            </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
