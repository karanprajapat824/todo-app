# 📝 Modern Todo App

A clean and responsive **Todo App** built with **React** and **TypeScript**, designed to help users manage their tasks efficiently. It includes essential features like adding, deleting, marking tasks as complete/incomplete, and viewing task statistics such as total tasks, completed tasks, and pending tasks.

---

## 🚀 Features

- ✅ **Add Tasks** – Quickly add new tasks with a title.
- ❌ **Delete Tasks** – Remove individual tasks.
- ✔️ **Mark as Complete/Incomplete** – Toggle task status using a checkbox.
- 📊 **Task Stats Dashboard** – View total tasks, completed tasks, and pending tasks at a glance.
- 🌓 **Dark Mode** – Optional light/dark theme (if implemented).
- 🔁 **Real-time Updates** – Automatically updates task stats and UI as you interact.

---

## 🖥️ Tech Stack

| Tech           | Description                    |
|----------------|--------------------------------|
| **React**      | Frontend UI Framework          |
| **TypeScript** | Strongly typed JavaScript      |
| **Tailwind**   | Styling  |

---

## 📂 Project Structure

```
todo-app/
│
├── public/                 # Static files (index.html, icons)
├── src/
│   ├── components/         # Reusable UI components (TaskItem, StatsCard, etc.)
│   ├── pages/              # Main pages (Home.tsx)
│   ├── types/              # TypeScript types and interfaces
│   ├── App.tsx             # Main App component
│   ├── index.tsx           # Entry point
│   └── styles/             # Global and component-specific styles
│
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript config
├── README.md               # You're reading it!
```

---

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/karanprajapat824/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App Locally**
   ```bash
   npm run dev
   ```

4. Open in your browser:
   ```
   http://localhost:8080
   ```

## 📈 Task Stats

The app provides real-time statistics:
- **Total Tasks**
- **Completed Tasks**
- **Pending Tasks**

These stats automatically update when tasks are added, deleted, or toggled.

---

## 🤝 Author

**Developed by [karanprajapat824](https://github.com/karanprajapat824)**  
If you like this project, feel free to ⭐️ the repo or share your feedback!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
