import React from "react";

const TaskList = ({ tasks, onRemoveTask, onToggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <span onClick={() => onToggleTask(index)}>{task.text}</span>
          <button onClick={() => onRemoveTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
