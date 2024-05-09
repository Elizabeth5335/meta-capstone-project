import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { fetchAPI, submitAPI } from "./API/Api";

import BookingForm from "./components/BookingForm";

// test("Renders the BookingForm text 'number of guests'", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Number of guests");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Check initializeTimes", () => {
//   const availableTimes = fetchAPI(new Date());
//   expect(availableTimes.length).toBeGreaterThan(0);
// });

test("should display error message for invalid phone number", () => {
  render(<BookingForm />);

  const phoneInput = screen.getByLabelText("Phone number");
  fireEvent.change(phoneInput, { target: { value: "123" } });
  fireEvent.blur(phoneInput);

  const errorMessage = screen.getByText("Phone number is invalid");
  expect(errorMessage).toBeInTheDocument();
});

test("should not display error message for valid phone number", () => {
  render(<BookingForm />);

  const phoneInput = screen.getByLabelText("Phone number");
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.blur(phoneInput);

  const errorMessage = screen.queryByText("Phone number is invalid");
  expect(errorMessage).not.toBeInTheDocument();
});

test("should display error message for invalid email", () => {
  render(<BookingForm />);

  const mailInput = screen.getByLabelText("email *");
  fireEvent.change(mailInput, { target: { value: "email" } });
  fireEvent.blur(mailInput);

  const errorMessage = screen.getByText("Email is invalid");
  expect(errorMessage).toBeInTheDocument();
});

test("should not display error message for valid email", () => {
  render(<BookingForm />);

  const mailInput = screen.getByLabelText("email *");
  fireEvent.change(mailInput, { target: { value: "mymail@gmail.com" } });
  fireEvent.blur(mailInput);

  const errorMessage = screen.queryByText("Email is invalid");
  expect(errorMessage).not.toBeInTheDocument();
});


test("should display error message for invalid date", () => {
  render(<BookingForm setAvailableTimes={()=>fetchAPI(new Date())} />);

  const dateInput = screen.getByLabelText("Choose date *");
  fireEvent.change(dateInput, { target: { value: "0001-01-01" } });
  fireEvent.blur(dateInput);

  const errorMessage = screen.getByText("Enter a valid date");
  expect(errorMessage).toBeInTheDocument();
});

test("should not display error message for valid date", () => {
  render(<BookingForm setAvailableTimes={()=>fetchAPI(new Date())}/>);

  const dateInput = screen.getByLabelText("Choose date *");
  fireEvent.change(dateInput, { target: { value: "2035-12-15" } });
  fireEvent.blur(dateInput);

  const errorMessage = screen.queryByText("Enter a valid date");
  expect(errorMessage).not.toBeInTheDocument();
});
