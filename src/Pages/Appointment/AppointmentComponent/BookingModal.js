import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />
  }
  const formattedDate = format(date, 'PP')
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot: slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)

    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Appointment is set ${formattedDate} at ${slot}`)
        }
        //close the modal
        else {
          toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch()
        setTreatment(null)
      })
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
                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
            <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
            <input type="submit" value='Submit' className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;