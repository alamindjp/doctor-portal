import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentService from "./AppointmentComponent/AppointmentService";
import BookingModal from "./AppointmentComponent/BookingModal"; import { useQuery } from 'react-query'
import Loading from "../Shared/Loading/Loading";

const AppointmentServices = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, 'PP');

  const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <Loading />
  }

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
        refetch={refetch}
      />}
    </div>
  );
};

export default AppointmentServices;
