import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height:30px;
background-color: #6a5acd;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`


const Annoumcement = () => {
    return (
        <Container>
            Holiday Sale!!!!
        </Container>
    )
}

export default Annoumcement
