import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from "./Components/Review";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      location: "california",
      reviewBody:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      location: "california",
      reviewBody:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      location: "california",
      reviewBody:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
  ];
  return (
    <section className="px-12 my-10">
      <div className="flex justify-between">
        <div>
          <h5 className="text-xl font-bold text-primary">Testimonial</h5>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          />)
        }
      </div>
    </section>
  );
};

export default Testimonial;
