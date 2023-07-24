import "./Header.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Phone } from "../../assets/img/phone.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header container">
      <div className="Header__inner container__row">
        <Link to="/" className="Header__logo">
          <Logo />
        </Link>
        <a href="tel:+74954954954" className="Header__phone">
          <p>+7 (495) 495-49-54</p>
          <Phone />
        </a>
      </div>
    </header>
  );
}

export default Header;
