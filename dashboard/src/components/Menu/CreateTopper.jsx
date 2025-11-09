import React, { useState } from "react";
import { Calendar, FileText, Send, FileUp } from "lucide-react";

const CreateTopper = () => {
  const [topper, setTopper] = useState({
    name: "",
    semester:"",
    year:"",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTopper({ ...topper, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a valid image file (JPEG or PNG) 📄");
      return;
    }
    setTopper({ ...topper, photo: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topper.photo) {
      alert("Please upload an image file before submitting.");
      return;
    }

    // You can send data using FormData for backend upload
    const formData = new FormData();
    formData.append("name", topper.name);
    formData.append("semester", topper.semester);
    formData.append("year", topper.year);
    formData.append("photo", topper.photo);

    console.log("Topper created:", topper);
    alert("✅ Topper created successfully with photo!");

    // Later: connect with backend using fetch/axios
    // Example:
    // fetch("/api/results", { method: "POST", body: formData })
    setTopper({ name: "", semester: "", year: "", photo: null });
    document.getElementById("photoInput").value = "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Set Topper
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Result Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Result Title
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter topper name"
              value={topper.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Result Description */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Semester
            </label>
            <textarea
              name="semester"
              placeholder="Enter semester details..."
              value={topper.semester}
              onChange={handleChange}
              required
              rows="1"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Year */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Year
            </label>
            <input
              type="text"
              name="year"
              placeholder="Enter year"
              value={topper.year}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-blue-600" /> Upload Topper Photo
            </label>
            <input
              id="photoInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500"
            />
            {topper.photo && (
              <p className="mt-2 text-sm text-green-600">
                Uploaded: {topper.photo.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Create Topper
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTopper;