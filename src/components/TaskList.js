import React from "react";

const TaskList = ({ tasks, onRemoveTask, onToggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          {/* Only apply the line-through to the task text */}
          <span
            onClick={() => onToggleTask(index)}
            className={task.completed ? "completed-text" : ""}
          >
            {task.text}
          </span>
          <button onClick={() => onToggleTask(index)}>
            {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
          {/* Only show "Remove" button if the task is not completed */}
          {!task.completed && (
            <button onClick={() => onRemoveTask(index)}>Remove</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
