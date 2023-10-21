import React, { useState } from "react";
import styles from "../style.module.css";

const Form = ({ todo, setToDo, toDoList, setToDoList }) => {
    const [counter, setCounter] = useState(0);

    const handleChange = (event) => {
        setToDo(event.target.value);
        // console.log(todo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoList([...toDoList, { id: counter, name: todo }]);
        setToDo((todo = ""));
        setCounter(counter + 1);
        // console.log(toDoList);
    };

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoinput} type="text" placeholder="Add To Do Item" />
                <button type="submit" className={styles.todobutton}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
