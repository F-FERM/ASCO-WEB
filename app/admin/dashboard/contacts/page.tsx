"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Swal from "sweetalert2";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await api.get("/contact");
      setContacts(res.data);
    } catch (err) {
      Swal.fire("Error", "Failed to load contacts", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Submissions
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          View messages sent from your website contact form
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        {loading ? (
          <div className="p-10 flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">
              Loading contact submissions...
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">User</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-10 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-gray-500 text-sm">
                          No contact submissions found
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  contacts.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      {/* INDEX */}
                      <td className="p-4 text-gray-500">{index + 1}</td>

                      {/* NAME */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-semibold">
                            {item.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <span className="font-medium text-gray-800">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      {/* EMAIL */}
                      <td className="p-4 text-gray-600">{item.email}</td>

                      {/* PHONE */}
                      <td className="p-4 text-gray-600">
                        {item.phone ? (
                          item.phone
                        ) : (
                          <span className="text-gray-400 text-xs">
                            Not provided
                          </span>
                        )}
                      </td>

                      {/* MESSAGE */}
                      <td className="p-4 max-w-sm">
                        <div className="text-gray-700 text-sm line-clamp-2">
                          {item.message}
                        </div>
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
