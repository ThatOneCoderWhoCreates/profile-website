import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import About from "./components/aboutme";
import Contact from "./components/contact";
import Project from "./components/projects"
import Blog from "./components/blogs";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900">
        <Navbar />
        <div className="pt-[64px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Welcome />
                </>
              }
            />
            <Route path="/aboutme" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
