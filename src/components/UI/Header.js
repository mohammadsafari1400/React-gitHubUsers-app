import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>GitHub</h1>
      </div>
      <nav className="nav">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
