import Navbar from "@/components/ui/navbar";
import VenueCard from "@/components/ui/venueCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 py-20 gap-10">
        <div className="max-w-xl justify-center">
          <h1 className="text-center">WHERE DREAMS FIND STAGES</h1>
          <h3 className="text-center pt-4">Gigs near you, booked in minutes</h3>
          <div className="flex justify-center pt-4 space-x-8">
            <img src="src/assets/play-arrow.svg" alt="" />
            <Button
              variant="default"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </Button>
            <img
              src="src/assets/play-arrow.svg"
              alt=""
              className="-scale-x-100"
            />
          </div>

          <p className="mt-2 text-sm underline cursor-pointer text-center pt-4">
            Create an account
          </p>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src="src/assets/hero-performer.png"
            alt="Artist performing"
            className="w-full max-w-[520px] h-auto object-cover rounded-xl"
          />

          <img
            src="src/assets/scrollBar.svg"
            className="w-[550px] pt-8"
            alt=""
          />
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          EVERY CORNER DESERVES A SOUNDTRACK. <br />
          BECAUSE LIVE MUSIC MAKES EVERYTHING BETTER.
        </h2>
        <h3 className="mt-8">Discover Venues:</h3>
      </section>
      {/* Venue Cards */}
      <section className="flex flex-wrap justify-evenly px-2 pb-20">
        <VenueCard
          name="The Blue Note Café"
          location="123 Jazz Lane"
          genre="Jazz, Folk, Acoustic"
          payRange="$300–$500 (plus bar tips)"
          date="Sat, Oct 21 @ 8–11pm"
          imageUrl="https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2023/08/cafe23.jpg"
          rating={5}
          audience={108}
        />
        <VenueCard
          name="The Rusty Keg"
          location="123 Jazz Lane"
          genre="Jazz, Folk, Acoustic"
          payRange="$300–$500 (plus bar tips)"
          date="Sat, Oct 21 @ 8–11pm"
          imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a0/63/35/goose-island-brewhouse.jpg?w=600&h=-1&s=1"
          rating={5}
          audience={108}
        />
        <VenueCard
          name="The Blue Note Café"
          location="123 Jazz Lane"
          genre="Jazz, Folk, Acoustic"
          payRange="$300–$500 (plus bar tips)"
          date="Sat, Oct 21 @ 8–11pm"
          imageUrl="https://ressources.sat.qc.ca/uploads/2024/07/cafesat64-_web.jpg"
          rating={5}
          audience={108}
        />
      </section>
    </div>
  );
};

export default Home;
