import React from "react";

const HomeService = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="mt-10 shadow-xl card bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description ? description : 'No Discription'}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
