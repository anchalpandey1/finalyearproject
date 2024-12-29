import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import DoctorCard from '../../components/DoctorCrads.jsx/DoctorCard'
import HomeServices from '../../components/Services/HomeServices'
import Footer from '../../components/Footer/FOOTER.JSX'
import TestimonialCards from '../../components/CardHero/TestinomialCards'

const Home = () => {
  return (
    <div>
        <Navbar/>
<Hero/>
<DoctorCard/>    
<HomeServices/>
<TestimonialCards/>
<Footer/>    
    </div>
  )
}

export default Home