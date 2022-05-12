import React from 'react';
import Banner from './Banner'
import Testimonial from './Testimonial';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer/>
        </div>
    );
};

export default Home;