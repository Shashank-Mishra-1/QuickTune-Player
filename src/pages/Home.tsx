import Header from "../components/Header";
import MoodGenreSelector from "../components/MoodGenreSelector";
import TrackCard from "../components/TrackCard";
import useStore from "../store/useStore";
import { useEffect, useState } from "react";



const Home = () => {
  const { mood, genre, track, setTrack, likeTrack } = useStore();
  const [loading, setLoading] = useState(false);


    useEffect(() => {
      return setTrack(null);
    }, [mood, genre]);

    
  const handleGenerate = async () => {
    if (!mood || !genre) return alert("Please select both mood and genre");
    setLoading(true);
  
    try {
      const res = await fetch(`http://localhost:5500/api/tracks?mood=${mood}&genre=${genre}`);
  
      if (res.status === 204) {
        alert("No track found for selected mood and genre.");
        setTrack(null);
      } else if (!res.ok) {
        throw new Error("Failed to fetch track");
      } else {
        const data = await res.json();
        setTrack(data);
      }
    } catch (err) {
      console.error("Track fetch error:", err);
      alert("Something went wrong while generating track.");
      setTrack(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center justify-center relative overflow-hidden">
    
        <div className="absolute w-[600px] h-[600px] bg-purple-800 rounded-full opacity-20 blur-3xl top-[-200px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full opacity-20 blur-2xl bottom-[-150px] right-[-100px]"></div>

        
        <div className="text-center z-10">
          <div className="mb-6">
            <img src="https://www.wubble.ai/logo@2x.png" alt="Wubble Logo" className="mx-auto w-16 h-16" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-gray-100">Customised </span>
            <span className="text-purple-400">royalty free music </span>
            <span className="text-gray-100">in seconds</span>
          </h1>
        </div>

        <section className="w-full max-w-xl bg-zinc-900/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl mt-8 z-10 border border-zinc-700">
          <MoodGenreSelector />
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:brightness-110 transition-all text-white font-semibold py-2 px-4 mt-6 rounded-xl"
          >
            {loading ? "Loading your vibe..." : "Generate Track"}
          </button>
        </section>

        <section className="w-full max-w-xl mt-10 z-10">
          {track && <TrackCard track={track} onLike={likeTrack} />}
        </section>

        {/* Footer Nav */}
        <footer className="mt-20 text-sm text-zinc-400 z-10">
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-purple-400 transition">About</a>
            <a href="#" className="hover:text-purple-400 transition">Features</a>
            <a href="#" className="hover:text-purple-400 transition">Pricing</a>
            <a href="#" className="hover:text-purple-400 transition">Resources</a>
            <a href="#" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
