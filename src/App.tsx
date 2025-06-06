// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import CreateAccount from "./pages/CreateAccount";
import VenueRegistration from "./pages/VenueRegistration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-form" element={<EventForm />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/register/venue" element={<VenueRegistration />} />
    </Routes>
  );
};

export default App;
