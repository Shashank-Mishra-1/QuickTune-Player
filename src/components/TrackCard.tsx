import useStore from "../store/useStore";
import type { Track } from "../types";

interface Props {
  track: Track;
  onLike: (track: Track) => void;
}

const TrackCard = ({ track, onLike }: Props) => {
  const { isLiked } = useStore();
  const liked = isLiked(track); 

  return (
    <div className="mt-8 bg-white dark:bg-zinc-900/90 rounded-xl p-6 shadow-lg text-center border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{track.title}</h2>
      <p className="text-gray-600 dark:text-zinc-300 mb-4">
        {track.mood} • {track.genre}
      </p>

      <audio controls className="w-full mb-4">
        <source src={track.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex justify-center gap-4">
      <a
  href={track.url}
  download={`${track.title.replace(/\s+/g, "_")}.mp3`}
  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
  target="_blank"
  rel="noopener noreferrer"
>
  Download
</a>

        <button
          onClick={() => onLike(track)}
          className={`px-4 py-2 rounded text-white transition ${
            liked ? "bg-red-600 hover:bg-red-700" : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {liked ? "💔 Unlike" : "❤️ Like"}
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
