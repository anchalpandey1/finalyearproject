import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SkillsRow from '../../components/Teens/SkillsRow'
import Footer from '../../components/Footer/Footer.jsx'
import DoctorProfile from '../../components/Doctor/DoctorProfile'
const Profile = () => {
    return (
        <div>
            <Navbar />

<DoctorProfile/>
            <SkillsRow />
            <Footer />
        </div>
    )
}

export default Profile