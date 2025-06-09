import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Navbar from "@/components/ui/navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ArtistApplicationDialog() {

  const [loggedIn] = useState(() => {
    const currentUser = localStorage.getItem("currentUser");
    const parsedUser = currentUser ? JSON.parse(currentUser) : {};
    return parsedUser.role === "artist";
  });
  const navigate = useNavigate();
  

  return(
    <div className="h-screen">
       <Navbar variant="form"/>
      <div className="flex flex-col mt-70 justify-center items-center">
        <Card className="p-10 py-10">
          <CardHeader className="mb-10">
          <CardTitle className="text-2xl">Venue Application</CardTitle>
          <CardDescription className="text-gray-300">
            Venue Applications are easier when you're signed in
          </CardDescription>
          <CardAction>
            <Button onClick={()=> {console.log("go to sign-in")}} variant="link">Sign in</Button>
          </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
            {loggedIn ? <Button disabled={!loggedIn} onClick={() => {navigate("/venue-details")}}>Autofill Apply</Button> :
              <Tooltip >
              <TooltipTrigger><Button disabled={!loggedIn}>Autofill Apply</Button></TooltipTrigger>
              <TooltipContent className="bg-gray-500 mt-2" side="bottom">
                <p>You need an account to Autofill</p>
              </TooltipContent>
            </Tooltip>
            }
          
            <Button onClick={() => {navigate("/artist-application-form")}}>Custom Application</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
 
}