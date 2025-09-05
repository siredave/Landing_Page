import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {

  const [open, setOpen] = useState(false);

  const agenda = [
    { time: "9:00 AM", event: "Welcome to Lagos Venture Finance Summit" },
    { time: "9:30 AM", event: "Keynote: The Role of Capital Allocators in Developing Africa's Venture Ecosystem" },
    { time: "10:00 AM", event: "Fireside Chat: Unlocking Local Capital for Emerging Fund Managers in Africa" },
    { time: "10:30 AM", event: "Keynote: The Art of Capital Allocation in Africa" },
    { time: "11:00 AM", event: "Industry Outlook: The State of Africa's Private Market" },
    { time: "11:30 AM", event: "GP Perspective: How to Launch a Venture Capital Fund in Africa" },
    { time: "12:30 PM", event: "Networking Break (GP/LP Matching & Delegate Networking)" },
    { time: "1:00 PM", event: "Breakouts: Navigating Fundraising / Building Innovation Hubs in Nigeria" },
    { time: "2:00 PM", event: "Keynote: Backing Rising Female GPs in Africa" },
    { time: "2:30 PM", event: "CVC in Africa: How to Innovate through Corporate Venturing" },
    { time: "3:20 PM", event: "Vencapital Alumni Perspective: Breaking into VC and Startup in Africa" },
    { time: "3:40 PM", event: "VenCap Events Promo + Closing Remarks by Esohe" },
  ];

  const speakers = [
    "Henry Ogbuagu – Founding Partner, Vencapital",
    "Oguche Agudah – CEO, PenOp",
    "Gbolade Okeowo – VP, Kuramo Capital Management",
    "Dr. Akintoye Akindele – Chairman, Platform Capital",
    "Preston Timeyin Ideh – CEO, Stears",
    "Dr. Dotun Olowoporoku – Managing Partner, Ventures Platform",
    "Adesuwa Okunbo Rhodes – Founder & CEO, Aruwa Capital Management",
    "Iyinoluwa Aboyeji – Founding Partner, Future Africa",
    "Ashim Egunjobi – Managing Partner, Octerra Capital",
    "Esohe Igbinoba – Venture Partner, Vencapital",
    "Idowu Akinde – Managing Director, Impact Hub Lagos",
    "Jennifer Jonathan – Acting Executive Director, ISN Hubs",
    "Mope Abudu – Managing Partner, AfriGloCal Venture Capital",
    "Ina Alogwu – CDIO, T2 Mobile",
    "Oyin Solebo – Operating Partner, Cone Venture Studio",
    "Anil Atmaramani – Partner, Antler",
    "Nada Shahen – Managing Director, GB Ventures",
    "Elton Oshodipe – Investment Projects, Two Lions (Vencap Alum)",
    "Henry C. Okonkwo – Business Consultant (Vencap Alum)",
    "Ogechi Yvonne Obike – Business Operations, Brass (Vencap Alum)",
  ];

  // For scrolling speakers
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
 <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img src="/Tingo.png" alt="Company Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#stream" className="hover:text-orange-600">Stream</a></li>
          <li><a href="#agenda" className="hover:text-orange-600">Agenda</a></li>
          <li><a href="#speakers" className="hover:text-orange-600">Speakers</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 font-medium">
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#stream" onClick={() => setOpen(false)}>Stream</a></li>
            <li><a href="#agenda" onClick={() => setOpen(false)}>Agenda</a></li>
            <li><a href="#speakers" onClick={() => setOpen(false)}>Speakers</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-4">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
          Lagos Venture Finance Summit — Sept 5, 2025
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 max-w-2xl text-lg md:text-xl">
          Catalyzing Africa’s next venture wave—GPs, LPs, and fund leaders converge in Lagos.
        </motion.p>
        <motion.a href="#stream" whileHover={{ scale: 1.05 }} className="mt-6 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100">
          Watch Live
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">About the Summit</h2>
        <p className="text-lg text-gray-700 font-semibold leading-relaxed">
          The Lagos Venture Finance Summit brings together emerging fund managers and capital allocators to drive venture capital growth across Africa. Explore liquidity trends, fund strategies, and network with industry leaders.
        </p>
      </section>

      {/* Stream */}
  {/* <section id="stream" className="bg-orange-50 py-20 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-orange-500">
      Live Stream
    </h2>
    <div className="relative aspect-video w-full sm:w-3/4 md:w-2/3 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-orange-200 hover:shadow-orange-400 transition-shadow duration-300">
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section> */}


<section id="stream" className="bg-orange-50 py-20 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-orange-500">
      Live Stream
    </h2>
    <div className="relative aspect-video w-full sm:w-3/4 md:w-2/3 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-orange-200 hover:shadow-orange-400 transition-shadow duration-300">
      <iframe
      src="https://www.youtube.com/embed/m1gImNgcC14?autoplay=0&modestbranding=1&rel=0"
  title="YouTube Live Stream"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  className="w-full h-full"
/>
    </div>
  </div>
</section>




   
      {/* Agenda */}
      <section id="agenda" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Agenda</h2>
        <ul className="space-y-6">
          {agenda.map((item, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-center justify-between bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <span className="time-font text-lg md:text-xl font-normal text-orange-400">{item.time}</span>
              <span className="event-font mt-2 md:mt-0 text-gray-800 text-base md:text-lg font-semibold leading-relaxed">{item.event}</span>
            </li>
          ))}
        </ul>
      </section>


      {/* Speakers - Scrollable */}
      <section id="speakers" className="relative max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Speakers</h2>

        {/* Arrows */}
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100 z-10">
          <ChevronLeft className="h-6 w-6 text-orange-600" />
        </button>
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100 z-10">
          <ChevronRight className="h-6 w-6 text-orange-600" />
        </button>

        {/* Scrollable Container */}
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-10">
          {speakers.map((s, idx) => (
            <div key={idx} className="flex-shrink-0 w-44 h-44 flex items-center justify-center text-center bg-orange-400/30 backdrop-blur-md rounded-full shadow-md border border-orange-200/40 hover:shadow-xl transition duration-300 p-5">
              <p className="text-sm md:text-base font-semibold text-gray-800 leading-snug">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-6">
          For sponsorships, partnerships, or inquiries, please reach out to us.
        </p>
        <p className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Tingo AI, 1 Itirin Court, Off Bishop Aboyede Cole, Victoria Island, Lagos, Nigeria.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © 2025 TingoMedia & Technology Ltd. All rights reserved.
      </footer>
    </div>
  );
}
