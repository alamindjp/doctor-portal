import React from "react";

const ContactUs = () => {
  return (
    <section className="my-20 bg-[url('/src/assets/images/appointment.png')]">
      <div className="text-center text-white">
        <h5 className="text-xl font-bold text-primary">Contact Us</h5>
        <h2 className="text-4xl">What Our Patients Says</h2>
      </div>
      <form className="w-3/4 mx-auto md:w-3/5 lg:w-1/2">
        <div className="card-body py-7">
          <div className="form-control">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-info"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="mt-6 form-control">
            <input
              className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
