import React from "react";
import BgImg from "../assets/bg-img/miyamoto-musashi-5120x2880-15214.jpg";

("use client");

("use client");

("use client");

import {useState} from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
 const handleSubmit = async (e) => {
   e.preventDefault();
   setIsLoading(true);

   try {
     await emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_CD_ID,
       formData,
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
     );

     toast.success("✅ Email sent successfully!");
     setFormData({name: "", email: "", subject: "", message: ""});

     await emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_AR_ID,
       {
         name: formData.name,
         email: formData.email,
       },
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
     );
   } catch (err) {
     console.error(err);
     toast.error("❌ Failed to send email. Try again later.");
   } finally {
     setIsLoading(false); 
   }
 };


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="relative px-6 py-16 min-h-screen md:px-28 overflow-hidden font-space-grotesk">
      {/* Background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <FaStar className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Let's Create Magic
          </h1>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl mx-auto max-w-2xl ">
            <p className="text-lg text-gray-500  leading-relaxed  ">
              Transform your wildest ideas into stunning digital experiences.
              Ready to push boundaries together?
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="relative group">
            <div className="absolute -inset-0 bg-black/50 rounded-3xl group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black/50  rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Drop me a line
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 bg-white/5 backdrop-blur-sm  text-white placeholder:text-gray-400 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 rounded-2xl h-10"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 bg-white/5 backdrop-blur-sm  text-white placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-2xl h-10"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <input
                    name="subject"
                    placeholder="What's on your mind?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 bg-white/5 backdrop-blur-sm  text-white placeholder:text-gray-400 focus:border-pink-400 focus:bg-white/10 transition-all duration-300 rounded-2xl h-10"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Tell me about your amazing project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/5 backdrop-blur-sm  text-white placeholder:text-gray-400 focus:border-emerald-400 focus:bg-white/10 transition-all duration-300 resize-none rounded-2xl"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className={`${
                    isLoading
                      ? "bg-gray-500"
                      : "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600"
                  } w-full flex items-center justify-center   text-white font-bold py-3 transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 group`}
                >
                  <FaPaperPlane className=" w-4 h-4 mr-2 group-hover:rotate-10 transition-transform duration-300" />
                  {isLoading ? "Sending..." : "Launch Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="relative group">
              <div className="absolute -inset-0 bg-black/50 rounded-3xl group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/50  rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Connect Directly
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4 rounded-2xl backdrop-blur-sm border border-purple-400/30">
                      <FaEnvelope className="w-4 h-4 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Email</p>
                      <a
                        href="mailto:aashiashfak@gmail.com"
                        className="text-white hover:text-purple-300 transition-colors font-semibold text-sm"
                      >
                        aashiashfak@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-4 rounded-2xl backdrop-blur-sm border border-cyan-400/30">
                      <FaPhone className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-white hover:text-cyan-300 transition-colors font-semibold text-sm"
                      >
                        +918156867040
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 p-4 rounded-2xl backdrop-blur-sm border border-emerald-400/30">
                      <FaMapMarkerAlt className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        Location
                      </p>
                      <p className="text-white font-semibold text-sm">
                        Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            {/* <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Let's Connect
                </h2>

                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:scale-110 transition-all duration-300 border border-gray-600/30"
                  >
                    <FaGithub className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/50 to-blue-500/50 hover:scale-110 transition-all duration-300 border border-blue-400/30"
                  >
                    <FaLinkedin className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/50 to-sky-400/50 hover:scale-110 transition-all duration-300 border border-sky-300/30"
                  >
                    <FaTwitter className="w-7 h-7 text-white" />
                  </a>
                </div>

                <div className="relative p-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/30 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <FaStar className="w-5 h-5 mr-2 text-yellow-400" />
                      Ready to innovate?
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Let's push the boundaries of what's possible and create
                      something extraordinary that stands out from the crowd.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
