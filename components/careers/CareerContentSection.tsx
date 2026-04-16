"use client";

import Container from "@/components/Container";
import { useState, useRef } from "react";
import Swal from "sweetalert2";

export default function CareerContentSection() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "No file selected",
        text: "Please upload your CV",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      Swal.fire({
        title: "Uploading...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const res = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Uploaded!",
          text: "Your CV has been submitted successfully",
        });

        setFile(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: data.error || "Something went wrong",
        });
      }
    } catch (error) {
      Swal.close();

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Try again.",
      });

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-black">
              Why Work With Us
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-[500px]">
              ASCO’s 50 years of achievement has been driven by its people. We
              empower talent through trust, expertise, and continuous growth.
              Join us to push beyond limits and make a meaningful impact.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black text-center">
                Upload Your CV
              </h3>

              {/* FILE INPUT */}
              <div className="mt-6 flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="w-full text-sm text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-gray-100 file:text-sm file:cursor-pointer"
                />
              </div>

              {/* FILE NAME */}
              {file && (
                <p className="text-xs text-gray-500 mt-2">
                  Selected: {file.name}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleUpload}
                disabled={loading}
                className="mt-6 w-full bg-[#EFDF0E] text-black rounded-[8px] py-2.5 text-sm md:text-base font-medium hover:opacity-90 transition"
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
