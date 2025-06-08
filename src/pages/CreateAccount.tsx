import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateAccount() {
  const navigate = useNavigate();
  const handleVenueClick = () => {
    navigate("/register/venue");
  };

  const handleArtistClick = () => {
    navigate("/register/artist");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-16">
      <div className="space-y-6 max-w-xl">
        <h1>Register an Account</h1>
        <p>Proceed with either a business or artist account:</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button onClick={handleVenueClick} className="...">
            VENUE / STAGE <ArrowUpRight className="ml-2" />
          </Button>

          <Button onClick={handleArtistClick} className="...">
            ARTIST? <ArrowUpRight className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src="src/assets/guitar-player.png"
          alt="Guitar Player"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
