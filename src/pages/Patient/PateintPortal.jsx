import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/Navbar/Navbar'
import SkillsRow from '../../components/Teens/SkillsRow'
import Patient from '../../components/Patient/Patient'
const PateintPortal = () => {
  return (
    <div>
    <Navbar/>
    <Patient/>
    <SkillsRow/>
        <Footer/>
    </div>
  )
}

export default PateintPortal