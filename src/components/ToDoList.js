import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList }) => {
    return (
        <div>
            <div>
                {toDoList.map((toDoItem) => (
                    <ToDo key={toDoItem.id} toDoItem={toDoItem.name}></ToDo>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
