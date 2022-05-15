import React from 'react';
import doctor from '../../assets/images/doctor-small.png';

const MakeAppointment = () => {
    return (
      <section className="hero px-0 lg:px-40 gap-15 bg-[url('/src/assets/images/appointment.png')]">
        <div className="flex-col p-0 hero-content lg:flex-row">
          <img
            src={doctor}
            className="max-w-sm hidden lg:block rounded-lg mt-[-60px]"
            alt=""
          />
          <div className="px-10">
            <h1 className="text-xl font-bold text-primary">APPOINTMENT</h1>
            <h1 className="py-5 text-4xl font-bold">Make an appointment Today</h1>
            <p className='pb-5'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    );
};

export default MakeAppointment;