import "./style.css";

const Tasks = ({tasks, hideDone}) => (
    <ul className="task__list">
        {tasks.map(task=> (
            <li 
            key={task.id}
            className={`task__item ${task.done && hideDone ? " task__item--hidden" : ""}`}
            >
                <span className="task__ToDoList">
                <button className="task__button--done">
                {task.done ? "✔" : ""}
                </button>
                <span className={`task__content ${task.done ? "task__content--done" : ""}`}>
                {task.content}
                </span>
                <button className="task__button--remove">🗑</button>
               </span>
            </li>
        ))}
    </ul>
);

export default Tasks;