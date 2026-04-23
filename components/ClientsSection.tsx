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

export default function ClientsSection() {
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
    const totalClients = clients.length;

    clients.forEach((client) => {
      if (!imageDataUrls[client._id] && client.logoUrl) {
        loadImageAsDataUrl(client._id, client.logoUrl, () => {
          loadedCount++;
          if (loadedCount === totalClients) {
            setLoading(false);
          }
        });
      } else {
        loadedCount++;
        if (loadedCount === totalClients) {
          setLoading(false);
        }
      }
    });
  }, [clients, imageDataUrls]);

  /**
   * Fetch image from backend proxy and convert to data URL
   */
  const loadImageAsDataUrl = async (
    clientId: string,
    driveUrl: string,
    onLoad?: () => void,
  ) => {
    try {
      const match = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (!match || !match[1]) {
        console.error(`Invalid URL for client ${clientId}`);
        onLoad?.();
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
        onLoad?.();
      };

      reader.onerror = () => {
        console.error(`Failed to read blob for client ${clientId}`);
        onLoad?.();
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error(`Failed to load image for client ${clientId}:`, error);
      onLoad?.();
    }
  };

  // Split clients into two rows
  const firstRowCount = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, firstRowCount);
  const secondRow = clients.slice(firstRowCount);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        {/* TITLE */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-[#EFDF0E]">ASCO</span> <span className="text-black">CLIENTS</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600">
            ASCO is an integral part of the landscape of the State of Qatar. We
            have developed much of the nation's infrastructure and building
            sector. Our clients include most government departments, as well as
            several major local and international corporations.
          </p>

          <button className="mt-6 bg-[#EFDF0E] px-5 py-2 rounded-[8px] text-sm hover:bg-[#e8d600] transition-colors text-black">
            View All →
          </button>
        </div>

        <div className="mt-14 space-y-10">
          {/* ROW 1 */}
          {firstRow.length > 0 && (
            <div className="overflow-hidden">
              <div className="flex gap-8 md:gap-10 animate-marquee">
                {[...firstRow, ...firstRow].map((client, i) => (
                  <div
                    key={`${client._id}-${i}`}
                    className="min-w-[200px] md:min-w-[260px] flex items-center justify-center"
                  >
                    {imageDataUrls[client._id] ? (
                      <img
                        src={imageDataUrls[client._id]}
                        alt="client logo"
                        className="w-[140px] md:w-[200px] h-auto object-contain"
                      />
                    ) : (
                      <div className="w-[140px] md:w-[200px] h-20 bg-gray-200 rounded animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROW 2 */}
          {secondRow.length > 0 && (
            <div className="overflow-hidden">
              <div className="flex gap-8 md:gap-10 animate-marquee-reverse">
                {[...secondRow, ...secondRow].map((client, i) => (
                  <div
                    key={`${client._id}-${i}`}
                    className="min-w-[200px] md:min-w-[260px] flex items-center justify-center"
                  >
                    {imageDataUrls[client._id] ? (
                      <img
                        src={imageDataUrls[client._id]}
                        alt="client logo"
                        className="w-[140px] md:w-[200px] h-auto object-contain"
                      />
                    ) : (
                      <div className="w-[140px] md:w-[200px] h-20 bg-gray-200 rounded animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
