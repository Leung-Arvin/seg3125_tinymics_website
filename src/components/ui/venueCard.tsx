import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { type EventData } from "@/lib/storage";

interface VenueCardProps extends EventData {
  name: string;
  payRange?: string;
  dateObj?: Date;
  rating?: any;
  type?: any;
}

const VenueCard = ({
  venueId,
  eventName,
  name,
  date,
  time,
  genre,
  payout,
  seating,
  setLength,
  perks,
  notes,
  equipment,
}: VenueCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = () => {
    setIsLoading(true);

    localStorage.setItem(
      "selectedEvent",
      JSON.stringify({
        venueId,
        date,
        time,
        genre,
        payout,
        seating,
        setLength,
        perks,
        notes,
        equipment,
      })
    );

    navigate("/artist-application-dialog");
  };

  return (
    <div className="background-white rounded-3xl overflow-hidden shadow-xl max-w-md w-full black-text">
      <div className="p-6 border border-gray-300">
        <h5 className="mb-2 uppercase text-bold">{eventName}</h5>
        <h5 className="mb-2 uppercase text-bold">{name}</h5>
        <div className="text-sm leading-6 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Pay(CAD):</span> {payout}
          </p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {date
              ? date.toLocaleDateString("en-GB") +
                ", " +
                date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })
              : "N/A"}
          </p>

          {setLength && (
            <p>
              <span className="font-semibold">Set Length:</span> {setLength}
            </p>
          )}
          {perks && (
            <p>
              <span className="font-semibold">Perks:</span> {perks}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-1" title="Audience">
              <span className="text-lg">👥</span>
              <span>{seating}</span>
            </div>
          </div>
          <Button
            onClick={handleApply}
            disabled={isLoading}
            variant="secondary"
          >
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
