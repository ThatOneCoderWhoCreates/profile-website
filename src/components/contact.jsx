import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("sending");

    const response = await fetch("https://formspree.io/f/mzzknykl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Contact Me</h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question, collaboration idea, or just want to say hello? Fill out the form below and I’ll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-gray-800 text-white font-medium py-2 rounded-lg hover:bg-gray-700 transition-all disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-600 text-center mt-4">
              I have recieved you form, will reply soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4">
              The form got lost somewhere, please try again later :(
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
