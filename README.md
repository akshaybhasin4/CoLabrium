# 🧠 CoLabrium

**Real-Time Team Collaboration Platform** – built with MERN stack, WebSockets, Redis, Docker, and CI/CD.

> A productivity tool that combines task management, real-time messaging, and collaborative code editing — optimized for modern software teams.

---

## 🚀 Features

- 📝 **Task Boards** – Trello-style Kanban boards for organizing tasks
- 💬 **Real-Time Chat** – Team and private chat with WebSocket (Socket.io)
- 👥 **User Roles** – Admin, Member, Guest with RBAC
- 🔄 **Live Code Editor** – Collaborative coding with Monaco Editor
- 🧠 **Whiteboard (optional)** – Draw ideas and brainstorm visually
- 📬 **Email Notifications** – Get notified when added to a board
- ⚙️ **CI/CD with GitHub Actions** – Auto deploy to Render/Fly.io
- 🐳 **Dockerized Architecture** – Fully containerized with Redis & Mongo
- 📊 **Monitoring & Logging** – Winston, Morgan, and health checks
- 🔐 **Authentication** – JWT-based Auth with secure access control

---

## 🏗️ Tech Stack

| Frontend        | Backend         | DevOps / Infra     |
|-----------------|------------------|---------------------|
| React (Vite)    | Node.js + Express | Docker + Docker Compose |
| Zustand / Redux | MongoDB + Mongoose | GitHub Actions |
| TailwindCSS     | Redis (Cache + PubSub) | Render / Fly.io |
| Socket.io       | JWT + bcrypt     | Nodemailer + Cron |
| Monaco Editor   | REST APIs        | ESLint + Prettier |

---

## 📸 Screenshots

| Kanban Board | Live Chat | Code Editor |
|--------------|-----------|-------------|
| ![Kanban](./assets/kanban.png) | ![Chat](./assets/chat.png) | ![Editor](./assets/code-editor.png) |

---

## 📁 Folder Structure
/client # React Frontend
/server # Node.js Backend
/docker # Docker & Nginx config
/redis # Redis config if needed
/postman # API collection
