import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen px-8 py-16 md:px-24 lg:px-40 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About TinyMics</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-primary">TinyMics</span>, we
          believe that
          <span className="font-semibold">
            {" "}
            every corner deserves a soundtrack
          </span>
          . We connect passionate small artists with local venues — from cozy
          cafés to neighborhood bars — making it easier than ever to book and be
          booked.
        </p>

        <section className="grid md:grid-cols-2 gap-10 text-left mb-16">
          <div className="bg-muted rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">🎤 For Artists</h2>
            <p>
              TinyMics helps emerging musicians find real, local performance
              opportunities. No more sending cold DMs or waiting months for a
              response. Get booked today.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">🏢 For Venues</h2>
            <p>
              Got a space that could use some sound? TinyMics lets venue owners
              browse and book performers who match their vibe, whether it's
              chill acoustic or high-energy rock. Fast, simple, no middlemen.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">🌱 Why We Started</h2>
            <p>
              We saw too many talented artists struggling to find gigs, and too
              many empty stages at local businesses. TinyMics was born to bridge
              that gap and grow a stronger, more vibrant local music scene.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">🌍 Our Mission</h2>
            <p>
              Empower communities through live music by making it easier for
              performers and venues to discover each other, connect, and
              collaborate. Simple tools, real impact.
            </p>
          </div>
        </section>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Ready to bring your stage or sound to life?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="default"
              onClick={() => navigate("/create-account")}
            >
              Create an Account
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Go Back Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
