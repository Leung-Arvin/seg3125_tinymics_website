import type { row } from "@/components/form/List";

export type EventData = {
  id: any;
  eventName?: string;
  location?: string;
  payMin?: number;
  payMax?: number;
  contact?: string;
  imageUrl?: string;
  date?: Date;
  time: string;
  genre: string;
  payout: string;
  seating: number;
  setLength: string;
  perks: string;
  notes: string;
  equipment?: {
    id: number;
    equipment: string;
    quantity: string;
  }[];
  venueId: number | string;
  sound_check_time?: string;
};

export type VenueData = {
  id: string;
  name: string;
  email: string;
  address: string;
  description?: string;
};

type ArtistData = {
  id: string;
  name: string;
  email: string;
};
// artist
export const saveArtist = (artistData: Omit<ArtistData, "id">) => {
  const artists = getArtists();
  const newArtist = {
    ...artistData,
    id: `${artistData.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
  };
  localStorage.setItem("artists", JSON.stringify([...artists, newArtist]));
  return newArtist;
};

export const getArtists = (): EventData[] => {
  const data = localStorage.getItem("artists");
  return data ? JSON.parse(data) : [];
};

export const deleteArtist = (id: string) => {
  const artists = getArtists().filter((artist) => artist.id !== id);
  localStorage.setItem("artists", JSON.stringify(artists));
};

// event
export const saveEvent = (eventData: Omit<EventData, "id">) => {
  const events = getEvents();
  const newEvent = {
    ...eventData,
    id: Date.now.toString(),
  };
  localStorage.setItem("events", JSON.stringify([...events, newEvent]));
  return newEvent;
};

export const getEvents = (): EventData[] => {
  const data = localStorage.getItem("events");
  return data ? JSON.parse(data) : [];
};

export const deleteEvent = (id: string) => {
  const events = getEvents().filter((event) => event.id !== id);
  localStorage.setItem("events", JSON.stringify(events));
};

// venue
export const saveVenue = (venueData: Omit<VenueData, "id">) => {
  const venues = getVenues();
  const newVenue: VenueData = {
    ...venueData,
    id: `${venueData.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
  };
  localStorage.setItem("venues", JSON.stringify([...venues, newVenue]));
  return newVenue;
};

export const getVenues = (): VenueData[] => {
  const data = localStorage.getItem("venues");
  return data ? JSON.parse(data) : [];
};

export const deleteVenue = (id: string) => {
  const venues = getVenues().filter((venue) => venue.id !== id);
  localStorage.setItem("venues", JSON.stringify(venues));
};
