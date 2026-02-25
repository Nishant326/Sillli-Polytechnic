import React, { useState } from "react";
import { Calendar, FileText, Send, FileUp } from "lucide-react";
import axios from "axios";

const CreateSyllabus = () => {
  const [syllabus, setSyllabus] = useState({
    title: "",
    semester: "",
    year: "",
    branch: "",
    pdf: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSyllabus({ ...syllabus, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file 📄");
      return;
    }
    setSyllabus({ ...syllabus, pdf: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!syllabus.pdf) {
      alert("Please upload a PDF file before submitting.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", syllabus.title);
    formData.append("semester", syllabus.semester);
    formData.append("year", syllabus.year);
    formData.append("branch", syllabus.branch);
    formData.append("pdf", syllabus.pdf); // ✅ UNCOMMENTED

    try {
      await axios.post("http://localhost:3000/syllabus", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // ✅ ADDED
        },
      });
      alert("✅ Syllabus created successfully!");
      setSyllabus({ title: "", semester: "", year: "", branch: "", pdf: null });
      document.getElementById("pdfInput").value = "";
    } catch (error) {
      console.error(error);
      alert(`❌ Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Create New Syllabus
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Syllabus Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter syllabus title"
              value={syllabus.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Branch Selection */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Select Branch
            </label>
            <select
              name="branch"
              value={syllabus.branch}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="">-- Select Branch --</option>
              <option value="COMPUTER SCIENCE ENGINEERING">
                COMPUTER SCIENCE ENGINEERING
              </option>
              <option value="MECHANICAL ENGINEERING">
                MECHANICAL ENGINEERING
              </option>
              <option value="ELECTRICAL ENGINEERING">
                ELECTRICAL ENGINEERING
              </option>
              <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
              <option value="ELECTRICAL AND COMMUNICATION ENGINEERING">
                ELECTRICAL AND COMMUNICATION ENGINEERING
              </option>
            </select>
          </div>

          {/* Semester */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Semester
            </label>
            <input
              type="number"
              name="semester"
              placeholder="Enter semester (1-8)"
              value={syllabus.semester}
              onChange={handleChange}
              required
              min="1"
              max="8"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
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
              value={syllabus.year}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-blue-600" /> Upload Syllabus PDF
            </label>
            <input
              id="pdfInput"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500"
            />
            {syllabus.pdf && (
              <p className="mt-2 text-sm text-green-600">
                Uploaded: {syllabus.pdf.name}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-400"
          >
            <Send className="w-5 h-5" />
            {loading ? "Creating..." : "Create Syllabus"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSyllabus;