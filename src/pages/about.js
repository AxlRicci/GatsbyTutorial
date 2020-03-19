import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>A bit about me!</p>
            <h2><Link to="/contact">Get in touch!</Link></h2>
        </Layout>
    )
}

export default AboutPage
