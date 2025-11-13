import React, { useState } from "react";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("certifications");

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH) – Certified by EC-Council",
      description:
        "Focused on penetration testing, vulnerability assessment, and ethical exploitation using industry-standard tools.",
      link: "/docs/ECC-CEH-Certificate.pdf", // local document path
      isDocument: true,
    },
    {
      title: "Certified Network Defender (CND) – Certified by EC-Council",
      description:
        "Focused on network defense, intrusion detection, and incident response to secure enterprise systems.",
      link: "/docs/ECC-CND-ANSI-Certificate.pdf", // local document path
      isDocument: true,
    },
    {
      title: "Learning Cryptography and Network Security 2",
      description:
        "Advanced course on encryption, decryption, and secure communication principles.",
      link: "https://linkedin.com/learning/symmetric-cryptography",
      isDocument: false,
    },
  ];

  const awards = [
    {
      title: "3rd Place - CypherIT Competition",
      description:
        "Won 3rd place in an inter-college cybersecurity event focusing on cryptography challenges.",
      link: "/docs/CypherIT.jpeg", // local image path
      isDocument: true,
    },
    {
      title: "Top Intern Award - Pinnacle Labs",
      description:
        "Recognized for outstanding performance during a 1-month internship in advanced keylogging and secure systems.",
      link: "#",
      isDocument: false,
    },
  ];

  const data = activeTab === "certifications" ? certifications : awards;

  const handleViewClick = (item) => {
  // Ensure local docs resolve correctly under /public
  let url = item.link;
  if (item.isDocument && !item.link.startsWith("http")) {
    // Explicitly build full path relative to current origin
    url = `${window.location.origin}${item.link}`;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Achievements
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-6">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "certifications"
                ? "bg-pink-600 text-white shadow-md"
                : "bg-pink-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "awards"
                ? "bg-pink-600 text-white shadow-md"
                : "bg-pink-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Awards
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button
                onClick={() => handleViewClick(item)}
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
