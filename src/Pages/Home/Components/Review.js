import React from "react";

const Review = ({ review }) => {
  const { name, img, reviewBody, location } = review;
  return (
    <div className="shadow-xl card bg-base-100">
      <div className="card-body">
        <p>{reviewBody}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
              <img src={img} alt="Presents Images" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
