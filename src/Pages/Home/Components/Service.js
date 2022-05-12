import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description ? description : 'No Discription'}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
