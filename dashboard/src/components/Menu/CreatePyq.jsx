import React, { useState } from "react";
import {
  FileText,
  Send,
  FileUp,
  Calendar,
  Book,
  GitBranch,
  Clock,
} from "lucide-react";
import axios from "axios";

const CreatePYQ = () => {
  const [pyq, setPyq] = useState({
    title: "",
    subject: "",
    semester: "",
    branch: "",
    session_year: "",
    year: "",
    pdf: null,
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
    setPyq({ ...pyq, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file 📄");
      return;
    }
    setPyq({ ...pyq, pdf: file });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pyq.pdf) {
      alert("Please upload a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("title", pyq.title);
    formData.append("subject", pyq.subject);
    formData.append("semester", pyq.semester);
    formData.append("branch", pyq.branch);
    formData.append("session_year", pyq.session_year);
    formData.append("year", pyq.year);
    formData.append("pdf", pyq.pdf);

    try {
      await axios.post("http://localhost:3000/pyq", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },      
      });

      alert("✅ PYQ uploaded successfully");

      setPyq({
        title: "",
        subject: "",
        semester: "",
        branch: "",
        session_year: "",
        year: "",
        pdf: null,
      });

      document.getElementById("pdfInputPYQ").value = "";
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Failed to upload PYQ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-purple-600" />
          Upload PYQ (Previous Year Question)
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. End Sem Exam Papers"
              value={pyq.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <Book className="w-4 h-4 text-gray-500" /> Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject Name"
              value={pyq.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Semester */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Semester
              </label>
              <input
                type="number"
                name="semester"
                placeholder="e.g. 5th"
                value={pyq.semester}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Branch */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-gray-500" /> Branch
              </label>
              <select name="branch" id="branch" value={pyq.branch} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none">
                <option value="">-- Choose Branch --</option>
                {branches.map((b) => (
                  <option key={b.code} value={b.code}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Session Year */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" /> Session Year
              </label>
              <input
                type="number"
                name="session_year"
                placeholder="e.g. 2023-2024"
                value={pyq.session_year}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" /> Year
              </label>
              <input
                type="number"
                name="year"
                placeholder="e.g. 3rd Year"
                value={pyq.year}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-purple-600" /> Upload Question
              Paper PDF
            </label>
            <input
              id="pdfInputPYQ"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus:ring-2 focus:ring-purple-500"
            />
            {pyq.pdf && (
              <p className="mt-2 text-sm text-green-600">
                Uploaded: {pyq.pdf.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Upload PYQ
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePYQ;
