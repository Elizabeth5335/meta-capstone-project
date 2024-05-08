import React from "react";

function BookingForm(props) {
    console.log(props.availableTimes)
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();
  const [guests, setGuests] = React.useState(2);
  const [occasion, setOccasion] = React.useState();

  return (
    <form onSubmit={props.submitForm}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          props.setAvailableTimes();
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {props.availableTimes.map((timeSlot) => (
          <option key={timeSlot}>{timeSlot}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Select Your Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" className="button" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
