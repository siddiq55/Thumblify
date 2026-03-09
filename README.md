# 🚀 Thumblify - AI-Powered Thumbnail Generator

**Thumblify** is a full-stack AI application designed to help creators generate YouTube thumbnails in seconds. Using advanced AI models, it transforms titles and prompts into visually stunning thumbnails.

---

## ✨ Features

- 🧠 **AI-Driven Generation**: Leverage Google Gemini to create thumbnails based on video titles or specific prompts.
- 🎨 **Style Customization**: Choose from various styles (Gaming, Minimalist, Vlog, Educational) and aspect ratios.
- 🔐 **User Authentication**: Secure Login and Signup system to save and manage your generated designs.
- 📂 **Thumbnail Gallery**: A personal dashboard to view, download, and manage your previous creations.
- ⚡ **Real-time Preview**: See your thumbnail evolve as you adjust colors and prompts.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Framer Motion (Animations)

**Backend:**
- Node.js & Express.js
- MongoDB (Database)
- Express-Session (Authentication)

**AI Integration:**
- Google Gemini API

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local installation
- API Key (Gemini)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siddiq55/Thumblify.git
   cd Thumblify

```

2. **Install Backend Dependencies:**
```bash
cd Backend
npm install

```


3. **Install Frontend Dependencies:**
```bash
cd ../Frontend
npm install

```


4. **Set up Environment Variables:**
Create a `.env` file in the `server` directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
GEMINI_API_KEY=your_api_key

```


5. **Run the Application:**
```bash
# In /server
npm start

# In /client (separate terminal)
npm run dev

```



---

## 📸 Screenshots


| Home Page | Dashboard | Generator |
| --- | --- | --- |
|  |  |  |

---


