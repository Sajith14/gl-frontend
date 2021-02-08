import React from 'react'
import Test from '../../common/Test';
import HeroSection from './HeroSection'
import './HeroSection.css'
import Cards from './Cards'


 const Home = () => {

    return (
        <header>
           {/* <h3>Home</h3> */}
           {/* <Test /> */}
           <HeroSection />
           <Cards />
        </header>
    )
}

export default Home

