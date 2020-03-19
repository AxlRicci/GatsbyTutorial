import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <h2>I'm Alex a coder in training.</h2>
            <p>Need a dev? <Link to="/contact">Contact me</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage