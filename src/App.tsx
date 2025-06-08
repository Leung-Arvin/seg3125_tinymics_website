// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import Discover from "./pages/Discover";
import ArtistApplicationForm from "./pages/ArtistApplicationForm";
import VenueDetail from "./pages/VenueDetail";
import ArtistBookingConfirmation from "./pages/ArtistBookingConfirmation";
import ArtistApplicationDialog from "./pages/ArtistApplicationDialog";
import Login from "./pages/Login";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-form" element={<EventForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
      <Route
        path="/artist-application-form"
        element={<ArtistApplicationForm />}
      />
      \
      <Route path="/venue-details" element={<VenueDetail />} />
      <Route
        path="/artist-booking-confirmation"
        element={<ArtistBookingConfirmation />}
      />
      <Route
        path="/artist-application-dialog"
        element={<ArtistApplicationDialog />}
      />
    </Routes>
  );
};

export default App;
