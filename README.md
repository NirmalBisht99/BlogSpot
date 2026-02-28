# 🚀 BlogSpot — AI-Powered Blog Generation Platform

BlogSpot is a full-stack **MERN** application that dynamically generates complete blog articles using the **Gemini API** based on a given title.

The platform integrates:

- 🔐 Secure JWT-based Admin Authentication  
- 🎨 Modern UI built with React + Tailwind CSS  
- ☁️ Cloud-based image storage using ImageKit  
- 🗄️ MongoDB for persistent blog storage  

---

# 🛠 Tech Stack

## 🎨 Frontend
- React.js  
- Tailwind CSS  

## ⚙️ Backend
- Node.js  
- Express.js  

## 🗄️ Database
- MongoDB  

## 🔐 Authentication
- JWT (JSON Web Token)  

## 🌐 External Services
- Gemini API (AI Blog Generation)  
- ImageKit (Image Storage & CDN)  

## 🧪 Development Tools
- Postman (API Testing)  
- Git & GitHub (Version Control)  

---

# ✨ Key Highlights

- 🧠 **AI Blog Generation** — Instantly generate full blog articles from a title  
- 🔐 **JWT-Based Admin Authentication** — Secure admin login system  
- 🖼️ **Cloud Image Management** — Optimized image storage using ImageKit CDN  
- ⚡ **Modern Responsive UI** — Clean interface built with Tailwind CSS  
- 🔗 **RESTful Backend Architecture** — Structured APIs with middleware validation  
- 🔒 **Secure Configuration** — API keys stored using environment variables  
- 🧑‍💻 **Complete MERN Implementation** — End-to-end frontend and backend integration  

---

# 🧠 Application Overview

## 🏗 High-Level Architecture

Client (React UI)
↓
Node.js / Express API
↓
Gemini API (AI Content Generation)
↓
MongoDB (Blog Storage)
↓
ImageKit (Image Storage & CDN)


---

# 🔍 Core Modules

| Module | Responsibility |
|--------|---------------|
| 🎨 Frontend | Accepts blog title, displays blogs, handles authentication |
| ⚙️ Backend | Validates JWT, processes requests, connects to Gemini API |
| 🧠 Gemini API | Generates blog content |
| 🗄️ MongoDB | Stores blog data |
| 🖼️ ImageKit | Manages blog images |
| 🧪 Postman | Tests API endpoints |

---

# 🔄 Blog Generation Flow

1. Admin logs in securely  
2. JWT token is generated  
3. Admin enters blog title  
4. Frontend sends title + JWT to backend  
5. Backend verifies JWT authentication  
6. Backend sends prompt to Gemini API  
7. Gemini generates blog content  
8. Backend stores blog in MongoDB  
9. Image is uploaded to ImageKit  
10. Blog data returned to frontend  
11. Frontend renders generated blog  

---

# 🚀 Getting Started

## 📋 Requirements

- Node.js (v18 or higher)  
- npm  
- MongoDB (Local or Atlas)  
- ImageKit Account  
- Gemini API Access  


## 1️⃣ Clone the Repository

git clone https://github.com/NirmalBisht99/BlogSpot.git
cd BlogSpot
2️⃣ Backend Setup
cd backend
npm install
cp .env.example .env
🔐 Configure .env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
▶ Start Backend
npm run dev
3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
🔐 Authentication Flow

Admin credentials verified via backend

JWT token generated upon successful login

Token stored securely (HTTP-only cookie or localStorage)

Middleware protects restricted routes

Unauthorized users cannot create, update, or delete blogs

📚 What This Project Demonstrates

✔ Full-stack MERN development workflow
✔ AI integration using Gemini API
✔ Secure JWT authentication
✔ Cloud image management with ImageKit
✔ REST API design and middleware usage
✔ Secure environment variable handling
✔ Scalable and modular architecture

📄 License

This project is built for educational and portfolio purposes.

👨‍💻 Developed By

Nirmal Bisht








