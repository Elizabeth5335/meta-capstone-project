import { Link } from "react-router-dom";

function ConfirmedBooking(props) {
  return (
    <section className="confirmed">
      <h1 className="confirmed-text">Your reservation confirmed!</h1>
      <Link to='/' className="button">Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
