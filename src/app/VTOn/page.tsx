"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function VirtualTryOnPage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/virtual-try-on");

        if (response.data.success && Array.isArray(response.data.data)) {
          // Lấy danh sách URL ảnh từ API response
          const urls = response.data.data.map((item: { url: string }) => item.url);
          setImageUrls(urls);
          await console.log(response.data);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (err) {
        setError("Error fetching virtual try-on result");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Virtual Try-On</h1>

      {loading && <p className="text-gray-500">Processing image...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Virtual Try-On Result ${index + 1}`}
            className="w-auto max-h-[500px] rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
