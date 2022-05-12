import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Components/Service";
import Treatment from "./Components/Treatment";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a expedita ipsum? Libero quos iusto eos, architecto tenetur inventore maiores.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a expedita ipsum? Libero quos iusto eos, architecto tenetur inventore maiores.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a expedita ipsum? Libero quos iusto eos, architecto tenetur inventore maiores.",
      img: whitening,
    },
  ];
  return (
    <div className="px-12 my-28">
      <div className="text-center">
        <h5 className="text-xl font-bold text-primary">OUR SERVICES</h5>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <Treatment />
    </div>
  );
};

export default Services;
