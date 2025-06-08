import React, { useState, ChangeEvent } from "react";

type PictureUploadFormProps = {
  onPictureSelect: (file: File | null) => void;
  initialImageUrl?: string;
};

const PictureUploadForm: React.FC<PictureUploadFormProps> = ({
  onPictureSelect,
  initialImageUrl,
}) => {
  const [preview, setPreview] = useState<string | null>(
    initialImageUrl || null
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onPictureSelect(file);
    } else {
      setPreview(null);
      onPictureSelect(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-full border border-gray-300"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-2"
      />
    </div>
  );
};

export default PictureUploadForm;
