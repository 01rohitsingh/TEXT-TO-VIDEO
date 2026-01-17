
// TEXT-TO-VIDEO FRONTEND (REACT) 


import { useState } from "react";      // React hook for state
import axios from "axios";            // For calling backend API

export default function App() {


  // STATE VARIABLES


  // Stores user text input
  const [prompt, setPrompt] = useState("");

  // Stores selected video style
  const [style, setStyle] = useState("Cinematic");

  // Stores selected duration
  const [duration, setDuration] = useState(5);

  // Stores video URL received from backend
  const [videoUrl, setVideoUrl] = useState("");

  // Controls loading spinner state
  const [loading, setLoading] = useState(false);


  // FUNCTION TO CALL BACKEND AND GENERATE VIDEO

  const generateVideo = async () => {

    // Basic validation
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);      // show loading state
    setVideoUrl("");       // clear previous video

    try {
      // Call backend API
      const res = await axios.post(
        "http://localhost:5000/generate-video",
        {
          prompt: prompt,
          style: style,
          duration: duration,
        }
      );

      // Save returned video URL in state
      setVideoUrl(res.data.videoUrl);

    } catch (error) {
      alert("Error generating video!");
    }

    setLoading(false);     // stop loading state
  };


  // UI STARTS HERE

  return (
    <div style={styles.page}>

      <div style={styles.glassCard}>

        {/* Title */}
        <h1 style={styles.title}>🎬 AI Text-to-Video Studio</h1>
        <p style={styles.subtitle}>
          Type your idea and let AI create a video for you
        </p>

        {/* Text input */}
        <textarea
          style={styles.textarea}
          rows="4"
          placeholder="Example: A futuristic city with flying cars..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div style={styles.row}>

          {/* Style dropdown */}
          <select
            style={styles.select}
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="Cinematic">Cinematic</option>
            <option value="Realistic">Realistic</option>
            <option value="Animation">Animation</option>
            <option value="Cartoon">Cartoon</option>
            <option value="Fantasy">Fantasy</option>
          </select>

          {/* Duration slider */}
          <div style={{ flex: 1 }}>
            <label>Duration: {duration}s</label>
            <input
              type="range"
              min="2"
              max="10"
              value={duration}
              style={{ width: "100%" }}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

        </div>

        {/* Generate button */}
        <button
          style={styles.button}
          onClick={generateVideo}
          disabled={loading}
        >
          {loading ? "⏳ Generating..." : "Generate Video 🚀"}
        </button>

        {/* Show video only when URL exists */}
        {videoUrl && (
          <div style={styles.videoBox}>
            <h3>Generated Video</h3>

            {/* Video player */}
            <video style={styles.video} controls key={videoUrl}>
              <source src={videoUrl} type="video/mp4" />
            </video>

            {/* Download link */}
            <a href={videoUrl} download style={styles.download}>
              Download Video
            </a>
          </div>
        )}

      </div>
    </div>
  );
}


// INLINE STYLES (Responsive + Centered UI)

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)",
    padding: "20px",
  },

  glassCard: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "700px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  row: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    flexWrap: "wrap",
  },

  select: {
    flex: 1,
    padding: "8px",
    borderRadius: "8px",
  },

  button: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  videoBox: {
    marginTop: "20px",
  },

  video: {
    width: "100%",
    borderRadius: "12px",
  },

  download: {
    display: "inline-block",
    marginTop: "10px",
    color: "#2563eb",
  },
};
