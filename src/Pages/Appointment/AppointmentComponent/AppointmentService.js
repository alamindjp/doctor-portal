import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="shadow-xl card lg:max-w-lg bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]} </span>
          ) : (
            <span className="text-red-500">
              {" "}
              No Slots please try another day{" "}
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="justify-center card-actions">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary"
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
