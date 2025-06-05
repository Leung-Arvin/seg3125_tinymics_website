import { Button } from "@/components/ui/button";
import { List, type row } from "@/components/form/List";
import { useState } from "react";
import { FormSelect } from "@/components/form/FormSelect";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { FormDateTimePicker } from "@/components/form/FormDateTimePicker";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { getEvents, saveEvent } from "@/lib/storage";

const Genre = ["Acoustic", "Jazz", "DJs", "Rock", "Classical"];

export default function EventForm() {
  const [equipment, setEquipment] = useState<row[]>([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    payout: "",
    seating: "",
    setLength: "",
    perks: "",
    notes: "",
    genre: "",
    date:"",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const completeFormData = {
      ...formData,
      time,
      equipment,
      date
    };

    saveEvent(completeFormData)

    console.log("Form Data:", getEvents());
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-8 md:p-12 lg:p-16 w-full min-h-screen">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-white font-bold text-4xl mb-8">Create an Event</h1>

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

        <div className="grid grid-cols-1 gap-6">
          <FormInput
            label="Payout"
            type="number"
            placeholder="e.g. 500"
            required={true}
            value={formData.payout}
            onChange={(e) => handleChange("payout", e.target.value)}
          />
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
            label="Perks"
            type="text"
            placeholder="e.g. Free food"
            value={formData.perks}
            onChange={(e) => handleChange("perks", e.target.value)}
          />
        </div>

        <FormTextArea
          label="Additional Artist Notes"
          placeholder="e.g. - you can sell your own merch!"
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

        <FormCheckbox label="I agree to TinyMics’ terms and service and Privacy Policy" required/>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button type="submit" className="w-full sm:w-auto flex-1">Create Event</Button>
          <Button variant="outline" className="w-full sm:w-auto flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
