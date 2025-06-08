import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export type Venue = {
    id: number;
    name: string;
    location: string;
    genre: string;
    payRange: string;
    payMin: number;
    payMax: number;
    type: string;
    date: string;
    dateObj: Date;
    imageUrl: string;
    rating: number;
    audience: number;
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
  name: string;
  location: string;
  genre: string;
  payRange: string;
  payMin: number;
  payMax: number;
  dateObj: Date;
  date: string;
  imageUrl: string;
  rating: number;
  audience: number;
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
  name,
  location,
  genre,
  payRange,
  date,
  imageUrl,
  rating,
  audience,
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
      name,
      location,
      genre,
      payRange,
      date,
      imageUrl,
      rating,
      audience,
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
        alt={name}
        className="w-full h-56 object-cover rounded-t-3xl"
      />
      <div className="p-6">
        <h5 className="mb-2 uppercase text-bold">{name}</h5>
        <div className="text-sm leading-6 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Pay Range:</span> {payRange}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {date}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-6 text-sm text-gray-700">
            <div
              className="flex items-center gap-1"
              title="Expected audience size"
            >
              <span className="text-lg">👥</span>
              <span>{audience}</span>
            </div>
            <div className="flex items-center gap-1" title="Average rating">
              <span className="text-lg">⭐</span>
              <span>{rating}/5</span>
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
