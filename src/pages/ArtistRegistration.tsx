import { useState } from "react";
import { FormInput } from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

export default function ArtistRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    artistName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Artist registration data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-32 py-12 gap-12">
      <div className="w-full md:w-1/2 text-left">
        <h2 className="w-2/3 font-bold text-4xl leading-tight">
          Register as an artist
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
        <p>Please register by completing the information below:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Business Email"
            type="email"
            placeholder="e.g. venue@example.com"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <FormInput
            label="Artist/Band name"
            type="text"
            placeholder="e.g. Jane Doe"
            required
            value={formData.artistName}
            onChange={(e) => handleChange("artistName", e.target.value)}
          />
        </div>

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter password"
          required
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Re-enter password"
          required
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />

        <Button type="submit" className="w-full sm:w-auto mt-6">
          Next
        </Button>
      </form>
    </div>
  );
}
