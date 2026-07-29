import { useState } from "react";

function TaskList({ tasks, deleteTask, editTask }) {

    const [editingId, setEditingId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    function startEditing(task) {
        setEditingId(task.id);
        setEditedTitle(task.title);
    }

    function saveEdit(id) {

        if (editedTitle.trim() === "") return;

        editTask(id, editedTitle);

        setEditingId(null);
        setEditedTitle("");

    }

    return (

        <section className="tasks">

            <h2>My Tasks</h2>

            {tasks.length === 0 ? (

                <p>No tasks yet.</p>

            ) : (

                tasks.map(task => (

                    <div className="task-card" key={task.id}>

                        {editingId === task.id ? (

                            <input
                                value={editedTitle}
                                onChange={(e) =>
                                    setEditedTitle(e.target.value)
                                }
                            />

                        ) : (

                            <h3>{task.title}</h3>

                        )}

                        <div className="buttons">

                            {editingId === task.id ? (

                                <button
                                    onClick={() => saveEdit(task.id)}
                                >
                                    Save
                                </button>

                            ) : (

                                <button
                                    onClick={() => startEditing(task)}
                                >
                                    Edit
                                </button>

                            )}

                            <button
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))

            )}

        </section>

    );

}

export default TaskList;