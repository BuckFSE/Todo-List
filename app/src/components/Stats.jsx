function Stats({ tasks }) {

 const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        task => task.completed
    ).length;

    const importantTasks = tasks.filter(
        task => task.important
    ).length;

    

  return (
    <section className="stats">

       <div className="card">
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
    </div>

    <div className="card">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
    </div>

    <div className="card">
        <h3>{importantTasks}</h3>
        <p>Important</p>
    </div>

    </section>
  );
}

export default Stats;