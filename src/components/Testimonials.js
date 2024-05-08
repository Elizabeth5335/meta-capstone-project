import person1 from "../icons_assets/person1.png";
import person2 from "../icons_assets/person2.png";
import person3 from "../icons_assets/person3.png";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      image: person2,
      rate: 5,
      message: "Great!",
    },
    {
      name: "Mary Watson",
      image: person1,
      rate: 4,
      message: "Perfect coffee",
    },
    {
      name: "Antony Klark",
      image: person3,
      rate: 5,
      message: "I will come here again and again",
    },
  ];

  const UID = () => {
    const randomNumber = Math.random();
    const timestamp = Date.now();
    const uniqueId = `${randomNumber}-${timestamp}`;
    return uniqueId;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={UID()} style={{ color: "var(--primary-light)" }}>&#9733;</span>
      );
    }
    if (rating < 5) {
      for (let i = rating; i < 5; i++) {
        stars.push(
          <span key={UID()} style={{ color: "var(--secondary-dark)" }}>&#9733;</span>
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
