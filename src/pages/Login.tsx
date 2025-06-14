import { useState } from "react";
import { FormInput } from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { getArtists, getUsers } from "@/lib/storage";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = getUsers();
    const artists = getArtists();

    const venueMatch = users.find(
      (v) =>
        v.email === formData.email && v.password === formData.password && v.role == "venueOwner"
    );

    const artistMatch = artists.find(
      (a) =>
        a.email === formData.email && a.password === formData.password
    );

    if (venueMatch) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...venueMatch, type: "venue" })
      );
      window.location.href = "/";
    } else if (artistMatch) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...artistMatch, type: "artist" })
      );
      window.location.href = "/discover";
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-32 py-12 gap-12">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="w-2/3 font-bold text-4xl leading-tight">
            Welcome back to TinyMics!
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
          <p>
            Please log into your account by completing the information below:
          </p>

          <div className="flex flex-col gap-4 w-full">
            <FormInput
              label="Email"
              type="email"
              placeholder="e.g. venue@example.com"
              required={true}
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <FormInput
              label="Password"
              type="password"
              placeholder="Enter password"
              required={true}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              type="button"
              className="w-full sm:w-auto flex-1"
              onClick={() => (window.location.href = "/")}
            >
              Back
            </Button>
            <Button type="submit" className="w-full sm:w-auto flex-1">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
