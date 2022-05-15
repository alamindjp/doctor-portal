import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentComponent/AppointmentService";
import BookingModal from "./AppointmentComponent/BookingModal";

const AppointmentServices = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <h4 className="text-xl text-center text-primary">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
      />}
    </div>
  );
};

export default AppointmentServices;
