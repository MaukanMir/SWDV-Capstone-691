import React from 'react'
import styled from 'styled-components'
import Navbar from '../components-folder/Navbar';
import Annoumcement from '../components-folder/Annoumcement';
import Products from '../components-folder/Products';
import Newsletter from '../components-folder/Newsletter';
import Footer from '../components-folder/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div`

`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const Title = styled.h1`
margin: 20px;
text-transform:capitalize;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight:600;
margin-right: 20px;
 ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
 ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;



const ProductList = () => {
    const location = useLocation();

    let categorySnipe = location.pathname.split("/")[2];;
    const [itemFinder, setitemFinder] = useState({})
    const [displayedData, setdisplayedData] = useState("latest");
    
    console.log(categorySnipe)
    const displayFinder = (e) =>{
        const value = e.target.value;

        setitemFinder({
            ...itemFinder,
            [e.target.name]: value,
        });
    }

   


    return (
        <Container>
            <Annoumcement />
            <Navbar />
            <Title>{categorySnipe}</Title>
            <FilterContainer>
                <Filter><FilterText> Find the right styles: </FilterText>
                <Select name ="color" onChange = {displayFinder}>
                <Option disabled >Color</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option> 
            </Select>
            <Select name ="size" onChange = {displayFinder}>
            <Option disabled >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </Filter>
                <Filter> 
                <FilterText>Organize by Feature:</FilterText>
            <Select onChange ={(e) => setdisplayedData(e.target.value)}>
            <Option value ="latest">Latest</Option>
            <Option value ="highest">Price ( Highest )</Option>
            <Option value ="lowest">Price ( Lowest )</Option>
          </Select>
                </Filter>
            </FilterContainer>
            <Products categorySnipe ={categorySnipe} itemFinder ={itemFinder} displayedData ={displayedData} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
