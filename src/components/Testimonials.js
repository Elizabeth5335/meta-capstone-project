import heroImg from "../icons_assets/restauranfood.jpg";
import addToCart from "../icons_assets/basket .svg";
function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      image: heroImg,
      rate: 5,
      message: "Great!",
    },
    {
      name: "Mary Watson",
      image: heroImg,
      rate: 4,
      message: "Perfect coffee",
    },
    {
      name: "Antony Klark",
      image: heroImg,
      rate: 5,
      message: "I will come here again and again",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span style={{ color: "var(--primary-light)" }}>&#9733;</span>
      );
    }
    if (rating < 5) {
      for (let i = rating; i < 5; i++) {
        stars.push(
          <span style={{ color: "var(--secondary-dark)" }}>&#9733;</span>
        );
      }
    }
    return stars;
  };

  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="card-list">
        {testimonials.map((item) => {
          return (
            <div key={item.name} className="card">
              <img className="card-image" src={item.image} />
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.name}</h3>
                </div>
                <div className="rating">{renderStars(item.rate)}</div>
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
