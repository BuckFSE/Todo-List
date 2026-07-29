import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import QuickActions from "./components/QuickActions";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(task){

    setTasks([...tasks, task]);

  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
}

function editTask(id, newTitle) {

    setTasks(
        tasks.map(task =>
            task.id === id
                ? { ...task, title: newTitle }
                : task
        )
    );

}

  return (
    <div className="app">

      <Navbar />

      <main className="main-content">

        <Hero addTask={addTask} />

        <Stats tasks={tasks}/>

        <QuickActions />

        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

      </main>

    </div>
  );
}

export default App;