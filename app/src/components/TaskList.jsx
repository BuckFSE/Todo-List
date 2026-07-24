function TaskList({tasks}) {



  return (
    <section className="tasks">

      <h2>My Tasks</h2>

      {tasks.map((task, index) => (

        <div className="task-card" key={index}>

          <div>

            <h3>{task.title}</h3>

            <p>{task.priority}</p>

          </div>

          <span>{task.due}</span>

          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>

        </div>

      ))}

    </section>
  );
}

export default TaskList;