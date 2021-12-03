import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
// import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios"
import { infoRequests } from '../CleanMethods';



const Container = styled.div`
padding:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Products = ({ categoreySnipe, itemFinder, displayedData }) => {

    const [productMatch,setProductMatch] = useState([]);
    const [traverseProducts, setTraverseProducts] = useState([]);

    console.log(categoreySnipe)
    // if(categoreySnipe === undefined){
    //     categoreySnipe = "men";
    //     console.log("is null")
    // }

    useEffect(() => {
        
        const findProducts = async ()=>{
            try{
                const response = await axios.get( categoreySnipe ? `${infoRequests}products?category=${categoreySnipe}`:"http://localhost:5000/api/products")

                setProductMatch(response.data);
            }catch(err){

            }
        }
        findProducts()
    }, [categoreySnipe]);




    useEffect (() =>{
        categoreySnipe &&
        setTraverseProducts(
            productMatch.filter((item) => Object.entries(itemFinder).every(([key,value])=>
            item[key].includes(value)
            )
        )
    
    );

    },[productMatch,categoreySnipe,itemFinder])


    useEffect(()=>{
        if(displayedData === "latest"){
            setTraverseProducts((change) => [...change].sort((a,b) => a.createdAt - b.createdAt));
        }else if(displayedData ==="highest"){
            setTraverseProducts((change) => [...change].sort((a,b) => b.price - a.price));
        }else{
            setTraverseProducts((change) => [...change].sort((a,b) => a.price - b.price));
        }
    }, [displayedData]);


console.log(productMatch)

    return (
        <Container>
           { categoreySnipe ? traverseProducts.map(item=>
           <Product item = {item} key = {item._id} />
           ):productMatch.slice(0,8).map((item) => <Product item = {item} key = {item._id} />)} 
        </Container>
    )
}

export default Products
