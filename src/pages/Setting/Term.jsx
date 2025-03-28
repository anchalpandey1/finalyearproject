import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TermandCondition from '../../components/Settings/TermandCondition'
import Footer from '../../components/Footer/Footer.JSX'
import SkillsRow from '../../components/Teens/SkillsRow'
const Term = () => {
  return (
    <div>
        <Navbar/>
        <TermandCondition/>
        <SkillsRow/>
        <Footer/>
    </div>
  )
}

export default Term