import brothersA from "../icons_assets/Mario and Adrian A.jpg";
import brothersB from "../icons_assets/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum quam ac porta hendrerit. Nullam lacinia purus sed lacus
          placerat, nec consectetur lectus facilisis. Aenean aliquam tristique
          nisi, non suscipit nisl maximus vitae. Proin et est eu nunc imperdiet
          ultrices. Sed euismod nunc sapien, ut mollis tellus molestie sed.
          Suspendisse tincidunt purus eu leo tempor, et dictum ligula viverra.
          Suspendisse nunc odio, faucibus et magna non, imperdiet rhoncus orci.
          Mauris vel varius magna.
        </p>
      </div>
      {/* <img className="about-image" src={brothersA} alt="brothers"/> */}
      <img className="about-image" src={brothersB} alt="brothers"/>
    </section>
  );
}

export default About;
