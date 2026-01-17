
// FREE TEXT-TO-VIDEO BACKEND (COMMENTED VERSION)


// Import required packages
const express = require("express");   // For creating server
const cors = require("cors");         // To allow frontend to talk to backend
require("dotenv").config();           // To read .env variables

// Create Express app
const app = express();

// Middleware to handle JSON requests
app.use(express.json());
app.use(cors()); // Allows requests from React frontend


// DEMO VIDEO DATABASE (STYLE BASED)
// In real production, here you would call an AI model.

const VIDEOS = {
  Cinematic:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",

  Realistic:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

  Animation:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",

  Cartoon:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",

  Fantasy:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
};


// ROOT ROUTE (just for testing backend)

app.get("/", (req, res) => {
  res.send("Free Text-to-Video Backend is Running 🚀");
});


// MAIN API ROUTE
// Backend returns a video URL

app.post("/generate-video", async (req, res) => {
  try {
    // Extract data from frontend request body
    const { prompt, style, duration } = req.body;

    // Basic validation
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Debug logs (very useful)
    console.log("RAW BODY RECEIVED:", req.body);
    console.log("Style:", style, "Duration:", duration);

    // Simulate AI processing delay (looks realistic)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Select video based on chosen style
    const selectedVideo = VIDEOS[style] || VIDEOS.Cinematic;

    // Send response back to frontend
    // Adding timestamp to avoid browser caching issues
    res.json({
      message: "Video generated successfully (Demo Version)",
      videoUrl: selectedVideo + "?t=" + Date.now(),
      usedPrompt: prompt,
      usedStyle: style,
      usedDuration: duration,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


// START SERVER

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
