import { useState } from "react";

function Hero({ addTask }) {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [important, setImportant] = useState(false);
 

    function handleSubmit(e){

        e.preventDefault();

        if(title.trim() === "") return;

        addTask({
            id: Date.now(),
            title,
            completed:false,
            important
        });

        setTitle("");

        setShowForm(false);

    }

    return (

        <section className="hero">

            <div>

                <h2>Welcome Back 👋</h2>

                <p>Stay organized and finish your tasks.</p>

            </div>

            <button onClick={() => setShowForm(true)}>
                Create Task
            </button>

            {showForm && (

                <form className="task-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Task name..."
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />


                    <label>

                        <input
                            type="checkbox"
                            checked={important}
                            onChange={(e) => setImportant(e.target.checked)}
                        />

                        Mark as Important

                    </label>


                    <button type="submit">
                        Add
                    </button>

                </form>

            )}

        </section>

    );

}

export default Hero;