interface VenueCardProps {
  name: string;
  location: string;
  genre: string;
  payRange: string;
  date: string;
  imageUrl: string;
  rating: number;
  audience: number;
}

const VenueCard = ({
  name,
  location,
  genre,
  payRange,
  date,
  imageUrl,
  rating,
  audience,
}: VenueCardProps) => {
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

          <button className="background-accent hover:bg-purple-600 white-text text-sm font-bold py-2 px-5 rounded-md shadow-md">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
