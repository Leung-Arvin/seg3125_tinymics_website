import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export type Venue = {
    id: number;
    eventName: string;
    location: string;
    genre: string;
    payRange: string;
    payMin: number;
    payMax: number;
    type: string;
    date: string;
    time: string;
    dateObj: Date;
    imageUrl: string;
    seating: number;
    contact: string;
    additional_info: string;
    equipment: {
      id: number,
      equipment: string,
      quantity: string
    }[],
    set_length: string;
    sound_check_time: string;
    perks: string;
}
interface VenueCardProps {
  id: number;
    eventName?: string;
    location: string;
    genre: string;
    payRange: string;
    payMin: number;
    payMax: number;
    type: string;
    date?: string;
    time: string;
    dateObj: Date;
    imageUrl?: string;
    seating: number;
    contact: string;
    additional_info: string;
    equipment: {
      id: number,
      equipment: string,
      quantity: string
    }[],
    set_length: string;
    sound_check_time: string;
    perks: string;
}

const VenueCard = ({
  id,
  eventName,
  genre,
  payRange,
  date,
  dateObj,
  imageUrl,
  time,
  seating,
  payMin,
  payMax,
  contact,
  equipment,
  set_length,
  sound_check_time,
  perks
}: VenueCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = () => {
    setIsLoading(true);
    
    localStorage.setItem('selectedVenue', JSON.stringify({
      id,
      eventName,
      location,
      genre,
      payRange,
      date,
      imageUrl,
      seating,
      payMin,
      payMax,
      contact,
      equipment,
      set_length,
      sound_check_time,
      perks
    }));

    navigate('/artist-application-dialog');
  };

  return (
    <div className="background-white rounded-3xl overflow-hidden shadow-xl max-w-md w-full black-text">
      <img
        src={imageUrl}
        className="w-full h-56 object-cover rounded-t-3xl"
      />
      <div className="p-6 border border-gray-300">
        <h5 className="mb-2 uppercase text-bold">{eventName}</h5>
        <div className="text-sm leading-6 flex flex-col gap-1">
          
          <p>
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Pay(CAD):</span> {payRange}
          </p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            { new Date(dateObj).toLocaleDateString("en-GB") +
                ", " +
               time
             }
          </p>

          {set_length && (
            <p>
              <span className="font-semibold">Set Length:</span> {set_length}
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

          <Button onClick={handleApply} disabled={isLoading} variant="secondary">
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
