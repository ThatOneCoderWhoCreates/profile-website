import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Left section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Tanmay Gautam</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              Developer • Cybersecurity Enthusiast • Lifelong Learner
            </p>
          </div>

          {/* Center section — Navigation */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-gray-900 font-semibold mb-1">Quick Links</h3>
            <a href="/aboutme" className="hover:text-pink-500 transition">About</a>
            <a href="/contact" className="hover:text-pink-500 transition">Contact</a>
          </div>

          {/* Right section — Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-900 font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ThatOneCoderWhoCreates"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanmay-gautam-2803b9253/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:tanmaygautam439@gmail.com"
                className="hover:text-pink-500 transition"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tanmay Gautam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
