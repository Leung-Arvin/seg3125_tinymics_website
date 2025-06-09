import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { useNavigate } from "react-router-dom";

export default function ArtistBookingConfirmation() {
  const navigate = useNavigate();
  return(
  <div className="h-screen ">
    <Navbar variant="form"/>
    <div className="flex flex-col h-200 items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center gap-5 max-w-80">
        <img src="assets/sent_mail_icon.png" width="200" className="mx-auto" />
        <h2 className="text-center">Venue <br/> Notified</h2>
        <p>Now we wait and see if the venue reaches out</p>
        <p>In the meantime...</p>
        <ul className="list-disc pl-5">
          <li>Gigs are a number game. So continue to apply for other venues</li>
          <li>If you’re not logged in, log in for quicker applications</li>
          <li>Check your Inbox or phone frequently</li>
        </ul>
        <Button onClick={() => {navigate("/discover")}}>Discover More</Button>
      </div>  
    </div>
  </div>
  )
}
