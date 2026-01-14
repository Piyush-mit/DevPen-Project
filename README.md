# 🧩 Devpen Compiler

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-TS-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Utility-blue?logo=tailwindcss)
![Redux](https://img.shields.io/badge/Redux-State-purple?logo=redux)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

**Devpen Compiler** is a full-stack, CodePen-inspired web application built using the **MERN stack**.  
It allows users to **write, run, and save HTML, CSS, and JavaScript code in real time** directly from their browser.

The application provides a **secure, authenticated environment** where users can manage personal code snippets and instantly preview results using a **live iframe-based sandbox**.

---

## ✨ Features

### 💻 Live Code Editor
- Write **HTML, CSS, and JavaScript** with syntax highlighting
- Powered by **CodeMirror**
- Real-time output preview using an **iframe sandbox**

### 🔐 Authentication & Security
- Email & password-based authentication
- JWT-based authentication stored in **HTTP-only cookies**
- Password hashing using **bcrypt**
- Input validation with **Zod**
- Custom middleware for route protection

### 💾 Project Management
- Create and save code projects
- Edit and reopen saved projects anytime
- Persistent storage using **MongoDB**

### 🧠 Protected Routes
- Only authenticated users can:
  - Save projects
  - View personal projects
  - Edit existing projects

### 🎨 Modern UI
- Fully responsive design
- Built with **Tailwind CSS** and **Shadcn UI**
- Light & Dark theme support

---

## 🛠 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Redux + useState
- CodeMirror (code editor)
- iframe sandbox (live preview)

### Backend
- Node.js
- TypeScript
- Express.js
- REST API architecture
- JWT authentication (HTTP-only cookies)
- bcrypt (password hashing)
- Zod (validation)
- Custom authentication middleware

### Database
- MongoDB
- Mongoose ODM

---

## 📂 Project Structure

```
DevPen/
│
├── client/
├── server/
├── screenshots/
├── README.md
```

---

## 📸 Screenshots

### 🏠 Landing Page (Light Theme)
![Landing Light](screenshots/landingLight.png)

### 🌙 Landing Page (Dark Theme)
![Landing Dark](screenshots/landingDark.png)

### 🔐 Sign In Page (Light)
![Sign In Light](screenshots/signinLight.png)

### 🌙 Sign In Page (Dark)
![Sign In Dark](screenshots/signinDark.png)

### 📝 Sign Up Page (Light)
![Sign Up Light](screenshots/signupLight.png)

### 🌙 Sign Up Page (Dark)
![Sign Up Dark](screenshots/signupDark.png)

### 💻 Compiler – Multi Theme Support
![Multi Theme Compiler](screenshots/multiThemeCompiler.png)

### 📁 Saved Projects Section
![Saved Projects](screenshots/savedProjectsSection.png)

### 🆕 New Project Section
![New Project](screenshots/newProjectSection.png)

### ❌ 404 – Not Found Page
![Error Page](screenshots/errorPage.png)

---

## 🔐 Environment Variables

### Frontend (`client/.env`)
```env
VITE_REACT_APP_BACKEND_BASEURL=your_backend_url
```

### Backend (`server/.env`)
```env
MONGO_URL=your_mongodb_connection_string
CLIENT_URL=your_frontend_url
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Local Setup

```bash
git clone https://github.com/Piyush-mit/DevPen-Project.git
cd DevPen 
```

---

## 📄 License

MIT License
