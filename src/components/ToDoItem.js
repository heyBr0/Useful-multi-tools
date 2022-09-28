const ToDoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todoItem"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button id="completeToDo" onClick={() => completeTodo(index)}>Complete</button>
        <button id="removeToDo" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};

export default ToDoItem;
