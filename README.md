# 🎧 Wubble QuickTune – Mini AI Music Preview Generator

A single-page full stack web app that lets users generate and preview AI-inspired royalty-free music clips based on selected moods and genres.

---

## 🚀 Features

- 🎼 **Mood & Genre Selector** – Choose from Happy, Sad, Chill, Energetic and genres like Lo-fi, EDM, Pop, Cinematic
- 🔁 **AI Track Simulation** – Generates a random mock track with a loading effect
- 🔊 **Audio Preview** – Listen to the generated track in-browser
- ❤️ **Like/Favorite Track** – Store liked tracks using `localStorage`
- 📥 **Download** – Save the audio file directly

---

## 🖼️ UI Preview

| Generator UI | Track Preview |
|--------------|----------------|
| ![UI](https://www.wubble.ai/logo@2x.png) | 🎵 Audio preview with download + like buttons |

---

## 🏗️ Tech Stack

### 🔹 Frontend
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand) – lightweight state management
- [Vite](https://vitejs.dev/) – for lightning-fast dev environment

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- REST API for dynamic track generation

---

## ⚙️ How to Run Locally

### 1. Clone the Repo


2. Start Backend

cd server
npm install
node app.js

3. Start Frontend

npm install
npm run dev

Make sure your backend is running at http://localhost:5000.


⸻

🧠 Logic Flow
	1.	User selects mood and genre
	2.	Clicks “Generate Track”
	3.	Simulated loading (2s timeout)
	4.	Fetches random track via backend API
	5.	Displays playable audio + Download + Like

⸻

✅ Improvements (see FUTURE.md)
	•	Add pagination/history for generated tracks
	•	Integrate real-time music AI generator API
	•	User login + save favorites across devices
	•	Cloud storage for tracks
	•	Animate mood/genre selectors with Framer Motion

⸻

🧪 Bonus Features
	•	localStorage for liked tracks
	•	Optional Dark Mode toggle
	•	Custom loading animation

⸻

🧑‍💻 Developed By

SHASHANK MISHRA – Full Stack Developer Intern (Assignment for Wubble.ai)

⸻

📩 Contact

For questions or suggestions, feel free to reach out:
	•	📧 Email: shashankmishra2604@gmail.com
	•	💼 LinkedIn: linkedin.com/in/shashank-link/

⸻

📄 License

This project is for educational/demonstration purposes only. Royalty-free audio sourced from SoundHelix or other public domains.

---
