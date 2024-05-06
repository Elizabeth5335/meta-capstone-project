import Navigation from "./Navigation";
import logo from "../icons_assets/Logo.svg"

function Header() {
  return (
    <header>
        <img src={logo} alt="logo"/>
      <Navigation />
    </header>
  );
}

export default Header;
