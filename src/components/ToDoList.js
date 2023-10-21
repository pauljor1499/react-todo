import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, setToDoList }) => {
    return (
        <div>
            <div>
                {toDoList.map((toDoItem) => (
                    <ToDo key={toDoItem.id} toDoItem={toDoItem} toDoList={toDoList} setToDoList={setToDoList}></ToDo>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
