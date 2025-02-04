"use client";
import React, { useState } from "react";
import axios from "axios";

const HuggingFace = () => {
    const [inputText, setInputText] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchSummary = async () => {
        if (!inputText) return;
        setLoading(true);
        try {
            const response = await axios.post("/api/huggingface", { text: inputText });
            setSummary(response.data[0]?.summary_text || "No summary available");
        } catch (error) {
            console.error("Error fetching summary:", error);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to summarize..."
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                rows={4}
            />
            <button
                onClick={fetchSummary}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                disabled={loading}
            >
                {loading ? "Summarizing..." : "Summarize"}
            </button>
            {summary && <p className="mt-4 p-2 border text-black">{summary}</p>}
        </div>
    );
};

export default HuggingFace;
