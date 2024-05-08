import Navigation from "./Navigation";
import logo from "../icons_assets/Logo.svg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <Link to="/"><img src={logo} alt="logo"/></Link>
      <Navigation />
    </header>
  );
}

export default Header;
