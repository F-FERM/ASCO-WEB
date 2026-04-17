  "use client";

  import Container from "@/components/Container";
  import { useState, useRef } from "react";
  import Swal from "sweetalert2";
  import { FaArrowRight, FaTimes } from "react-icons/fa";

  interface Job {
    id: number;
    title: string;
    description: string;
  }

  export default function CareerContentSection() {
    const [openJobId, setOpenJobId] = useState<number | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const jobs: Job[] = [
      {
        id: 1,
        title: "Software Developer",
        description:
          "We are looking for a skilled and motivated Software Engineer to design, develop, and maintain high-quality software solutions.",
      },
      {
        id: 2,
        title: "Electronic Engineer",
        description:
          "Responsible for designing, testing, and maintaining electronic systems.",
      },
    ];

    const toggleJob = (id: number) => {
      if (openJobId === id) {
        setOpenJobId(null);
      } else {
        setOpenJobId(id);
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };

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
      if (openJobId) formData.append("jobId", openJobId.toString());

      try {
        setLoading(true);

        Swal.fire({
          title: "Uploading...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
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
            title: "Applied!",
            text: "Your application has been submitted",
          });

          setFile(null);
          setOpenJobId(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: data.error || "Something went wrong",
          });
        }
      } catch (err) {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Try again.",
        });
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    return (
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-[900px] mx-auto space-y-4">
            {jobs.map((job) => {
              const isOpen = openJobId === job.id;

              return (
                <div key={job.id}>
                  {/* HEADER */}
                  <div className="flex items-center justify-between bg-white shadow-md rounded-full px-5 py-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#E6D400] rounded-full" />
                      <p className="text-sm md:text-base text-black font-medium">
                        {job.title}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleJob(job.id)}
                      className="bg-[#E6D400] text-black text-sm px-4 py-1.5 rounded-full flex items-center gap-2"
                    >
                      Apply Now <FaArrowRight className="text-xs" />
                    </button>
                  </div>

                  {/* EXPANDABLE */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[900px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-[22px] border border-gray-200 p-6 md:p-8 grid md:grid-cols-2 gap-8 relative ">
                      {/* CLOSE */}
                      <button
                        onClick={() => setOpenJobId(null)}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                      >
                        <FaTimes className="text-xs text-red-500" />
                      </button>

                      {/* LEFT */}
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Job Description
                        </h3>

                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {job.description}
                        </p>

                        <h4 className="mt-5 font-semibold text-black">
                          Key Responsibilities
                        </h4>

                        <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc pl-4">
                          <li>Design, develop, and maintain software</li>
                          <li>Write clean, efficient code</li>
                          <li>Collaborate with teams</li>
                        </ul>

                        <h4 className="mt-5 font-semibold text-black">
                          Requirements
                        </h4>

                        <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc pl-4">
                          <li>Bachelor’s degree</li>
                          <li>Strong programming knowledge</li>
                          <li>Framework experience</li>
                        </ul>
                      </div>

                      {/* RIGHT */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-700">
                            Your Name*
                          </label>
                          <input
                            type="text"
                            placeholder="Your Name..."
                            className="mt-1 w-full border border-gray-200 rounded-[10px] px-4 py-2 text-sm outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <label className="text-sm text-gray-700">
                            Your Email*
                          </label>
                          <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="mt-1 w-full border border-gray-200 rounded-[10px] px-4 py-2 text-sm outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <label className="text-sm text-gray-700">
                            Upload Your CV
                          </label>

                          <div className="mt-2 border border-gray-200 rounded-full px-4 py-2 bg-white">
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) =>
                                setFile(e.target.files?.[0] || null)
                              }
                              className="w-full text-sm"
                            />
                          </div>

                          {file && (
                            <p className="text-xs text-gray-500 mt-1">
                              {file.name}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={handleUpload}
                          disabled={loading}
                          className="w-full bg-[#E6D400] text-black rounded-[10px] py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                        >
                          {loading ? "Applying..." : "Apply"}
                          <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
