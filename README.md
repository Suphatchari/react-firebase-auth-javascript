# React Firebase Auth (JavaScript)

Starter template for building authentication flows using **React + Firebase**, written in **JavaScript (no TypeScript)**.  
This project is designed to be a **boilerplate** for login/register systems with routing, validation, and user context management — ready to extend and customize for real-world applications.

> ⚙️ Built with [Vite](https://vitejs.dev), [Firebase Auth + Firestore](https://firebase.google.com/), and [React 19](https://react.dev/).

---

## 🖼️ Preview

### 🔐 Login Page
![Login preview](./public/preview/preview-login.png)

### 📝 Register Page
![Register preview](./public/preview/preview-register.png)

---

## 🔋 Features

- ✅ React 19 + Vite (HMR, modern setup)
- 🔐 Firebase Authentication (Email/Password)
- 📦 Firestore integration
- 💾 Custom `UserAuthContext` with context API
- 📄 Protected Routes
- 📋 Form validation using **Formik + Yup**
- 🎨 UI with Bootstrap 5 + React-Bootstrap
- 📢 Toast notifications with **React-Toastify**
- ⚠️ Email duplication check before registration
- ✨ Pre-styled login/register pages (can be customized)
- 📁 Path aliases for clean import structure

---

## 📁 Folder Structure

```
src/
  ├── assets/
  ├── auth/
  ├── components/
  ├── context/
  ├── css/
  ├── pages/
  ├── router/
  ├── App.jsx
  ├── main.jsx
```

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run development server**

```bash
npm run dev
```

3. **Open in browser**  
[http://localhost:5173](http://localhost:5173)

---

## 🧪 Environment Variables

Create a `.env` file based on `.env.example` and set your Firebase credentials:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
...
```

---

## 🔧 Firebase Setup Guide

Before running the project, make sure you have a Firebase project ready and follow these steps:

### 1. Enable Authentication
- Go to **Firebase Console** > **Build > Authentication**
- Click **"Get started"**
- Enable **Email/Password** as a Sign-in method

### 2. Create Firestore Database
- Go to **Firebase Console** > **Build > Firestore Database**
- Click **"Create database"**
- Choose **"Start in test mode"** (for development)
- Select a region (e.g., `asia-southeast1`)

### 3. Get Firebase config
- Go to **Project Settings** > **Your apps**
- Create a new **Web app** (</> icon)
- Copy your Firebase config and paste it into a `.env` file:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

> 🧪 Tip: You can use `.env.example` as a reference

---

## 🧱 Tech Stack

| Technology           | Description / Link |
|----------------------|--------------------|
| **React**            | [react.dev](https://react.dev/) |
| **Vite**             | [vitejs.dev](https://vitejs.dev/) |
| **Firebase**         | [firebase.google.com](https://firebase.google.com/) |
| **Formik**           | [formik.org](https://formik.org/) |
| **Yup**              | [github.com/jquense/yup](https://github.com/jquense/yup) |
| **React-Bootstrap**  | [react-bootstrap.github.io](https://react-bootstrap.github.io/) |
| **React-Router-Dom** | [reactrouter.com](https://reactrouter.com/) |
| **React-Toastify**   | [react-toastify](https://fkhadra.github.io/react-toastify/) |
| **Animate.css**      | [animate.style](https://animate.style/) |

---

## 📌 License

This project is provided as a starting point. You can clone, extend, and reuse freely.

---

Made with ❤️ by [Suphatchari]