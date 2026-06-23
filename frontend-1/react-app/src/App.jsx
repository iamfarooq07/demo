import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={addSubmit}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter Your Task"
        />
        <button>Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;