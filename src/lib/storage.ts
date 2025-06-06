import type { row } from "@/components/form/List";

type EventData = {
  id: string;
  date?: Date;
  time: string;
  genre: string;
  payout: string;
  seating: string;
  setLength: string;
  perks: string;
  notes: string;
  equipment: row[];
}

export const saveEvent = (eventData: Omit<EventData, 'id'>) => {
  const events = getEvents();
  const newEvent = {
    ...eventData,
    id: Date.now.toString(),
  };
  localStorage.setItem('events', JSON.stringify([...events, newEvent]));
  return newEvent;
}

export const getEvents = (): EventData[] => {
  const data = localStorage.getItem('events');
  return data ? JSON.parse(data) : [];
}

export const deleteEvent = (id: string) => {
  const events = getEvents().filter(event => event.id !== id);
  localStorage.setItem('events', JSON.stringify(events));
}