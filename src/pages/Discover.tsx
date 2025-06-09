import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VenueCard, { type Venue } from "@/components/ui/venueCard";
import { useEffect, useState } from "react";


const venueGenres = ["All", "Cafe", "Bar", "Club"];
const sortByOptions = [
  { value: "seating", label: "Most Seating" },
  { value: "date", label: "Earliest Gig" },
  { value: "pay", label: "Best Paying" },
];

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectGenre] = useState("All");
  const [sortBy, setSortBy] = useState("seating");
  const [venues, setVenues] = useState<Venue[]>([]);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("initial-events") || '{}');
    setVenues(data)
  }, [])

  const filteredVenues = venues
    .filter((venue) => {
      const matchesSearch =
        venue.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        venue.genre.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedGenre === "All" || venue.type === selectedGenre;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "seating":
          return b.seating - a.seating;
        case "date":
          return new Date(a.dateObj).getTime() - new Date(b.dateObj).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex flex-col gap-10">
        <h1 className="mb-8">Discover Venues</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input
            className=" placeholder:p-2"
            placeholder="Search by name or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Select value={selectedGenre} onValueChange={setSelectGenre}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Venue Genre" />
            </SelectTrigger>
            <SelectContent>
              {venueGenres.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sortByOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {filteredVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {filteredVenues.map((venue) => (
              <VenueCard
              id={venue.id}
              key={venue.id}
              eventName={venue.eventName}
              location={venue.location}
              genre={venue.genre}
              payRange={venue.payRange}
              date={venue.date}
              dateObj={venue.dateObj}
              type={venue.type}
              time="3:00pm"
              imageUrl={venue.imageUrl}
              seating={venue.seating}
              contact={venue.contact}
              additional_info={venue.additional_info}
              equipment={venue.equipment}
              set_length={venue.set_length}
              sound_check_time={venue.sound_check_time}
              perks={venue.perks}
              payMax={venue.payMax}
              payMin={venue.payMin}
                />
            ))}
          </div>
        ) : (
          <p className="text-center">No venues match your filters</p>
        )}
      </div>
    </div>
  );
}
