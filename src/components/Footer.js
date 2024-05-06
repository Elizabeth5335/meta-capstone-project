import Navigation from "./Navigation";

function Footer() {
  return (
    <footer>
      <Navigation />
      <ul>
        <li>
          <a href="/">Address</a>
        </li>
        <li>
          <a href="phone:+38012345678">Phone</a>
        </li>
        <li>
          <a href="mailto:mymail@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
