import React from 'react';
import Banner from './Banner'
import Testimonial from './Testimonial';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer/Footer';
import HomeServices from './HomeServices';

const Home = () => {
    return (
      <div>
        <Banner />
        <Info />
        <HomeServices />
        <MakeAppointment />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    );
};

export default Home;