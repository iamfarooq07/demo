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
    // Styled background using 'akro-dark' and text using 'akro-light'
    <div className="min-h-screen bg-akro-dark text-akro-light flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-akro p-6 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center tracking-wide">
          Task Manager
        </h1>

        <form onSubmit={addSubmit} className="flex gap-2 mb-6">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter Your Task"
            className="flex-1 bg-akro-dark border border-gray-700 rounded-lg px-4 py-2 text-akro-light placeholder-gray-500 focus:outline-none focus:border-akro-accent transition-colors"
          />
          {/* Button uses the vibrant 'akro-accent' color */}
          <button className="bg-akro-accent hover:opacity-90 border-gray-700 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-200 active:scale-95">
            Add Task
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.map((item, index) => (
            <li 
              key={index} 
              className="bg-akro-dark border border-gray-800 rounded-lg px-4 py-3 flex items-center justify-between text-sm hover:border-gray-700 transition-colors"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {tasks.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-4">No tasks yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}

export default App;