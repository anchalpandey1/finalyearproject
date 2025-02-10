import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer.jsx'
import MoreHero from '../../components/Hero/MoreHero'
import TeenCards from '../../components/Teens/TeenCards'
import SkillsRow from '../../components/Teens/SkillsRow'


const Teen = () => {
  return (
    <div>
        <Navbar/>
<MoreHero/>
<TeenCards/>
<SkillsRow/>
<Footer/>    
    </div>
  )
}

export default Teen