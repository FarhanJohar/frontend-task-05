import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
