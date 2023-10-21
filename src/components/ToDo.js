import React from "react";
import styles from "../style.module.css";

const ToDo = ({ toDoItem }) => {
    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{toDoItem}</h3>
                <button className={styles.deletebutton}>Done</button>
            </div>
        </div>
    );
};

export default ToDo;
