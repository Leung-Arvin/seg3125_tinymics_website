import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 white-text ">
      <div className="flex items-center space-x-3">
        <img src="src/assets/logo-white.svg" alt="Logo" className="h-10" />
        <p>
          Big gigs,
          <br />
          tiny hassle
        </p>
      </div>

      <div className="flex gap-8">
        <Link to="/" className="underline">
          Home
        </Link>
        <Link to="/discover">Discover</Link>
        <Link to="/about">About</Link>
      </div>

      <img src="src/assets/userCircle.svg" alt="" />
    </nav>
  );
};

export default Navbar;
