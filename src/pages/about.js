import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>A bit about me!</p>
            <h2><Link to="/contact">Get in touch!</Link></h2>
            <Footer/>
        </div>
    )
}

export default AboutPage
