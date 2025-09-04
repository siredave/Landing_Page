// import { useEffect, useState } from "react";

// export default function LandingPage() {
//   const [videoUrl, setVideoUrl] = useState("");

//   // Fetch from a free streaming API (replace with your API if needed)
//   useEffect(() => {
//     async function fetchVideo() {
//       try {
//         // Example: Sample Videos API
//         const res = await fetch("https://api.sampleapis.com/movies/action");
//         const data = await res.json();
//         // Use a trailer/sample video link (fallback if none)
//         setVideoUrl(
//           data[0]?.trailer ||
//             "https://www.w3schools.com/html/mov_bbb.mp4"
//         );
//       } catch (err) {
//         console.error(err);
//         setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4");
//       }
//     }
//     fetchVideo();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
//       {/* Navbar */}
//       <header className="flex items-center justify-between px-6 py-4 bg-black/50 fixed w-full z-10">
//         <h1 className="text-2xl font-bold">StreamX</h1>
//         <nav className="space-x-6 hidden md:flex">
//           <a href="#features" className="hover:text-blue-400">Features</a>
//           <a href="#pricing" className="hover:text-blue-400">Pricing</a>
//           <a href="#contact" className="hover:text-blue-400">Contact</a>
//         </nav>
//         <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
//           Sign Up
//         </button>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 pt-24 md:pt-0">
//         {/* Left */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left">
//           <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Stream Anywhere, Anytime
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300">
//             Enjoy free movies, shows, and live content without limits. Powered by a free streaming API.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">
//               Get Started
//             </button>
//             <button className="border border-gray-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right (Video Player) */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//           {videoUrl ? (
//           `  <video
//               src={videoUrl}
//               controls
//               autoPlay
//               loop
//               className="w-full max-w-lg rounded-2xl shadow-lg border border-gray-700"
//             />`
//           ) : (
//             <p>Loading video...</p>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 border-t border-gray-800 mt-10">
//         <p className="text-gray-400">© {new Date().getFullYear()} StreamX. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
