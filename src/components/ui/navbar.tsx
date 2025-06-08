import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface NavbarProps {
  variant?: string;
}
const Navbar = ({ variant = "default" }: NavbarProps) => {
  if (variant === "default") {
    return (
      <nav className="flex justify-between items-center p-6 white-text ">
        <div className="flex items-center space-x-3">
          <Link to="/">
          <div className="flex items-center space-x-3">
            <img src="src/assets/logo-white.svg" alt="Logo" className="h-10" />
            <p>
              Big gigs,
              <br />
              tiny hassle
            </p>
          </div>
        </Link>
        </div>

        <div className="flex gap-8">
        <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/discover" 
            className={({ isActive }) => 
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            Discover
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            About
          </NavLink>
        </div>

        <img src="src/assets/userCircle.svg" alt="" />
      </nav>
    );
  }

  return (
    <nav className=" flex items-center justify-center">
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img src="src/assets/logo-white.svg" alt="Logo" className="h-10" />
          <p>
            Big gigs,
            <br />
            tiny hassle
          </p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
