import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
 /*  const initialState = localStorage.getItem("toDoList") || []  [
    {
      text: "Read a book",
      isCompleted: false,
    },
    {
      text: "Cook a dinner",
      isCompleted: false,
    },
    {
      text: "Learn Type Script",
      isCompleted: false,
    },
  ];  */
  const initialState = JSON.parse(localStorage.getItem('toDoList'));
  useEffect(() => {
   
    if (initialState) {
      setToDo(initialState);
    }
  }, []);

  const [task, setTask] = useState("");
  const [toDoList, setToDo] = useState([]);

 

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
  }, [toDoList])

  const addTodo = (text) => {
    const newList = [...toDoList, { text }];
    setToDo(newList);
  };

  const completeTodo = (index) => {
    const newList = [...toDoList];
    newList[index].isCompleted = true;
    setToDo(newList);
  };

  const removeTodo = (index) => {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDo(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask("");
  };



  return (
    <div className="todo">
      <h1>To Do List</h1>
      <div className="todo-list">
        
        <div>
          <form onSubmit={handleSubmit}>
            <p id="infoP">
              Add tasks by pressing "Enter" 
              <br/>
              or clicking on the button
            </p>

            <input
              type="text"
              className="inputToDo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <div>
              <button className="button-85" onClick={handleSubmit}>Add Task</button>
            </div>
          </form>
        </div>
        <div id="displayToDo">
          {toDoList.map((todo, index) => (
            <ToDoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
