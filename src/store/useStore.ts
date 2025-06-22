import { create } from "zustand";
import type { Track } from "../types";

interface StoreState {
  mood: string;
  genre: string;
  track: Track | null;
  likedTracks: Track[];
  setMood: (mood: string) => void;
  setGenre: (genre: string) => void;
  setTrack: (track: Track | null) => void;
  likeTrack: (track: Track) => void;
  isLiked: (track: Track) => boolean;
}

const useStore = create<StoreState>((set, get) => ({
  mood: "",
  genre: "",
  track: null,
  likedTracks: JSON.parse(localStorage.getItem("likedTracks") || "[]"),
  setMood: (mood) => set({ mood }),
  setGenre: (genre) => set({ genre }),
  setTrack: (track) => set({ track }),
  likeTrack: (track) => {
    const current = get().likedTracks;
    const alreadyLiked = current.find((t) => t.url === track.url);
    const updated = alreadyLiked
      ? current.filter((t) => t.url !== track.url) // remove if already liked
      : [...current, track]; // add if not

    localStorage.setItem("likedTracks", JSON.stringify(updated));
    set({ likedTracks: updated });
  },
  isLiked: (track) => {
    return get().likedTracks.some((t) => t.url === track.url);
  }
}));

export default useStore;