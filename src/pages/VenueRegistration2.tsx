import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FormSelect } from "@/components/form/FormSelect";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { saveUser, saveVenue } from "@/lib/storage";

const Venues = ["Café", "Restaurant", "Bar/Lounge", "Other"];

export default function VenueRegistration2() {
  const [formData, setFormData] = useState({
    businessName: "",
    seating: "",
    address: "",
    notes: "",
    venues: "",
    genre: "",
    date: "",
    description: "",
  });

  const [ownerData, setOwnerData] = useState<{
    email: string;
    ownerName: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    const partialData = JSON.parse(
      localStorage.getItem("venue-partial") || "{}"
    );
    if (partialData.email) {
      setOwnerData(partialData);
    }
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ownerData?.email) {
      alert("Missing initial registration info.");
      return;
    }
    const newVenue = {
      name: formData.businessName,
      email: ownerData.email,
      type: formData.venues,
      capacity: parseInt(formData.seating),
      description: formData.description,
      address: formData.address,
    };
    const savedVenue = saveVenue(newVenue);
    saveUser({
      email: ownerData.email,
      name: ownerData.ownerName,
      password: ownerData.password,
      venues: [savedVenue],
      role: "venueOwner",
    });
    localStorage.setItem("activeVenueId", savedVenue.id);
    localStorage.removeItem("venue-partial");
    window.location.href = "/venue/profile";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-8 md:p-12 lg:p-16 w-full min-h-screen"
    >
      <div className="w-full max-w-xl space-y-6">
        <p>Please register by completing the information below</p>
        <FormInput
          label="Business Name"
          type="string"
          placeholder="e.g. Cool Band"
          required={true}
          value={formData.businessName}
          onChange={(e) => handleChange("businessName", e.target.value)}
        />

        <FormSelect
          label="Venue Type"
          options={Venues}
          value={formData.venues}
          required={true}
          onValueChange={(value) => handleChange("venues", value)}
        />

        <div className="grid grid-cols-1 gap-6">
          <FormInput
            label="Venue Capacity"
            type="number"
            placeholder="e.g. 500"
            required={true}
            value={formData.seating}
            onChange={(e) => handleChange("seating", e.target.value)}
          />
          <FormTextArea
            label="Short Description"
            placeholder="e.g. - Small cozy café!"
            value={formData.description}
            required={false}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <FormCheckbox
          label="I agree to TinyMics’ terms and service and Privacy Policy"
          required
        />
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            type="button"
            className="w-full sm:w-auto flex-1"
            onClick={() => (window.location.href = "/register/venue")}
          >
            Back
          </Button>
          <Button type="submit" className="w-full sm:w-auto flex-1">
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
