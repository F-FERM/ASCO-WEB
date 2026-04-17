"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import { Pencil, Trash2 } from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    isActive: true,
  });

  const [responsibilities, setResponsibilities] = useState<string[]>([""]);
  const [requirements, setRequirements] = useState<string[]>([""]);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch {
      Swal.fire("Error", "Failed to load jobs", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const openCreate = () => {
    setEditData(null);
    setForm({ title: "", description: "", isActive: true });
    setResponsibilities([""]);
    setRequirements([""]);
    setOpen(true);
  };

  const openEdit = (job: any) => {
    setEditData(job);
    setForm({
      title: job.title,
      description: job.description,
      isActive: job.isActive,
    });
    setResponsibilities(job.responsibilities || [""]);
    setRequirements(job.requirements || [""]);
    setOpen(true);
  };

  const handleChange = (index: number, value: string, type: "res" | "req") => {
    const list = type === "res" ? [...responsibilities] : [...requirements];
    list[index] = value;
    type === "res" ? setResponsibilities(list) : setRequirements(list);
  };

  const addField = (type: "res" | "req") => {
    type === "res"
      ? setResponsibilities([...responsibilities, ""])
      : setRequirements([...requirements, ""]);
  };

  const removeField = (index: number, type: "res" | "req") => {
    const list = type === "res" ? [...responsibilities] : [...requirements];
    list.splice(index, 1);
    type === "res" ? setResponsibilities(list) : setRequirements(list);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.description) {
      return Swal.fire("Missing fields", "", "warning");
    }

    const payload = {
      ...form,
      responsibilities: responsibilities.filter((i) => i.trim()),
      requirements: requirements.filter((i) => i.trim()),
    };

    try {
      if (editData) {
        await api.put(`/jobs/${editData._id}`, payload);
      } else {
        await api.post("/jobs", payload);
      }

      Swal.fire("Success", "Saved successfully", "success");
      setOpen(false);
      fetchJobs();
    } catch {
      Swal.fire("Error", "Save failed", "error");
    }
  };

  const deleteJob = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Delete this job?",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    await api.delete(`/jobs/${id}`);
    Swal.fire("Deleted", "", "success");
    fetchJobs();
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Jobs</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage job postings and openings
          </p>
        </div>

        <button
          onClick={openCreate}
          className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
        >
          + Create Job
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-10 flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">Loading jobs...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wide">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Position</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Created</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {jobs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-gray-500">
                      No jobs found
                    </td>
                  </tr>
                ) : (
                  jobs.map((job, i) => (
                    <tr
                      key={job._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-4 text-gray-500">{i + 1}</td>

                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">
                            {job.title}
                          </span>
                          <span className="text-xs text-gray-400 line-clamp-1">
                            {job.description}
                          </span>
                        </div>
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-medium ${
                            job.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {job.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td className="p-4 text-gray-500">
                        {new Date(job.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-right">
                        <div className="flex justify-end items-center gap-3">
                          {/* EDIT */}
                          <button
                            onClick={() => openEdit(job)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                            title="Edit Job"
                          >
                            <Pencil size={16} />
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() => deleteJob(job._id)}
                            className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition"
                            title="Delete Job"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800">
              {editData ? "Edit Job" : "Create Job"}
            </h2>

            <input
              placeholder="Job Title"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
              placeholder="Job Description"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            {/* RESPONSIBILITIES */}
            <div>
              <label className="font-medium text-gray-700">
                Responsibilities
              </label>

              {responsibilities.map((item, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <input
                    value={item}
                    onChange={(e) => handleChange(index, e.target.value, "res")}
                    className="flex-1 border p-2 rounded-lg"
                  />
                  <button
                    onClick={() => removeField(index, "res")}
                    className="text-red-500 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() => addField("res")}
                className="mt-2 text-sm text-blue-600"
              >
                + Add Responsibility
              </button>
            </div>

            {/* REQUIREMENTS */}
            <div>
              <label className="font-medium text-gray-700">Requirements</label>

              {requirements.map((item, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <input
                    value={item}
                    onChange={(e) => handleChange(index, e.target.value, "req")}
                    className="flex-1 border p-2 rounded-lg"
                  />
                  <button
                    onClick={() => removeField(index, "req")}
                    className="text-red-500 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() => addField("req")}
                className="mt-2 text-sm text-blue-600"
              >
                + Add Requirement
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) =>
                  setForm({ ...form, isActive: e.target.checked })
                }
              />
              <label className="text-sm text-gray-600">Active</label>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Save Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
