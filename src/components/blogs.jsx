import React from "react";

export default function Blogs() {
  const blogs = [
    {
      title: "Understanding Hash Functions in Cybersecurity",
      description:
        "A beginner-friendly explanation of hash functions, their properties, and why they play a vital role in password protection and blockchain.",
      link: "https://medium.com/@yourusername/understanding-hash-functions-in-cybersecurity-123abc",
    },
    {
      title: "Building a Secure Login System Using SHA-256 and Node.js",
      description:
        "Step-by-step guide to implementing a secure authentication system using hashing, salting, and secure session management.",
      link: "https://dev.to/yourusername/building-a-secure-login-system-using-sha256-and-nodejs-456def",
    },
    {
      title: "The Ethics of Ethical Hacking",
      description:
        "Exploring what makes ethical hacking ‘ethical’ — the laws, responsibilities, and mindset behind penetration testing.",
      link: "https://hashnode.com/post/the-ethics-of-ethical-hacking-789ghi",
    },
    {
      title: "My Experience in Building a Secure Linux OS Prototype",
      description:
        "A deep dive into my attempt to create a hardened Linux-based OS with 2FA and biometric authentication for research purposes.",
      link: "https://tanmaygautam.medium.com/secure-linux-os-prototype",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          My Blogs
        </h1>
        <p className="text-center text-gray-600 mb-12">
          I love writing about cybersecurity, web development, and technology. Here are some of my published articles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
              >
                Read Blog →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
