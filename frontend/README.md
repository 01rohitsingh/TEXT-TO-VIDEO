# 🎬 Text-to-Video AI Agent (MERN Stack)

This is a **Text-to-Video AI Agent** built using the **MERN stack (MongoDB not used in this prototype, React + Node + Express)**.  
The system allows users to enter a text prompt, select a video style, and generate a corresponding demo video through a REST API.

> **Note:**  
> This is a **cost-efficient demo prototype**. Instead of a paid AI video model, the backend returns style-based demo videos while preserving a real-world AI architecture and data flow.

---

## 🚀 Features

- ✅ Text input for video description  
- ✅ Multiple styles: Cinematic, Realistic, Animation, Cartoon, Fantasy  
- ✅ Adjustable duration slider  
- ✅ Real-time video preview  
- ✅ Downloadable video output  
- ✅ Clean and responsive UI  
- ✅ REST API architecture  
- ✅ Cache-safe video loading  
- ✅ Modular frontend & backend separation  

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Inline CSS (responsive design)

### Backend
- Node.js  
- Express.js  
- CORS  
- REST API  

### Deployment (Recommended)
- Frontend → **Vercel**  
- Backend → **Render**  

---

## 📁 Project Structure

TEXT-TO-VIDEO/
<br>
│
<br>
├── backend/
<br>
│ ├── server.js
<br>
│ └── .env
<br>
│
<br>
└── frontend/
<br>
├── src/
<br>
│ └── App.jsx
<br>
└── package.json
