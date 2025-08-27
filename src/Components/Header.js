import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";

// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/f9603bfa-6070-43b1-a432-e307cc3d1161.png"
      alt="orderit"
      title="orderit"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
