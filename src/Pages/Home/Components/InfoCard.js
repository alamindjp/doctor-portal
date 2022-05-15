import React from "react";

const InfoCard = ({ img, bgColor, cardTitle }) => {
  return (
    <div className={`shadow-xl card md:card-side bg-primary ${bgColor}`}>
      <figure className="pt-5 pl-5">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="text-white card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
