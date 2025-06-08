import { FormFileInput } from "@/components/form/FormFileInput";
import { FormInput } from "@/components/form/FormInput";
import { List, type row } from "@/components/form/List";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArtistApplicationForm() {
  const navigate = useNavigate();
  const [bandMembers,setBandMembers] = useState<row[]>([]);

  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      localStorage.setItem("applicant-band", JSON.stringify(bandMembers))
      navigate("/venue-details")
    };
  return(
    <>
      <Navbar variant="form" />
      <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-8 md:p-12 lg:p-16 w-full min-h-screen"
    >
      <div className="w-full max-w-xl space-y-6">
        <h2 className="text-white font-bold text-4xl mb-8">Artist Application</h2>
        <FormInput label="Artist/Band Name" type="text" placeholder="e.g. 100 Seconds to Friday Night" required={true}/>
        <List
          column1Header="Band Member"
          column2Header="Role"
          column1Placeholder="e.g., John Doe"
          column2Placeholder="e.g., Lead Singer"
          addButtonText="Add Member"
          emptyItemName="members"
          label="Band Member List (Bands Only)"
          initialData={bandMembers}
          onDataChange={setBandMembers}
        />
        <FormInput label="Phone Number" type="text" placeholder="e.g. 123-456-7890" required={true}/>
        <FormInput label="Email" type="text" placeholder="e.g. johndoe@gmail.com" required={true}/>
        <FormFileInput
          label="Upload EPK"
          accept="image/*,.pdf"
          description="An EPK (Electronic Press Kit) is a digital portfolio that helps venues quickly understand your artistry. Treat it like a resume for your music career!"
        />
         <List
          column1Header="Platform"
          column2Header="Link"
          column1Placeholder="e.g., Spotify"
          column2Placeholder="e.g., open.spotify.com/artist/something"
          addButtonText="Add Link"
          emptyItemName="links"
          label="Demo Links"
          required={true}
        />
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button type="submit" className="w-full sm:w-auto flex-1">
            Submit Application
          </Button>
          <Button variant="outline" onClick={() => navigate(-1)} className="w-full sm:w-auto flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </form>
    </>
  )
}