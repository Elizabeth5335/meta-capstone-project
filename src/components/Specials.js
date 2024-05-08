import bruchetta from "../icons_assets/bruchetta.jpg";
import salad from "../icons_assets/greek salad.jpg";
import dessert from "../icons_assets/lemon dessert.jpg";

import addToCart from "../icons_assets/basket .svg"
import { Link } from "react-router-dom";
function Specials() {
  const items = [
    {
      name: "Greek Salad",
      image: salad,
      price: 6.25,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.",
    },
    {
      name: "Bruchetta",
      image: bruchetta,
      price: 3.5,
      description:
        "Au Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      name: "Lemon Dessert",
      image: dessert,
      price: 5.2,
      description:
        "Thie comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    },
  ];
  return (
    <section className="specials">
      <div className="flex">
        <h1>This week's specials!</h1>
        <Link className="button" to="/menu">
          Online Menu
        </Link>
      </div>
      <div className="card-list">
        {items.map((item) => {
          return (
            <div key={item.name} className="card">
              <img className="card-image" src={item.image} />
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}$</p>
                </div>
                <p>{item.description}</p>
                <button>
                  Order for delivery <img src={addToCart} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Specials;
