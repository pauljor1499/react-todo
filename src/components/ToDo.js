import React from "react";
import styles from "../style.module.css";

const ToDo = ({ toDoItem, toDoList, setToDoList }) => {
    const deleteToDo = () => {
        setToDoList(toDoList.filter((item) => item.id !== toDoItem.id));
        console.log(toDoList);
    };

    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{toDoItem.name}</h3>
                <button onClick={deleteToDo} className={styles.deletebutton}>
                    Done
                </button>
            </div>
        </div>
    );
};

export default ToDo;
