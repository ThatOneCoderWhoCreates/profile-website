import React from "react";

export default function About() {
  return (
    <div className="pt-28 pb-16 px-6 bg-gray-50 min-h-screen">
      {/* About Me Section */}
      <section id="about" className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Hello! I’m <span className="text-pink-500 font-semibold">Tanmay Gautam</span>, 
          a passionate developer and cybersecurity / AI enthusiast with a strong 
          interest in secure system design and software innovation.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="py-10 bg-white rounded-xl shadow-sm max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          Education
        </h2>
        <div className="space-y-6 px-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Master of Science in Artificial Intelligence and Machine Learning</h3>
            <p className="text-gray-600">Christ (Deemed to be University), 2025 - 2027</p>
            <p className="mt-2 text-gray-700">
              Currently pursuing Artificial Intelligence, Machine Learning, and Software Development. GPA: 3.51/4.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Bachelor of Computer Applications in Cybersecurity</h3>
            <p className="text-gray-600">Jain (Deemed to be University), 2022 - 2025</p>
            <p className="mt-2 text-gray-700">
              Focused on Cybersecurity, Network Security, and Ethical Hacking. GPA: 8.9/10.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-10 bg-gray-50 rounded-xl shadow-sm max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          Work Experience
        </h2>
        <div className="space-y-6 px-6">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Full Stack Developer Intern - STC India</h3>
            <p className="text-gray-600">Jan 2025 - Apr 2025</p>
            <p className="mt-2 text-gray-700">
              Created responsive websites using React.js, Tailwind, and Firebase. Focused on Automation for ease of tasks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cybersecurity Intern - Pinnacle Labs</h3>
            <p className="text-gray-600">June 2024 - July 2024</p>
            <p className="mt-2 text-gray-700">
              Developed an advanced keylogger with secure logging, integrating ethical 
              cybersecurity practices in software monitoring systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
