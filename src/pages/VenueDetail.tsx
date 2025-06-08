import { List } from "@/components/form/List";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Venue } from "@/components/ui/venueCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VenueDetail() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<{ venue: Venue | null}>({
    venue: null,
  });
  const [applicationData, setApplicationData] = useState<[]>([]);

  useEffect(() => {
    const venueData = localStorage.getItem("selectedVenue");
    const application = localStorage.getItem("applicant-band")

    if (!venueData) {
      navigate("/discover");
      return;
    }

    setBookingData({
      venue: JSON.parse(venueData),
    });
    setApplicationData(
      application ? JSON.parse(application) : []
    )
  }, []);

  const handleSubmit = () => {
    localStorage.removeItem("selectedVenue");
    localStorage.removeItem("applicant-band");
    navigate("/artist-booking-confirmation");
  }

  return (
    <div className="min-h-screen">
      <Navbar variant="form" />
      <div className="p-10 mt-10 flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="mb-5">Gig Details</h2>
              <h3>{"Date & Time: " + bookingData.venue?.date || "N/A"}</h3>
              <h3>
                {"Venue Address: " + bookingData.venue?.location || "N/A"}
              </h3>
              <h3>{"Contact: " + bookingData.venue?.contact || "N/A"}</h3>
              <h3>{"Additional Info: " + bookingData.venue?.date || "N/A"}</h3>
            </section>
            <section>
              <h2 className="mb-5">Provided Equipment</h2>
              <Table className=" border-2">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[45%]  font-bold">
                      {"Equipment"}
                    </TableHead>
                    <TableHead className="w-[45%]  font-bold">
                      {"Quantity"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(bookingData.venue?.equipment?.length ?? 0) > 0 ? (
                    bookingData.venue?.equipment.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.equipment}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No equipment yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </section>
            <section>
              <h2 className="mb-5">Financials</h2>
              <div className="flex flex-row justify-between">
                <div className="">
                  <h3>Payout </h3>
                  <p>Via e-transfer or cash</p>
                </div>
                {(applicationData.length ?? 0) > 0 ?
                  (<h3>{"$" + bookingData.venue?.payMax}</h3>)
                  : (<h3>{"$" + bookingData.venue?.payMin}</h3>)
                }
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-5">
            <h2>Set Details</h2>
            <h3>{"Set Length: " + bookingData.venue?.set_length}</h3>
            {(applicationData.length ?? 0) > 0 ?
                  (<h3>{"Performance Type: Band"}</h3>)
                  : (<h3>{"Perfomance Type: Solo"}</h3>)
                }
            <List
              required={true}
              column1Header="Song"
              column2Header="Duration"
              column1Placeholder="e.g. song title"
              column2Placeholder="e.g. 5 mins"
              label="Set List "
              emptyItemName="songs"
            />
            <h3>{"SoundCheck Time: " + bookingData.venue?.sound_check_time}</h3>
            <h3>{"Perks: " + bookingData.venue?.perks}</h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 ">
          <Button type="submit" onClick={handleSubmit} className="w-full sm:w-auto h-12 flex-1 text-md ">
            Complete Booking
          </Button>
          <Button variant="outline" onClick={() => navigate(-1)} className="w-full sm:w-auto h-12 flex-1  text-md">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
