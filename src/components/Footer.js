import Navigation from "./Navigation";
import logo from "../icons_assets/Logo .svg"
function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo"/>
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
