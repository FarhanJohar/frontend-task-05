import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FetchDataPage from "./components/FetchDataPage"; // Import FetchDataPage
import FetchDataNavigation from "./components/FetchDataNavigation"; // Import FetchDataNavigation
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    if (task.trim() === "") return;
    if (tasks.some((t) => t.text === task)) return;
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <div className="app">
        {/* This will keep the navigation always visible */}
        <header className="header">
          <h1>React App with Routing</h1>
          <FetchDataNavigation /> {/* Render Navigation globally */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FetchDataPage />} />
            <Route
              path="/to-do"
              element={
                <>
                  <AddTask onAddTask={handleAddTask} />
                  <TaskList
                    tasks={tasks}
                    onRemoveTask={handleRemoveTask}
                    onToggleTask={toggleTaskCompletion}
                  />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
