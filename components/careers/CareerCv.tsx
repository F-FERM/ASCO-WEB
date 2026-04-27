"use client";

import React, { useState, useRef } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import api from "@/lib/axios";

const CareerCv = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ================= OPEN / CLOSE =================
  const openModal = () => {
    setShowModal(true);
    setFile(null);
    setName("");
    setEmail("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    if (!file) {
      return Swal.fire("No file selected", "Upload your CV", "warning");
    }

    if (!name || !email) {
      return Swal.fire("Missing fields", "Enter name & email", "warning");
    }

    try {
      setLoading(true);

      Swal.fire({
        title: "Submitting...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      // STEP 1: Upload file
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const cvUrl = uploadRes.data.url;

      // STEP 2: Send application (generic CV)
      await api.post("/job-applications", {
        name,
        email,
        cvUrl,
      });

      Swal.close();

      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Your CV has been sent successfully",
      });

      closeModal();
    } catch (err) {
      Swal.close();
      Swal.fire("Error", "Something went wrong", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 flex justify-center md:justify-end lg:justify-end px-6 lg:px-170">
      {/* ================= BUTTON ================= */}
      <button
        onClick={openModal}
        className="bg-[#E6D400] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition"
      >
        Apply Now <FaArrowRight className="text-xs" />
      </button>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-full max-w-md rounded-[20px] p-6 relative shadow-xl">
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <FaTimes className="text-red-500 text-xs" />
            </button>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-black">
              Apply with your CV
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Fill in your details and upload your CV
            </p>

            {/* FORM */}
            <div className="mt-5 space-y-4">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-700">Your Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border border-gray-200 rounded-[10px] px-4 py-2 text-sm outline-none focus:border-black"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-700">Your Email*</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-gray-200 rounded-[10px] px-4 py-2 text-sm outline-none focus:border-black"
                />
              </div>

              {/* FILE */}
              <div>
                <label className="text-sm text-gray-700">Upload CV</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="mt-2 w-full text-sm"
                />

                {file && (
                  <p className="text-xs text-gray-500 mt-1">{file.name}</p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-[#E6D400] text-black rounded-[10px] py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                {loading ? "Submitting..." : "Submit Application"}
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCv;
