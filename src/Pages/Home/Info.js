import React from "react";
import InfoCard from "./Components/InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 gap-5 px-12 lg:grid-cols-3">
      <InfoCard
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
      />
      <InfoCard img={marker} bgColor="bg-accent" cardTitle="Our Locations" />
      <InfoCard
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us"
      />
    </div>
  );
};

export default Info;
