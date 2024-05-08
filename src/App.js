import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./API/Api";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {
  const [availableTimes, setAvailableTimes] = React.useReducer(
    updateTimes,
    initializeTimes()
  );

  function updateTimes(date) {
    return availableTimes;
  }

  function updateTimes(state, action) {
      let newTimes = fetchAPI(new Date());
      return newTimes;
  }

  React.useEffect(()=>{
    console.log(fetchAPI(new Date()));
  }, [])

  function initializeTimes(date) {
    return fetchAPI(new Date())
  }
  const navigate = useNavigate();


  function submitForm(formData){
    const res = submitAPI(formData);
    if (res === true) {
      navigate('/success');
    }
  }
  

  return (
    <>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/reservation"
            element={
              <>
                <Header />
                <BookingPage
                  availableTimes={availableTimes}
                  setAvailableTimes={setAvailableTimes}
                  submitForm={submitForm}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/success"
            element={
              <>
                <Header />
                <ConfirmedBooking />
                <Footer />
              </>
            }
          />
        </Routes>
    </>
  );
}

export default App;
