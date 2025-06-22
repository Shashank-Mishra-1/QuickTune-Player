import useStore from "../store/useStore";
import type { Mood, Genre } from "../types";

const moods: Mood[] = ["Happy", "Sad", "Energetic", "Chill"];
const genres: Genre[] = ["Pop", "Lo-fi", "Cinematic", "EDM"];

const MoodGenreSelector = () => {
  const { mood, genre, setMood, setGenre } = useStore();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="block text-white text-sm font-semibold mb-1">Mood</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value as Mood)}
          className="w-full p-2 rounded bg-white/80 text-gray-900"
        >
          <option value="">Select Mood</option>
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-white text-sm font-semibold mb-1">Genre</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value as Genre)}
          className="w-full p-2 rounded bg-white/80 text-gray-900"
        >
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MoodGenreSelector;
