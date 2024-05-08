import React from "react";
import { Link } from "react-router-dom";

function Navigation() {

  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick(){
    if(window.innerWidth < 756) setShowMenu(prev => !prev)
  }

  return (
    <nav>
      <div className={`hamburger`} onClick={handleClick}>{showMenu ? "X" : "|||"}</div>
      {/* <div className={`hamburger ${showMenu ? "" : "hide"}`} onClick={handleClick}>X</div> */}
      <ul className={showMenu ? "show" : ""}>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/reservation">RESERVE TABLE</Link>
        </li>
        <li>
          <Link to="/order-online">ORDER ONLINE</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
