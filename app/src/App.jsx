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

  return (
    <div className="app">

      <Navbar />

      <main className="main-content">

        <Hero addTask={addTask} />

        <Stats tasks={tasks}/>

        <QuickActions />

        <TaskList tasks={tasks}/>

      </main>

    </div>
  );
}

export default App;