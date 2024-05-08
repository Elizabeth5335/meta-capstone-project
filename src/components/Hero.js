import heroImg from "../icons_assets/restauranfood.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-description">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a className="button" href="/reservation">
            Reserve a table
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImg} className="hero-image" alt="little lemon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
