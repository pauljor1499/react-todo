import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
    const [todo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    return (
        <div className="App">
            <div>
                <Header />
                <Form todo={todo} setToDo={setToDo} toDoList={toDoList} setToDoList={setToDoList} />
                <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
            </div>
        </div>
    );
}

export default App;
