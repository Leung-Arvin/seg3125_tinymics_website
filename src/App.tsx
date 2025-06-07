// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import CreateAccount from "./pages/CreateAccount";
import VenueRegistration from "./pages/VenueRegistration";
import ArtistRegistration from "./pages/ArtistRegistration";
import VenueRegistration2 from "./pages/VenueRegistration2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-form" element={<EventForm />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/register/venue" element={<VenueRegistration />} />
      <Route
        path="/register/venue-continued"
        element={<VenueRegistration2 />}
      />
      <Route path="/register/artist" element={<ArtistRegistration />} />
    </Routes>
  );
};

export default App;
