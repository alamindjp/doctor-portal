import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentServices from "./AppointmentServices";
import Footer from "../Shared/Footer/Footer";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-12">
      <AppointmentBanner date={date} setDate={setDate} />
      <AppointmentServices date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
