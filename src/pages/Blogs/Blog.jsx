import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer.JSX'
import MoreHero from '../../components/Hero/MoreHero'
import SkillsRow from '../../components/Teens/SkillsRow'
import BlogCards from '../../components/Blog/BlogCards'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <MoreHero />
            <BlogCards />
            <SkillsRow />
            <Footer />
        </div>
    )
}

export default Blog