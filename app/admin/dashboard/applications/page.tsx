"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Swal from "sweetalert2";

export default function ApplicationsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/job-applications");
      setData(res.data);
    } catch (err) {
      Swal.fire("Error", "Failed to fetch applications", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Job Applications</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Manage and review all candidate applications
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        {loading ? (
          <div className="p-10 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">Loading applications...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Candidate</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Job</th>
                  <th className="p-4">CV</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-10 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-gray-500 text-sm">
                          No applications found
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-4 text-gray-500">{index + 1}</td>

                      {/* NAME */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                            {item.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <span className="font-medium text-gray-800">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      {/* EMAIL */}
                      <td className="p-4 text-gray-600">{item.email}</td>

                      {/* JOB */}
                      <td className="p-4">
                        {item.jobTitle ? (
                          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                            {item.jobTitle}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-xs">N/A</span>
                        )}
                      </td>

                      {/* CV */}
                      <td className="p-4">
                        <a
                          href={item.cvUrl}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View CV →
                        </a>
                      </td>

                      {/* DATE */}
                      <td className="p-4 text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
