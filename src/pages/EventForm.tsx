import { Button } from "@/components/ui/button";
import { List, type row } from "@/components/form/List";
import { useState } from "react";
import { FormSelect } from "@/components/form/FormSelect";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { FormDateTimePicker } from "@/components/form/FormDateTimePicker";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { getEvents, saveEvent, type EventData } from "@/lib/storage";
import { useNavigate } from "react-router-dom";

const Genre = ["Acoustic", "Jazz", "DJs", "Rock", "Classical"];

export default function EventForm() {
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState<row[]>([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    eventName: "",
    location: "",
    payout: "",
    payMin: "",
    payMax: "",
    seating: "",
    setLength: "",
    perks: "",
    notes: "",
    genre: "",
    imageUrl: "",
    contact: "",
    soundCheck: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const activeVenueId = localStorage.getItem("activeVenueId");
    if (!activeVenueId) {
      alert("No active venue found. Please log in again.");
      return;
    }

    if (!date || !time) {
      alert("Please select both date and time.");
      return;
    }

    const mappedEquipment = equipment.map((item) => ({
      id: item.id,
      equipment: item.col1,
      quantity: item.col2,
    }));

    const newEvent: Omit<EventData, "id"> = {
      venueId: activeVenueId,
      eventName: formData.eventName,
      location: formData.location,
      genre: formData.genre,
      payout: formData.payout,
      payMin: Number(formData.payMin) || 0,
      payMax: Number(formData.payMax) || 0,
      date,
      time,
      seating: Number(formData.seating) || 0,
      setLength: formData.setLength,
      perks: formData.perks,
      notes: formData.notes,
      equipment: mappedEquipment,
      contact: formData.contact,
      imageUrl: formData.imageUrl || "default.jpg",
      sound_check_time: formData.soundCheck,
    };

    saveEvent(newEvent);

    localStorage.removeItem("selectedVenue");
    navigate("/venue/profile");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-8 md:p-12 lg:p-16 w-full min-h-screen"
    >
      <div className="w-full max-w-xl space-y-6">
        <h2 className="text-white font-bold text-4xl mb-8">Create an Event</h2>

        <FormInput
          label="Event Name"
          type="text"
          required
          value={formData.eventName}
          onChange={(e) => handleChange("eventName", e.target.value)}
        />

        <FormInput
          label="Location"
          type="text"
          required
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />

        <FormDateTimePicker
          label="Event Date & Time"
          required={true}
          time={time}
          date={date}
          onDateChange={setDate}
          onTimeChange={setTime}
        />

        <FormSelect
          label="Preferred Genre"
          options={Genre}
          value={formData.genre}
          required={true}
          onValueChange={(value) => handleChange("genre", value)}
        />

        <FormInput
          label="Payout"
          type="text"
          placeholder="e.g. 500"
          required={true}
          value={formData.payout}
          onChange={(e) => handleChange("payout", e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Pay Min"
            type="number"
            value={formData.payMin}
            onChange={(e) => handleChange("payMin", e.target.value)}
          />
          <FormInput
            label="Pay Max"
            type="number"
            value={formData.payMax}
            onChange={(e) => handleChange("payMax", e.target.value)}
          />
        </div>

        <FormInput
          label="Seating Capacity"
          type="number"
          placeholder="e.g. 100"
          required={true}
          value={formData.seating}
          onChange={(e) => handleChange("seating", e.target.value)}
        />

        <FormInput
          label="Set Length"
          type="text"
          placeholder="e.g. 2 hours and 25 mins"
          required={true}
          value={formData.setLength}
          onChange={(e) => handleChange("setLength", e.target.value)}
        />

        <FormInput
          label="Sound Check Time"
          type="text"
          placeholder="e.g. 5:00 PM"
          value={formData.soundCheck}
          onChange={(e) => handleChange("soundCheck", e.target.value)}
        />

        <FormInput
          label="Perks"
          type="text"
          placeholder="e.g. Free food"
          value={formData.perks}
          onChange={(e) => handleChange("perks", e.target.value)}
        />

        <FormInput
          label="Contact Email"
          type="email"
          required
          value={formData.contact}
          onChange={(e) => handleChange("contact", e.target.value)}
        />

        <FormInput
          label="Image URL (optional)"
          type="text"
          value={formData.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
        />

        <FormTextArea
          label="Additional Artist Notes"
          placeholder="e.g. You can sell your own merch!"
          value={formData.notes}
          required={true}
          onChange={(e) => handleChange("notes", e.target.value)}
        />

        <List
          column1Header="Equipment"
          column2Header="Quantity"
          column1Placeholder="e.g., Microphone"
          column2Placeholder="e.g., 2"
          addButtonText="Add Equipment"
          emptyItemName="equipment"
          initialData={equipment}
          onDataChange={setEquipment}
          label="Equipment List"
        />

        <FormCheckbox
          label="I agree to TinyMics’ terms and service and Privacy Policy"
          required
        />

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button type="submit" className="w-full sm:w-auto flex-1">
            Create Event
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto flex-1"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
