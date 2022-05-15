import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/404.png'

const NotFound = () => {
    return (
      <div className="flex justify-center mt-5">
        <Link to="/">
          <img className="h-full" src={NotFoundImg} alt="" />
        </Link>
      </div>
    );
};

export default NotFound;