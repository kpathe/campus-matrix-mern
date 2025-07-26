import React from "react";

const events = [
  {
    title: "🚀 What is the FLUXWave?",
    details: (
      <>
        <p>
          FLUXWave is an online hackathon with 3 thrilling rounds, where coders solve challenges from anywhere.
        </p>
        <p className="mt-2">
          <strong>🧠 Domains:</strong> Real-world software problems — Web, Mobile, Tools, and more. Open Innovation — build in any area you're passionate about.
        </p>
        <p className="mt-2">
          <strong>💬 Major Problem Statement:</strong> Healthcare, Agriculture, Local Vendors, Education, Startup & Entrepreneurship, Women Safety, Cybersecurity, Environment.
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li>
            <strong>Round 0 — Team Formation:</strong> Form a team of 3–4 members from any year, Submit idea name.<br />
            <span className="text-gray-500">📅 Last Date: 8 July, 11:59 PM</span>
          </li>
          <li>
            <strong>Round 1 — PPT Submission:</strong> Submit a PPT explaining your idea and approach.<br />
            <span className="text-gray-500">📅 Last Date: 12 July, 11:59 PM</span>
          </li>
          <li>
            <strong>Round 2 — Prototype Submission:</strong> Submit your GitHub repo (preferred) or ZIP of the project with a demo video. Deployed project is a bonus.<br />
            <span className="text-gray-500">📅 Last Date: 24 July, 11:59 PM</span>
          </li>
          <li>
            <strong>Round 3 — Final Interview:</strong> Team interview based on project, clarity, and teamwork.<br />
            <span className="text-gray-500">📅 Interview Date: 27 July</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "💻 WordPress Build Tour 💻",
    details: (
      <>
        <p>
          🚨 Hello Coders, Creators & Curious Minds! 🚨 <br/>
          🌐 SATI Vidisha proudly brings you the WordPress Build Tour – Campus Edition!<br />
          An exciting one-day event where creativity meets coding and your ideas go live! 💡💻
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li>🧠 Hands-on Website Development</li>
          <li>🌍 Intro to Open Source & Community Culture</li>
          <li>🤝 Connect with WordPress Professionals</li>
          <li>💻 Live Demos | Real-Time Guidance | Interactive Workshops</li>
        </ul>
        <p className="mt-2">
          <strong>📅 Date:</strong> 26th July 2025<br />
          <strong>📍 Venue:</strong> VV Natu Computer Centre, SATI Vidisha<br />
          <strong>🎯 Organized by:</strong> WordPress Bhopal Team x E-Cell SATI SBI<br />
          <span className="text-red-500">⚠ Limited Seats Available!</span>
        </p>
        <p className="mt-2">
          📌 Register Now:{" "}
          <a
            href="https://tinyurl.com/EcellSATIxWordPress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://tinyurl.com/EcellSATIxWordPress
          </a>
        </p>
        <p className="mt-2">
          Let’s build something amazing together! 🚀<br />
          <span className="text-gray-500">#WordPressBuildTour #ECellSATI #TechAtSATI #OpenSourceFuture</span>
        </p>
      </>
    ),
  },
];

const dummyEvents = [
  {
    title: "Resume Workshop",
    date: "30 July 2025",
    desc: "Learn how to build a professional resume and LinkedIn profile.",
  },
  {
    title: "Competitive Coding Bootcamp",
    date: "5 August 2025",
    desc: "Sharpen your coding skills with hands-on problems and expert guidance.",
  },
];

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🎉 Upcoming Events</h1>
      <div className="space-y-6 mb-8">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{event.title}</h2>
            <div className="text-gray-800 text-base">{event.details}</div>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4 text-gray-700">Other Events</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {dummyEvents.map((ev, idx) => (
          <div key={idx} className="bg-gray-50 shadow rounded-lg p-5 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-600 mb-1">{ev.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{ev.date}</p>
            <p className="text-gray-700">{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}