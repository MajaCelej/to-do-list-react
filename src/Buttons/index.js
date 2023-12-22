import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
    if (tasks.lenght === 0) {
        return null
    }
    
    return (
        <div className="task__newButtons">
            <button className="task__hideOrShowAllDone">
               {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone zadania
            </button>
            <button 
              className="task__markAllDone"
              disabled={tasks.every(({ done }) => done)}
            >
              Oznacz wszystkie zadania jako ukończone
            </button>`
        </div>
    )
};

export default Buttons;