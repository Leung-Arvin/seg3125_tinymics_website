import Navbar from "@/components/ui/navbar";
import VenueCard from "@/components/ui/venueCard";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const venueData = [
  {
    id: 1,
    name: "The Blue Note Café",
    location: "123 Jazz Lane",
    genre: "Jazz, Folk, Acoustic",
    payRange: "$300–$500 (plus bar tips)",
    payMin: 300,
    payMax: 500,
    date: "Sat, Oct 21 @ 8–11pm",
    dateObj: new Date(2023, 9, 21, 20), 
    imageUrl:
      "https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2023/08/cafe23.jpg",
    rating: 5,
    audience: 108,
    type: "Cafe",
    contact: "Jennie",
    additional_info: "you can sell merch",
    equipment: [
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
    ],
    set_length: "2 Hours (2 Sets of 45min + 15min break) ",
    sound_check_time: "6:30pm",
    perks: "Meal and Drinks Included",
  },
  {
    id: 2,
    name: "The Rusty Keg",
    location: "456 Brew Street",
    genre: "Rock, Blues",
    payRange: "$400–$600",
    payMin: 400,
    payMax: 600,
    date: "Fri, Oct 20 @ 9pm–12am",
    dateObj: new Date(2023, 9, 20, 21),
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a0/63/35/goose-island-brewhouse.jpg?w=600&h=-1&s=1",
    rating: 4,
    audience: 150,
    type: "Bar",
    contact: "Jack",
    additional_info: "you can sell merch",
    equipment: [
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
    ],
    set_length: "3 Hours (2 Sets of 60mins + 60min break) ",
    sound_check_time: "7:30pm",
    perks: "Meal and Drinks Included",
  },
  {
    id: 3,
    name: "Satellite Lounge",
    location: "789 Orbit Ave",
    genre: "Electronic, DJ",
    payRange: "$500–$700",
    payMin: 500,
    payMax: 700,
    date: "Sat, Oct 21 @ 10pm–2am",
    dateObj: new Date(2023, 9, 21, 22),
    imageUrl: "https://ressources.sat.qc.ca/uploads/2024/07/cafesat64-_web.jpg",
    rating: 4,
    audience: 200,
    type: "Club",
    contact: "Jona",
    additional_info: "you can sell merch",
    equipment: [
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
      {
        id: 1,
        equipment: "microphone",
        quantity: "1",
      },
    ],
    set_length: "4 Hours (2 Sets of 120mins + 60min break) ",
    sound_check_time: "8:30pm",
    perks: "Meal and Drinks Included",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [venues] = useState(venueData);
  const [activeHero, setActiveHero] = useState<keyof typeof heroContent>("artists");
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number>(0);

  const toggleHero = () => {
    setActiveHero(prev => prev === "artists" ? "venues" : "artists");
    setProgress(0);
  };

  const heroContent = {
    artists: {
      title: "WHERE DREAMS FIND STAGES",
      subtitle: "Gigs near you, booked in minutes",
      image: "src/assets/hero-performer.png",
      alt: "Artist performing"
    },
    venues: {
      title: "WHERE STAGES FIND TALENT",
      subtitle: "Find the perfect performers for your venue",
      image: "src/assets/hero-venue.png", 
      alt: "Venue stage"
    }
  };

  useEffect(() => {
      localStorage.setItem("venues",JSON.stringify(venueData));

      intervalRef.current = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            toggleHero();
            return 0;
          }
          return prev + (100 / (15 * 10));
        });
      }, 100);
    
      return () => {
        window.clearInterval(intervalRef.current);
      };
    }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between lg:justify-evenly items-center px-10 py-20 gap-10">
        <div className="max-w-xl justify-center">
          <h1 className="text-center">{heroContent[activeHero].title}</h1>
          <h3 className="text-center pt-4">{heroContent[activeHero].subtitle}</h3>
          <div className="flex justify-center pt-4 space-x-8">
            <img onClick={() => {toggleHero()}} className="cursor-pointer" src="src/assets/play-arrow.svg" alt="" />
            <Button
              variant="default"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </Button>
            <img
              src="src/assets/play-arrow.svg"
              alt=""
              className="-scale-x-100 cursor-pointer"
              onClick={() => {toggleHero()}}
            />
          </div>

          <p className="mt-2 text-sm underline cursor-pointer text-center pt-4">
            Create an account
          </p>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src={heroContent[activeHero].image}
            alt={heroContent[activeHero].alt}
            className="w-full md:h-full md:w-full lg:h-150 lg:w-150 object-cover rounded-xl"
          />

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-8">
            <div 
              className="background-accent h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
        
         
        </div>
      </section>

      <section className="px-6 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          EVERY CORNER DESERVES A SOUNDTRACK. <br />
          BECAUSE LIVE MUSIC MAKES EVERYTHING BETTER.
        </h2>
        <h3 className="mt-8">Discover Venues:</h3>
      </section>
      <section className="flex flex-wrap justify-evenly px-2 pb-20">
        {venues.map((venue) => (
          <VenueCard
            id={venue.id}
            key={venue.id}
            name={venue.name}
            location={venue.location}
            genre={venue.genre}
            payRange={venue.payRange}
            date={venue.date}
            dateObj={venue.dateObj}
            imageUrl={venue.imageUrl}
            rating={venue.rating}
            audience={venue.audience}
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
      </section>

      <section className="text-center pb-20">
        <Button 
          variant="default"
          className="text-lg"
          onClick={() => {navigate("/discover")}}
        >
          Discover More Venues
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
};

export default Home;
