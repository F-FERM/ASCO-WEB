"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Swal from "sweetalert2";

export default function AdminClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [order, setOrder] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageDataUrls, setImageDataUrls] = useState<Record<string, string>>(
    {},
  );

  // ================= FETCH =================
  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data);
    } catch {
      Swal.fire("Error", "Failed to load clients", "error");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // ================= LOAD ALL IMAGES =================
  useEffect(() => {
    // Load images for all clients that don't have data yet
    clients.forEach((client) => {
      if (
        !imageDataUrls[client._id] &&
        !imageErrors[client._id] &&
        client.logoUrl
      ) {
        loadImageAsDataUrl(client._id, client.logoUrl);
      }
    });
  }, [clients, imageDataUrls, imageErrors]);

  // ================= CREATE =================
  const handleCreate = async () => {
    if (!file) {
      return Swal.fire("Error", "Select a logo", "warning");
    }

    try {
      setLoading(true);

      Swal.fire({
        title: "Uploading...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const logoUrl = uploadRes.data.url;

      await api.post("/clients", {
        logoUrl,
        order,
      });

      Swal.close();
      Swal.fire("Success", "Client added", "success");

      setFile(null);
      setOrder(0);
      setImageDataUrls({});
      setImageErrors({});
      fetchClients();
    } catch (err) {
      Swal.close();
      Swal.fire("Error", "Upload failed", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Delete this client?",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    try {
      await api.delete(`/clients/${id}`);
      Swal.fire("Deleted", "Client removed", "success");
      fetchClients();
    } catch {
      Swal.fire("Error", "Delete failed", "error");
    }
  };

  /**
   * Fetch image from backend proxy and convert to data URL
   * Uses axios instance with baseURL = "http://localhost:5002/api"
   */
  const loadImageAsDataUrl = async (clientId: string, driveUrl: string) => {
    try {
      const match = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (!match || !match[1]) {
        handleImageError(clientId);
        return;
      }

      const fileId = match[1];
      console.log(`[Image] Loading for client ${clientId}: ${fileId}`);

      // Use axios to fetch from backend: http://localhost:5002/api/proxy-image?id=...
      const response = await api.get(`/proxy-image?id=${fileId}`, {
        responseType: "arraybuffer",
      });

      // Convert arraybuffer to blob and then to data URL
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result as string;
        console.log(`[Image] Successfully loaded ${clientId}`);
        setImageDataUrls((prev) => ({
          ...prev,
          [clientId]: dataUrl,
        }));
      };

      reader.onerror = () => {
        console.error(`[Image] Failed to read blob for ${clientId}`);
        handleImageError(clientId);
      };

      reader.readAsDataURL(blob);
    } catch (error: any) {
      console.error(
        `[Image] Error loading image for ${clientId}:`,
        error.message,
      );
      handleImageError(clientId);
    }
  };

  // ================= IMAGE ERROR HANDLER =================
  const handleImageError = (clientId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [clientId]: true,
    }));
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Clients Admin</h1>
        <p className="text-sm text-gray-500">
          Manage client logos displayed on website
        </p>
      </div>

      {/* ================= ADD CARD ================= */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4 mt-6">
        <h2 className="font-medium text-gray-800">Add New Client</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* FILE */}
          <div>
            <label className="text-sm text-gray-600">Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 block w-full text-sm border border-gray-200 rounded-md px-3 py-2"
            />

            {file && (
              <p className="text-xs text-gray-500 mt-1">
                Selected: {file.name}
              </p>
            )}
          </div>

          {/* ORDER */}
          <div>
            <label className="text-sm text-gray-600">Order</label>
            <input
              type="number"
              placeholder="Optional"
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
              className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2"
            />
          </div>
        </div>

        <button
          onClick={handleCreate}
          disabled={loading}
          className="bg-black text-white px-5 py-2.5 rounded-md text-sm hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Add Client"}
        </button>
      </div>

      {/* ================= LIST ================= */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Client Logos</h2>

        {clients.length === 0 ? (
          <div className="text-center text-gray-500 text-sm py-10 border rounded-lg">
            No clients added yet
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => {
              const hasError = imageErrors[client._id];
              const dataUrl = imageDataUrls[client._id];

              return (
                <div
                  key={client._id}
                  className="border border-gray-200 rounded-lg p-4 text-center space-y-3 hover:shadow-sm transition"
                >
                  {hasError ? (
                    <div className="h-14 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                      ⚠️ Failed to load
                    </div>
                  ) : dataUrl ? (
                    <img
                      src={dataUrl}
                      alt="client logo"
                      className="h-14 object-contain mx-auto"
                    />
                  ) : (
                    <div className="h-14 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                      Loading...
                    </div>
                  )}

                  <p className="text-xs text-gray-500">
                    Order: {client.order ?? 0}
                  </p>

                  <button
                    onClick={() => handleDelete(client._id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
