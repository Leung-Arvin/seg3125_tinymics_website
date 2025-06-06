// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-form" element={<EventForm/>}/>
    </Routes>
  );
};

export default App;
