import { useEffect, useState } from "react";
import { getVenues, getEvents } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { VenueData, EventData } from "@/lib/storage";

export default function VenueProfilePage() {
  const navigate = useNavigate();
  const [venue, setVenue] = useState<VenueData | null>(null);
  const [events, setEvents] = useState<EventData[]>([]);
  const handleCreateEvent = () => {
    navigate("/event-form");
  };

  useEffect(() => {
    const activeId = localStorage.getItem("activeVenueId");
    const venues = getVenues();
    const found = venues.find((v) => v.id === activeId);
    if (found) {
      setVenue(found);
      const allEvents = getEvents();
      const venueEvents = allEvents.filter(
        (event) => event.venueId === found.id
      );
      setEvents(venueEvents);
    }
  }, []);

  if (!venue) return <div className="text-white p-8">Loading...</div>;

  return (
    <div className="bg-[#1f1f1f] min-h-screen p-6 sm:p-12 flex flex-col items-center">
      <div className="w-full h-40 sm:h-60 bg-cover bg-center rounded-t-xl" />

      <div className="bg-[#2a2a2a] rounded-xl w-full max-w-5xl p-6 sm:p-8 -mt-8 flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 text-center sm:text-left">
          <h3>{venue.name}</h3>
          <p className="text-sm">{venue.email}</p>
          <p className="text-sm">{venue.address}</p>
          <Button className="mt-4 bg-white font-semibold py-1 px-3 rounded-md hover:bg-gray-200">
            Edit Profile
          </Button>
        </div>
        <div className="flex-1 bg-[#1f1f1f] p-4 rounded-lg">
          <p className="mb-2 uppercase">About This Venue</p>
          <p>
            {venue.description ||
              "No description provided yet. Add some details about your venue."}
          </p>
        </div>
      </div>
      <div className="w-full max-w-5xl mt-8">
        <Button
          onClick={handleCreateEvent}
          className="mb-4 font-semibold py-2 px-4 rounded-md hover:bg-gray-200"
        >
          Create New Event
        </Button>
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-black mb-4">My Events</h3>

          {events.length === 0 ? (
            <p className="text-gray-500">No events yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#1f1f1f] rounded-lg h-36 sm:h-40 lg:h-48 p-4 text-white"
                >
                  <p className="font-semibold">{event.genre}</p>
                  <p className="text-sm text-gray-300">
                    {event.date?.toString() || "No date"}
                  </p>
                  <p className="text-sm text-gray-300">{event.notes}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
