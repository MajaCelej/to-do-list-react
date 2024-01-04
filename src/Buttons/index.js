import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
    if (tasks.lenght === 0) {
        return null
    }
    
    return (
        <div className="button__newButtons">
            <button onClick={toggleHideDone} className="button__hideOrShowAllDone">
               {hideDone ? "Pokaż" : "Ukryj"} ukończone zadania
            </button>
            <button
               onClick={setAllDone}
               className="button__markAllDone"
               disabled={tasks.every(({ done }) => done)}
            >
               Oznacz wszystkie zadania jako ukończone
            </button>
        </div>
    )
};

export default Buttons;