import React from 'react'
import Navbar from '../components-folder/Navbar'
import Annoumcement from '../components-folder/Annoumcement'
import Slider from '../components-folder/Slider'
import Categories from '../components-folder/Categories'
import Products from '../components-folder/Products'
import Newsletter from '../components-folder/Newsletter'
import Footer from '../components-folder/Footer'


const Home = () => {
    return (
        <div>
        <Annoumcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
        </div>
    )
}

export default Home
