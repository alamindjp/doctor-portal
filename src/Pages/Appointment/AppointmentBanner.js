import { format } from 'date-fns';
import React from 'react';
import chair from '../../assets/images/chair.png'
import "react-day-picker/dist/style.css";
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({date, setDate }) => {
  return (
    <div className="hero py-28 h-[70] bg-[url('/src/assets/images/bg.png')]">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl w-[322px]md:w-[458] lg:w-[600] lg:ml-10"
          alt=""
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected : {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;