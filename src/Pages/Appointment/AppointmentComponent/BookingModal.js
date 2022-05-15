import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    setTreatment(null)
    console.log(slot)
  }
  return (
    <div className='sm:max-w-sm'>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">Booking For: {name}</h3>
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center gap-3 mt-3">
            <input type="text" readOnly value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
            <select name='slot' className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="full Name" className="input input-bordered w-full max-w-xs" />
            <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value='Submit' className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;