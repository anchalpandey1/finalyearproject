import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Accessible from '../../components/Settings/Accessible'
import SkillsRow from '../../components/Teens/SkillsRow'
import Footer from '../../components/Footer/FOOTER.JSX'
const Accessibility = () => {
  return (
    <div>
        <Navbar/>
        <Accessible/>
        <SkillsRow/>
        <Footer/>
    </div>
  )
}

export default Accessibility