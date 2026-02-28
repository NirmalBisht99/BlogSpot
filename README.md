## BlogSpot — AI-Powered Blog Generation Platform

BlogSpot is a full-stack MERN application that generates complete blog content dynamically using the Gemini API based on a given title. The platform includes secure JWT-based admin authentication, modern UI styling with Tailwind CSS, and cloud-based image management using ImageKit.

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

Backend

Node.js

Express.js

Database

MongoDB

Authentication

JWT (JSON Web Token)

External Services

Gemini API (AI Blog Generation)

ImageKit (Image Storage & CDN)

Development Tools

Postman (API testing)

Git & GitHub (Version control)

✨ Key Highlights

🧠 AI Blog Generation — Generate complete blog articles instantly using Gemini API by simply entering a blog title

🔐 JWT-Based Admin Authentication — Secure admin login to create, edit, and delete blogs

🖼️ Cloud Image Management — Blog images are stored and optimized using ImageKit CDN

⚡ Modern & Responsive UI — Clean, fast, and responsive design built with React and Tailwind CSS

🔗 RESTful Backend Architecture — Structured API endpoints with proper validation and middleware

🔒 Secure Environment Configuration — API keys and secrets managed via environment variables

🧑‍💻 Full MERN Stack Implementation — Complete frontend-backend-database integration

🧠 Application Overview
🏗 High-Level Architecture

Client (React UI)
↓
Node.js / Express API
↓
Gemini API (AI Content Generation)
↓
MongoDB (Blog Storage)
↓
ImageKit (Image Storage & CDN)

🔍 Core Modules
Module	Responsibility
🎨 Frontend (React)	Accepts blog title, displays blogs, handles admin authentication
⚙️ Backend (Node.js)	Processes requests, validates admin via JWT, communicates with Gemini API
🧠 Gemini API	Generates blog content from title
🗄️ MongoDB	Stores blog data and metadata
🖼️ ImageKit	Stores and delivers optimized blog images
🧪 Postman	API testing and validation
🔄 Request Flow (Blog Generation)

Admin logs in using secure credentials
JWT token is generated upon successful authentication
Admin enters a blog title
Frontend sends the title along with JWT token to backend
Backend verifies JWT authentication
Backend sends the title prompt to Gemini API
Gemini generates structured blog content
Backend stores blog content in MongoDB
Blog image is uploaded to ImageKit
Blog data (including image URL) is saved and returned to frontend
Frontend renders the newly created blog

🚀 Getting Started
📋 Requirements

Node.js (v18 or higher)

npm

MongoDB (local or Atlas)

ImageKit account

Gemini API access

1️⃣ Clone the Repository
git clone https://github.com/your-username/BlogSpot.git
cd BlogSpot
2️⃣ Backend Setup
cd backend
npm install
cp .env.example .env

Add your credentials inside .env:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

Start the backend server:

npm run dev
3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
🔐 Authentication Flow

Admin credentials are verified via backend

Upon successful login, a JWT token is generated

Token is stored securely (HTTP-only cookie or local storage)

Protected routes use middleware to verify JWT before granting access

Unauthorized users cannot create, update, or delete blogs

📚 What This Project Demonstrates

✔ Full-stack MERN development workflow

✔ AI integration using Gemini API

✔ Secure JWT authentication system

✔ Cloud-based media storage with ImageKit

✔ REST API design and middleware usage

✔ Secure environment variable handling

✔ Scalable project structure


📄 License

This project is built for educational and portfolio purposes.

👨‍💻 Developed By

Nirmal Bisht
