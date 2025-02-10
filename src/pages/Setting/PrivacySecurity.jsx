import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Privacy from '../../components/Settings/Privacy'
import Footer from '../../components/Footer/Footer.jsx'
import SkillsRow from '../../components/Teens/SkillsRow'
const PrivacySecurity = () => {
  return (
    <div>
        <Navbar/>
        <Privacy/>
        <SkillsRow/>
        <Footer/>
    </div>
  )
}

export default PrivacySecurity