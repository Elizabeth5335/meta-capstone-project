import React from "react";

function BookingForm(props) {
  console.log(props.availableTimes);
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();
  const [guests, setGuests] = React.useState(2);
  const [occasion, setOccasion] = React.useState();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [formErrors, setFormErrors] = React.useState({});

  function validatePhone() {
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        phone
      ) &&
      phone.trim()
    ) {
      setFormErrors((prev) => ({
        ...prev,
        phone: "Phone number is invalid",
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        phone: null,
      }));
    }
  }

  function validateEmail() {
    if (!email.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Email is invalid",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: null,
      }));
    }
  }

  function validateName() {
    if (!name.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: null,
      }));
    }
  }

  function validateGuests() {
    let error = null;
    if (guests < 1) {
      error = "Guests number can't be less than 1";
    } else if (guests > 10) {
      error = "Guests number can't be more than 10";
    }
    setFormErrors((prev) => ({
      ...prev,
      guests: error,
    }));
  }

  function validateDate() {
    let error = null;

    if (date === "") {
      error = "Date is required";
    } else if (!isValidDate(date)) {
      error = "Enter a valid date";
    }
    setFormErrors((prev) => ({
      ...prev,
      date: error,
    }));
  }

  function isValidDate(dateString) {
    // const yyyymmdd = dateString.split("-");
    const dateObj = new Date(dateString);

    if (dateObj <= new Date()) return false;
    return true;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!formErrors) props.submitForm();
      }}
    >
      <h2 className="contact-info-heading">Booking details</h2>
      <label htmlFor="res-date">Choose date *</label>
      <input
        required
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          props?.setAvailableTimes(date);
          validateDate(e);
        }}
        onBlur={validateDate}
      />
      {formErrors?.date && <span className="error">{formErrors.date}</span>}

      <label htmlFor="res-time">Choose time *</label>
      <select
        required
        id="res-time "
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {props.availableTimes?.map((timeSlot) => (
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
          validateGuests(e);
        }}
        onBlur={validateGuests}
      />
      {formErrors?.guests && <span className="error">{formErrors.guests}</span>}

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
      <h2 className="contact-info-heading">Contact information</h2>
      <label htmlFor="name">Full name *</label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Full name"
        required
        onChange={(e) => {
          setName(e.target.value);
          validateName(e);
        }}
        onBlur={validateName}
      />
      {formErrors?.name && <span className="error">{formErrors.name}</span>}

      <label htmlFor="email">email *</label>
      <input
        type="email"
        id="email"
        value={email}
        required
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail();
        }}
        onBlur={validateEmail}
      />
      {formErrors?.email && <span className="error">{formErrors?.email}</span>}

      <label htmlFor="phone">Phone number</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        placeholder="Phone number"
        onChange={(e) => {
          setPhone(e.target.value);
          validatePhone();
        }}
        onBlur={validatePhone}
      />
      {formErrors?.phone && <span className="error">{formErrors.phone}</span>}
      <input type="submit" className="button" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
