import React from 'react';
import chair from './../../assets/images/chair.png'

const banner = () => {
  return (
    <div className="min-h-screen hero bg-[url('/src/assets/images/bg.png')]">
      <div className="flex-col min-h-screen bg-cover lg:px-12 hero-content lg:flex-row-reverse">
        <img
          src={chair}
          className="rounded-lg shadow-2xl w-[322px] md:w-[458]"
          alt="Photos"
        />
        <div className="lg:pr-20">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default banner;