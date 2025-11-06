import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Secure Password Manager",
      description:
        "A password storage system using SHA-256 encryption to securely store and verify user credentials.",
      link: "https://github.com/yourusername/password-manager",
    },
    {
      title: "Travel Journal App",
      description:
        "A React-based app that allows users to share their travel experiences, with Firebase integration for image storage.",
      link: "https://github.com/yourusername/travel-journal",
    },
    {
      title: "Advanced Keylogger",
      description:
        "A project that shows the actual usecase and logic behind developing a keylogger and the social engineering aspect of it.",
      link: "https://github.com/ThatOneCoderWhoCreates/keylogger-ftp-server",
    },
    {
      title: "Sustainable Packaging Website",
      description:
        "A full-stack project showcasing eco-friendly packaging solutions and dynamic data management using React and Firebase.",
      link: "https://github.com/yourusername/sustainable-packaging",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          My Projects
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Here are some of the projects I’ve worked on. Each one showcases a different set of skills and technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
