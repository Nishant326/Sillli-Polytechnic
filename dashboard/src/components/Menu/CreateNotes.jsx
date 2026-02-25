import React, { useState } from "react";
import { Calendar, FileText, Send, FileUp } from "lucide-react";
import axios from "axios";
const CreateNotes = () => {
  const [notes, setNotes] = useState({
    title: "",
    semester: "",
    branch: "",
    subject: "",
    pdf: null,
    unit:"",
  });
 const branches = [
    { code: "CSE", name: "COMPUTER SCIENCE ENGINEERING" },
    { code: "ECE", name: "ELECTRONIC AND COMMUNICATION ENGINEERING" },
    { code: "EEE", name: "ELECTRICAL  ENGINEERING" },
    { code: "ME", name: "MECHANICAL ENGINEERING" },
    { code: "CE", name: "CIVIL ENGINEERING" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file 📄");
      return;
    }
    setNotes({ ...notes, pdf: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!notes.pdf) {
      alert("Please upload a PDF file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("title", notes.title);
    formData.append("subject", notes.subject); // ✅ FIX
    formData.append("semester", notes.semester);
    formData.append("branch", notes.branch);
    formData.append("pdf", notes.pdf);
    formData.append("unit", notes.unit);

    try {
      await axios.post("http://localhost:3000/notes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Notes created successfully with PDF!");

      setNotes({
        title: "",
        semester: "",
        branch: "",
        subject: "",
        pdf: null,
        unit:"",
      });
      document.getElementById("pdfInput").value = "";
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Failed to create notes");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Create New Notes
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Notes Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter notes title"
              value={notes.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Semester
            </label>
            <textarea
              type="number"
              name="semester"
              placeholder="Enter Semester detals..."
              value={notes.semester}
              onChange={handleChange}
              required
              rows="1"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* branch */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Branch
            </label>
            <select name="branch"
              value={notes.branch}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch.code} value={branch.code}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={notes.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

            <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Unit
            </label>
            <textarea
              type="number"
              name="unit"
              placeholder="Enter Unit details..."
              value={notes.unit}
              onChange={handleChange}
              required
              rows="1"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-blue-600" /> Upload Notes PDF
            </label>
            <input
              id="pdfInput"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500"
            />
            {notes.pdf && (
              <p className="mt-2 text-sm text-green-600">
                Uploaded: {notes.pdf.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Create Notes
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNotes;
