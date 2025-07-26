import React from "react";

const resources = [
  {
    title: "Programming Resources",
    desc: "Free online platforms to learn coding: LeetCode, GeeksforGeeks, HackerRank, Codeforces, FreeCodeCamp.",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    title: "College Notes",
    desc: "Semester-wise notes for CSE, ECE, ME, IT. Download PDFs and handwritten notes.",
    link: "#",
  },
  {
    title: "Previous Year Question Papers (PYQ)",
    desc: "Access PYQs for all branches and years. Useful for exam preparation.",
    link: "#",
  },
  {
    title: "Campus Guide",
    desc: "FAQs, campus map, hostel info, and tips for new students.",
    link: "#",
  },
  {
    title: "Career Resources",
    desc: "Resume templates, interview tips, LinkedIn profile guides.",
    link: "#",
  },
];

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Student Resources</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((res, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-5 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-indigo-600">{res.title}</h2>
            <p className="text-gray-700 mb-3">{res.desc}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {res.link !== "#" ? "Visit Resource" : "Download"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}