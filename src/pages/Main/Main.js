import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Projects, Testimonials } from '../../components';
import { headerData } from '../../data/headerData';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Contacts />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Main;
