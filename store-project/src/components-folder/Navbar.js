import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {Navigate} from "react-router-dom";
// Style Components START

//LEFT SIDE START
const Container = styled.div`
height: 60px;
 ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div `
flex:1;
display: flex;
align-items: center;
`

//LEFT SIDE END

//RIGHT SIDE START
const Right = styled.div `
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
 ${mobile({ flex: 2, justifyContent: "center" })};
`
const Input = styled.input`
border: none;
${mobile({width: "50px"})}
`
//RIGHT SIDE END
//CENTER START
const Center = styled.div `
flex:1;
text-align: center;
`
const Logo = styled.div `
font-weight: bold;
${mobile({fontSize: "24px"})}
`

// Style Components END

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;
margin-top: 5px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
    const got = "Sign In";
    const quantity = useSelector(state=> state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser);
    console.log(quantity);
    
    return (
        <Container>
           <Wrapper>
           <Left>

           </Left>
           <Center>
           <Logo>Thrift IT</Logo>
           </Center>
            <Right>
            <Link style = {{textDecoration:"none"}} to ="/">
                <MenuItem  style= {{color:"#6a5acd"}}>Home</MenuItem>
                </Link>
            <Link style = {{textDecoration:"none"}}  to ="/wishlist"> <MenuItem style= {{color:"#6a5acd"}}> WishList</MenuItem> </Link>

             <Link style = {{textDecoration:"none"}}  to ="/products/men"> <MenuItem style= {{color:"#6a5acd"}}> Products </MenuItem> </Link>

            <Link style = {{textDecoration:"none"}} to ="/register">
                <MenuItem style= { user ? {display:"none"} : {color:"#6a5acd"} } >Register</MenuItem>
                </Link>

                <Link style = {{textDecoration:"none"}} to ="/login"> 
                <MenuItem style= { user ? {display:"none"} : {color:"#6a5acd"} } >Sign In</MenuItem>
                </Link>

                <Link style = {{textDecoration:"none"}} to ="/accountInfo"> 
                <MenuItem style= { user ? {color:"#6a5acd"} : {display:"none"} } >{ user ? user.username: got}</MenuItem>
                </Link>
                <Link to ="/cart">
                <MenuItem>
                    <Badge style= {{color:"#6a5acd"}}  badgeContent ={quantity} color ="secondary">
                        <AddShoppingCartIcon />
                    </Badge>
                </MenuItem>
                </Link>

            </Right>
           </Wrapper>
        </Container>
    )
}

export default Navbar
