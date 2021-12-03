import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutline from '@material-ui/icons/MailOutline';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
background-color: black;
color:white;
color:#FE9B0A;
`;

const Left = styled.div`
flex:1;
flex-direction: column;
padding: 20px;
`;

const Center = styled.div`
flex:1;
padding:20px;

`;

const Title = styled.h3`
margin-bottom:30px;

`;

const List = styled.ul`
margin: 0;
padding:0;
list-style: none;
display:flex;
flex-direction: column;
`;

const ListItem = styled.li`
display: flex;
width: 50%;
cursor: pointer;
margin-bottom: 10px;
text-decoration:none;

&:hover{
    color: white;
}

`;

const Right = styled.div`
flex:1;
padding:20px;

`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
&:hover{
    color: white;
}
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
background-color: #6a5acd;
background-color: #FE9B0A;
color:white;
display:flex;
align-items: center;
justify-content: center;
margin-right: 20px;
&:hover{
    transform: scale(1.3);
    transition: 0.5s;
    background-color: #FE9B0A;
    color:black;
}
`;

const ContactItem = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;

&:hover{
    color: white;
}


`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Thrift IT</Logo>
                <Desc>Sell Anything</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
               <Title> Need Help?</Title>
               <List>
               <Link style ={{textDecoration:"none"}} to ="/" > 
            <ListItem style ={{color:"#FE9B0A"}}>  Home</ListItem>
            </Link>

            <Link style ={{textDecoration:"none"}} to ="/cart"> 
            <ListItem style ={{color:"#FE9B0A"}}> Cart </ListItem>
            </Link>
       
            <ListItem> Mens Clothing </ListItem>
          
            <ListItem>Womens Clothing</ListItem>
          
            
            
            <Link style ={{textDecoration:"none"}} to ="/accountInfo"> <ListItem style ={{color:"#FE9B0A"}}>Account Information</ListItem> </Link>
            
            <Link style ={{textDecoration:"none"}} to = "/wishlist"> 
            <ListItem style ={{color:"#FE9B0A"}}> WishList</ListItem>
            </Link>
           
            
               </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <RoomIcon /> 824 Martha's Vineyard</ContactItem>
                <ContactItem> <PhoneInTalkIcon /> 1-484-34-5678</ContactItem>
                <ContactItem> <MailOutline /> Contact@ThriftIT.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
