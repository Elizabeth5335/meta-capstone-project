import Navigation from "./Navigation";
import logo from "../icons_assets/Logo.svg"

function Header() {
  return (
    <header>
        <a href="/"><img src={logo} alt="logo"/></a>
      <Navigation />
    </header>
  );
}

export default Header;
