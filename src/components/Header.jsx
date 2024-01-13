import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bag = useSelector((store) => store.bag.items);

  return (
    <header>
      {/* logo  */}
      <div className="header-logo">
        <Link className="link-style" to="/">
          <img className="logo-img" src="images/myntra_logo.webp" />
        </Link>
      </div>

      {/* navitem */}
      <nav className="navbar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>

      {/* searchbar  */}
      <div className="search-bar">
        <span className="search-btn">Search</span>
        <input
          className="search-input"
          placeholder="Search for products, brands and more"
        />
      </div>

      {/* actionbar */}
      <div className="action-bar">
        <Link to="/login" className="action-container">
          <IoPersonOutline />
          <span className="action-name">Profile</span>
        </Link>
        <div className="action-container">
          <FaRegHeart />
          <span className="action-name">Wishlist</span>
        </div>
        <Link to="/bag" className="action-container">
          <IoBagOutline />
          <span className="action-name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
