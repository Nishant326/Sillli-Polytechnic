import React, { useState } from "react";
import { Calendar, FileText, Send, FileUp } from "lucide-react";

const CreateNotice = () => {
  const [notice, setNotice] = useState({
    title: "",
    description: "",
    date: "",
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file 📄");
      return;
    }
    setNotice({ ...notice, pdf: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notice.pdf) {
      alert("Please upload a PDF file before submitting.");
      return;
    }

    // You can send data using FormData for backend upload
    const formData = new FormData();
    formData.append("title", notice.title);
    formData.append("description", notice.description);
    formData.append("date", notice.date);
    formData.append("pdf", notice.pdf);

    console.log("Notice created:", notice);
    alert("✅ Notice created successfully with PDF!");

    // Later: connect with backend using fetch/axios
    // Example:
    // fetch("/api/notices", { method: "POST", body: formData })

    setNotice({ title: "", description: "", date: "", pdf: null });
    document.getElementById("pdfInput").value = "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Create New Notice
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Notice Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Notice Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter notice title"
              value={notice.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Notice Description */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter notice details..."
              value={notice.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Notice Date
            </label>
            <input
              type="date"
              name="date"
              value={notice.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-blue-600" /> Upload Notice PDF
            </label>
            <input
              id="pdfInput"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500"
            />
            {notice.pdf && (
              <p className="mt-2 text-sm text-green-600">
                Uploaded: {notice.pdf.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Create Notice
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNotice;
