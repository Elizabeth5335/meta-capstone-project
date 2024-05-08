import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
// import { initializeTimes, updateTimes } from './App';


test("Renders the BookingForm text 'number of guests'", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Number of guests");
  expect(headingElement).toBeInTheDocument();
});


// test("Check initializeTimes", () => {
//   const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
//   const availableTimes = initializeTimes();
//   expect(availableTimes).toEqual(expectedTimes);
// });
