import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { UserCircle } from "lucide-react";

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
              <h2>
                Tiny
                <br/>
                Mics
              </h2>
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
        { localStorage.getItem("currentUser") === null ? 
       (
        <>
          <div></div>
        </>
       ) : (<Popover>
      <PopoverTrigger asChild>
       
          <UserCircle height={100} className="h-10 w-10" />
        
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-black" align="end">
        <div className="flex flex-col space-y-1">
          {JSON.parse(localStorage.getItem("currentUser") || '{}').role === "venueOwner" ? (<Link to="/venue/profile">
            <Button
              variant="default"
              className="w-full justify-start"
              onClick={() => {}}
            >
              My Profile
            </Button>
          </Link>) : (<div></div>) }
          
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600"
            onClick={() => {
              localStorage.removeItem("currentUser")
              window.location.reload()
            }}
          >
            Sign Out
          </Button>
        </div>
      </PopoverContent>
    </Popover>)
      }
      </nav>
    );
  }

  return (
    <nav className=" flex items-center justify-center">
      <Link to="/">
        <div className="flex items-center space-x-3">
          <h2>
                Tiny <br/> Mics
          </h2>
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
