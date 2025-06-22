export type Mood = "Happy" | "Sad" | "Energetic" | "Chill";
export type Genre = "Pop" | "Lo-fi" | "Cinematic" | "EDM";

export interface Track {
  title: string;
  url: string;
  mood: Mood;
  genre: Genre;
}
