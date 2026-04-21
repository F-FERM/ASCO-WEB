"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import api from "@/lib/axios";

interface Client {
  _id: string;
  logoUrl: string;
  order: number;
  isActive: boolean;
}

export default function ClientsGridSection() {
  const [clients, setClients] = useState<Client[]>([]);
  const [imageDataUrls, setImageDataUrls] = useState<Record<string, string>>(
    {},
  );
  const [loading, setLoading] = useState(true);

  // ================= FETCH CLIENTS =================
  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const res = await api.get<Client[]>("/clients");
        // Sort by order field
        const sortedClients = res.data.sort((a, b) => a.order - b.order);
        setClients(sortedClients);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // ================= LOAD IMAGES =================
  useEffect(() => {
    if (clients.length === 0) {
      setLoading(false);
      return;
    }

    let loadedCount = 0;

    clients.forEach((client) => {
      if (!imageDataUrls[client._id] && client.logoUrl) {
        loadImageAsDataUrl(client._id, client.logoUrl);
      } else {
        loadedCount++;
      }
    });

    // Check if all images are loaded
    if (loadedCount === clients.length) {
      setLoading(false);
    }
  }, [clients, imageDataUrls]);

  /**
   * Fetch image from backend proxy and convert to data URL
   */
  const loadImageAsDataUrl = async (clientId: string, driveUrl: string) => {
    try {
      const match = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (!match || !match[1]) {
        console.error(`Invalid URL for client ${clientId}`);
        return;
      }

      const fileId = match[1];

      // Use axios to fetch from backend proxy
      const response = await api.get(`/proxy-image?id=${fileId}`, {
        responseType: "arraybuffer",
      });

      // Convert to blob and data URL
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result as string;
        setImageDataUrls((prev) => ({
          ...prev,
          [clientId]: dataUrl,
        }));
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error(`Failed to load image for client ${clientId}:`, error);
    }
  };

  return (
    <section className="bg-[white] pb-16 md:pb-24">
      <Container>
        {/* LOADING STATE */}
        {loading && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center
                  bg-gray-100
                  border border-gray-200
                  rounded-[20px]
                  h-[110px] sm:h-[120px] md:h-[130px] lg:h-[145px]
                  px-4
                  animate-pulse
                "
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && clients.length === 0 && (
          <div className="mt-10 flex items-center justify-center min-h-[300px]">
            <p className="text-gray-500 text-sm md:text-base">
              No clients added yet
            </p>
          </div>
        )}

        {/* GRID */}
        {!loading && clients.length > 0 && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client._id}
                className="
                  flex items-center justify-center
                  bg-white
                  border border-gray-200
                  rounded-[20px]
                  h-[110px] sm:h-[120px] md:h-[130px] lg:h-[145px]
                  px-4
                  hover:shadow-md
                  transition
                  shadow-lg
                  overflow-hidden
                "
              >
                {imageDataUrls[client._id] ? (
                  <img
                    src={imageDataUrls[client._id]}
                    alt="client logo"
                    className="object-contain max-h-[60px] md:max-h-[70px] max-w-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 animate-pulse rounded" />
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
