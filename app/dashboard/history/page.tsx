"use client";

import { Loader2Icon, CopyIcon, CopyCheckIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("/api/history");
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    // Remove the copied state after 3 seconds
    setTimeout(() => {
      setCopiedId(null);
    }, 3000);
  };

  return (
    <div className="bg-white m-10 rounded-lg p-5 flex flex-col gap-7">
      <div>
        <h2 className="font-bold text-3xl">History</h2>
        <p>Search your previously generated AI content</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 bg-slate-100 p-3 rounded-lg">
        <div><h3 className="font-bold text-lg">Template</h3></div>
        <div><h3 className="font-bold text-lg">AI Resp</h3></div>
        <div><h3 className="font-bold text-lg">Date</h3></div>
        <div><h3 className="font-bold text-lg">Words</h3></div>
        <div><h3 className="font-bold text-lg">Copy</h3></div>
      </div>

      {loading ? (
        <p><Loader2Icon className="animate-spin"/></p>
      ) : (
        history.map((item) => (
          <div key={item.id} className="grid grid-cols-2 lg:grid-cols-5 gap-10 p-3 border-b">
            <div>{item.templateSlug}</div>
            <div className="line-clamp-4">{item.aiResponse.slice(0, 100)}...</div>
            <div>{new Date(item.createdAt).toLocaleDateString()}</div>
            <div>{item.aiResponse.split(" ").length} words</div>
            <div>
              <button
                onClick={() => handleCopy(item.id, item.aiResponse)}
                className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-2 transition-all"
              >
                {copiedId === item.id ? <CopyCheckIcon className="w-4 h-4"/> :''}
                Copy
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
